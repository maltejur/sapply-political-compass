<script lang="ts">
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { quiz } from "../stores";
  import { Stance } from "../lib/models";
  import { createEventDispatcher } from "svelte";
  import SideLayout from "../components/SideLayout.svelte";
  import Card from "../components/Card.svelte";

  let dispatch = createEventDispatcher();

  let currentQuestion = 0;
  let tab: HTMLElement;

  function prevQuestion() {
    if (currentQuestion == 0) {
      dispatch("navigate", "instructions");
    } else {
      currentQuestion--;
    }
  }

  function nextQuestion() {
    if (currentQuestion == get(quiz).questions.length - 1) {
      dispatch("navigate", "result");
    } else {
      currentQuestion++;
    }
  }

  onMount(() => {
    tab.addEventListener("MDCTabBar:activated", (event) => {
      quiz.update((quiz) => {
        quiz.questions[currentQuestion].stance = event.detail.index / 2 - 1;
        quiz.calcPosition();
        return quiz;
      });
    });
  });
</script>

<style>
  p {
    font-size: 30px;
  }

  .progress {
    height: 4px;
    margin-bottom: 0;
    transition: width 0.4s ease;
    background-color: rgb(0, 209, 178);
  }

  .green {
    --mdc-tab-text-label-color-default: green;
    --mdc-theme-primary: green;
    --mdc-theme-secondary: green;
  }

  .lightGreen {
    --mdc-tab-text-label-color-default: rgba(0, 128, 0, 0.5);
    --mdc-theme-primary: rgba(0, 128, 0, 0.5);
    --mdc-theme-secondary: rgba(0, 128, 0, 0.5);
  }

  .lightRed {
    --mdc-tab-text-label-color-default: rgba(255, 0, 0, 0.5);
    --mdc-theme-primary: rgba(255, 0, 0, 0.5);
    --mdc-theme-secondary: rgba(255, 0, 0, 0.5);
  }

  .red {
    --mdc-tab-text-label-color-default: red;
    --mdc-theme-primary: red;
    --mdc-theme-secondary: red;
  }

  .card-body {
    padding: 2em 2em 0 2em;
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
  }
</style>

<SideLayout>
  <Card
    progress={$quiz.questions.length == 0 ? 0 : currentQuestion / $quiz.questions.length}>
    <!-- <div
      class="progress"
      style="width: {(currentQuestion * 100) / $quiz.questions.length}%" /> -->
    <div class="card-body">
      <h3>
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- <a on:click={prevQuestion}>&lt;</a> -->
        Question
        {currentQuestion + 1}
        of
        {$quiz.questions.length}
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- <a on:click={nextQuestion}>&gt;</a> -->
      </h3>
      <p>{$quiz.questions[currentQuestion].question}</p>
    </div>
    <mwc-tab-bar
      activeIndex={$quiz.questions[currentQuestion].stance ? $quiz.questions[currentQuestion].stance * 2 + 2 : 2}
      bind:this={tab}>
      <mwc-tab
        class="red"
        label="Strongly Disagree"
        icon="exposure_neg_2"
        stacked={true} />
      <mwc-tab
        class="lightRed"
        label="Disagree"
        icon="exposure_neg_1"
        stacked={true} />
      <mwc-tab label="Neutral / Unsure" icon="exposure_zero" stacked={true} />
      <mwc-tab
        class="lightGreen"
        label="Agree"
        icon="exposure_plus_1"
        stacked={true} />
      <mwc-tab
        class="green"
        label="Strongly Agree"
        icon="exposure_plus_2"
        stacked={true} />
    </mwc-tab-bar>
  </Card>
  <div class="navigation">
    <mwc-fab on:click={prevQuestion} icon="navigate_before" />
    <mwc-fab on:click={nextQuestion} icon="navigate_next" />
  </div>
</SideLayout>
