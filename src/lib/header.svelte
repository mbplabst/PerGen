<script>
  import Hamburger from "$lib/hamburger.svelte";
  import { AppBar } from "@skeletonlabs/skeleton";
</script>

<header>
  <AppBar
    gridColumns="grid-cols-3"
    slotDefault="place-self-center"
    slotTrail="place-content-end"
  >
    <svelte:fragment slot="lead">
      <Hamburger />
    </svelte:fragment>
    <p id="title">PerGen</p>
    <svelte:fragment slot="trail"></svelte:fragment>
  </AppBar>
</header>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Rowdies:wght@300;400;700&display=swap");

  #title {
    font-size: 30px;
    font-family: "Rowdies", sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
  }

  header {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 8px 0px;
  }
</style>
