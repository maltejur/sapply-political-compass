<script lang="ts">
  import Quiz from "../lib/quiz";
  import { quiz, showIndicators } from "../stores";
  import { createEventDispatcher } from "svelte";
  import SideLayout from "../components/SideLayout.svelte";
  import Card from "../components/Card.svelte";

  let dispatch = createEventDispatcher();

  let shuffleSwitch;
  let showIndicatorsSwitch;

  function handleSubmit(event: Event) {
    event.preventDefault();
    quiz.set(new Quiz(shuffleSwitch.checked));
    showIndicators.set(showIndicatorsSwitch.checked);
    dispatch("navigate", "questions");
  }
</script>

<style>
  mwc-formfield {
    display: block;
    margin-bottom: 1em;
  }

  .card-body {
    padding: 2em;
  }

  .navigation {
    display: flex;
    justify-content: flex-end;
    margin-top: 2em;
  }
</style>

<SideLayout>
  <Card>
    <div class="card-body">
      <div class="card-content p-6">
        <h3>Instructions</h3>
        <p class="">
          You will be presented with a series of statements. For each one, click
          the button with your opinion on it.
        </p>
        <form on:submit={handleSubmit}>
          <div class="checkboxes">
            <mwc-formfield label="Shuffle Questions">
              <mwc-switch checked={true} bind:this={shuffleSwitch} />
            </mwc-formfield>
            <mwc-formfield label="Show me my progress">
              <mwc-switch checked={true} bind:this={showIndicatorsSwitch} />
            </mwc-formfield>
          </div>
        </form>
      </div>
    </div>
  </Card>
  <div class="navigation">
    <mwc-fab on:click={handleSubmit} icon="navigate_next" />
  </div>
</SideLayout>
