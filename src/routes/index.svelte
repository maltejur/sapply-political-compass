<script>
  import Compass from "../components/Compass.svelte";
</script>

<style>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  .header h1 {
    font-size: 45px;
    margin-left: 0.7em;
    margin-top: 0;
  }
</style>

<div class="content">
  <div class="header">
    <Compass />
    <h1>Sapply Political<br />Compass Test</h1>
  </div>
  <div class="section">
    <div class="has-text-centered">
      <a class="button is-primary is-large" href="/quiz">Take the test</a>
    </div>
  </div>
</div>
