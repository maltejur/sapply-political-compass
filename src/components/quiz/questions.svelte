<script lang="ts">
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { quiz } from "../../stores";
  import { goto } from "@sapper/app";
  import { Stance } from "../../lib/models";
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();

  let currentQuestion = 0;

  if (!get(quiz)) goto("/quiz/instructions");

  function prevQuestion() {
    currentQuestion--;
  }

  function nextQuestion() {
    currentQuestion++;
  }

  function submitQuestion(stance: number) {
    quiz.update((quiz) => {
      quiz.questions[currentQuestion].stance = new Stance(stance);
      quiz.calcPosition();
      return quiz;
    });
    if (currentQuestion == get(quiz).questions.length - 1) {
      dispatch("navigate", "result");
    } else {
      currentQuestion++;
    }
  }
</script>

<style>
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .progress {
    height: 4px;
    margin-bottom: 0;
    transition: width 0.4s ease;
    background-color: rgb(0, 209, 178);
  }
</style>

<div class="card">
  <div
    class="progress"
    style="width: {(currentQuestion * 100) / $quiz.questions.length}%" />
  <div class="card-content">
    <h4 class="title is-4">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a on:click={prevQuestion}>&lt;</a>
      Question
      {currentQuestion + 1}
      of
      {$quiz.questions.length}
      <!-- svelte-ignore a11y-missing-attribute -->
      <a on:click={nextQuestion}>&gt;</a>
    </h4>
    <p class="is-size-3">
      {$quiz.questions[currentQuestion].question}{#if $quiz.questions[currentQuestion].stance}
        <span
          class="tag ml-4 {$quiz.questions[currentQuestion].stance.toColor()}">{$quiz.questions[currentQuestion].stance.toString()}</span>
      {/if}
    </p>
  </div>
</div>

<div class="buttons section">
  <button
    on:click={() => {
      submitQuestion(1);
    }}
    class="button is-success ">Strongly Agree</button>
  <button
    on:click={() => {
      submitQuestion(0.5);
    }}
    class="button is-success is-light ">Agree</button>
  <button
    on:click={() => {
      submitQuestion(0);
    }}
    class="button is-light ">Neutral / Unsure</button>
  <button
    on:click={() => {
      submitQuestion(-0.5);
    }}
    class="button is-danger is-light ">Disagree</button>
  <button
    on:click={() => {
      submitQuestion(-1);
    }}
    class="button is-danger ">Strongly Disagree</button>
</div>
