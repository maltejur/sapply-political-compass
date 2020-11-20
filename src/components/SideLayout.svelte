<script>
  import Sidebar from "./Sidebar.svelte";
</script>

<style>
  .grid-container {
    display: grid;
    grid-template-areas: "sidebar main";
    grid-template-columns: 170px auto;
    grid-gap: 40px;
    max-width: 1000px;
    margin: auto;
    margin-top: 100px;
  }

  .sidebar {
    grid-area: sidebar;
  }

  main {
    grid-area: main;
  }
</style>

<div class="grid-container">
  <div class="sidebar">
    <Sidebar />
  </div>
  <main>
    <slot />
  </main>
</div>
