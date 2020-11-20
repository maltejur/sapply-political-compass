<script>
  import Compass from "../components/Compass.svelte";
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }

  .header {
    display: flex;
    flex-direction: column;
  }

  .container h1 {
    font-size: 45px;
    margin-left: 0.7em;
    margin-top: 0;
  }
</style>

<div class="container">
  <div class="header">
    <h3>Sapply Political Compass Test</h3>
    <h1>Your Result</h1>
    <Compass big={true} />
    <mwc-button
      label="Restart"
      outlined={true}
      style="margin-top: 120px"
      on:click={() => {
        dispatch('navigate', 'instructions');
      }} />
  </div>
</div>
