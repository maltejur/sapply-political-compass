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
    flex-direction: row;
  }

  .container h1 {
    font-size: 45px;
    margin-left: 0.7em;
    margin-top: 0;
  }
</style>

<div class="container">
  <div class="header">
    <Compass />
    <h1>Sapply Political<br />Compass Test</h1>
  </div>
  <mwc-button
    label="Take the test"
    outlined={true}
    on:click={() => {
      dispatch('navigate', 'instructions');
    }} />
</div>
