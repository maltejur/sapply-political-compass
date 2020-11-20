<script lang="ts">
  import Index from "./routes/Index.svelte";
  import Instructions from "./routes/Instructions.svelte";
  import Questions from "./routes/Questions.svelte";
  import Result from "./routes/Result.svelte";

  let route = "index";

  function navigate(ev: CustomEvent<string>) {
    route = ev.detail;
  }
</script>

{#if route == 'index'}
  <Index on:navigate={navigate} />
{:else if route == 'instructions'}
  <Instructions on:navigate={navigate} />
{:else if route == 'questions'}
  <Questions on:navigate={navigate} />
{:else if route == 'result'}
  <Result on:navigate={navigate} />
{:else}
  <h1 class="title">Page {route} not found</h1>
{/if}
