<script lang="ts">
  export let progress: number;
</script>

<style>
  .card {
    border-radius: 5px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
      0px 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.4s ease;
  }

  .card:hover {
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
</style>

<div class="card">
  {#if progress !== undefined}
    <mwc-linear-progress {progress} />
  {/if}
  <slot />
</div>
