<script lang="ts">
  import Instructions from "../components/quiz/instructions.svelte";
  import Questions from "../components/quiz/questions.svelte";
  import Result from "../components/quiz/Result.svelte";
  import SideLayout from "../components/SideLayout.svelte";

  let step = "instructions";

  function navigate(ev: CustomEvent<any>) {
    step = ev.detail;
  }
</script>

{#if step == 'instructions'}
  <SideLayout>
    <Instructions on:navigate={navigate} />
  </SideLayout>
{:else if step == 'questions'}
  <SideLayout>
    <Questions on:navigate={navigate} />
  </SideLayout>
{:else if step == 'result'}
  <Result />
{/if}
