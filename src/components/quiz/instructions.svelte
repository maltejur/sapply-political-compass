<script lang="ts">
  import Quiz from "../../lib/quiz";
  import { quiz, showIndicators } from "../../stores";
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();

  let isShuffle = true;
  let isShowIndicators = true;

  function handleSubmit(event: Event) {
    event.preventDefault();
    quiz.set(new Quiz(isShuffle));
    console.log(isShuffle, new Quiz(isShuffle));
    showIndicators.set(isShowIndicators);
    dispatch("navigate", "questions");
  }
</script>

<style>
  .checkboxes {
    display: flex;
    flex-direction: column;
    margin: 1em;
  }

  .checkboxes label {
    margin-bottom: 0.5em;
  }
</style>

<div class="card">
  <div class="card-content p-6">
    <p class="">
      You will be presented with a series of statements. For each one, click the
      button with your opinion on it.
    </p>
    <form on:submit={handleSubmit}>
      <div class="checkboxes">
        <label class="checkbox">
          <input type="checkbox" bind:checked={isShuffle} />
          Shuffle Questions
        </label>
        <label class="checkbox">
          <input type="checkbox" bind:checked={isShowIndicators} />
          Show me my progress
        </label>
      </div>
      <button type="submit" class="button is-primary is-medium">Proceed</button>
    </form>
  </div>
</div>
