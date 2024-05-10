<script>
  import { goto } from "$app/navigation";

  function linkHome() {
    goto("/home");
  }

  function linkCreateNew() {
    goto("/new");
  }

  function linkSaved() {
    goto("/saved");
  }
</script>

<header>
  <button class="btn variant-ghost button-header" on:click={linkHome}>
    <p class="header-menu-item">
      <i class="fa-solid fa-house icon-correction-right"></i>Home
    </p>
  </button>

  <button class="btn variant-ghost button-header" on:click={linkCreateNew}>
    <p class="header-menu-item">
      <i class="fa-solid fa-user-plus icon-correction-right"></i>New Profile
    </p>
  </button>

  <button class="btn variant-ghost button-header" on:click={linkSaved}>
    <p class="header-menu-item">
      <i class="fa-solid fa-floppy-disk icon-correction-right"></i>Saved
    </p>
  </button>
</header>

<style>
  header {
    display: flex;
    justify-content: center;
    background-color: black;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 8px 0px;
    padding: 10px;
  }

  .button-header {
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 8px;
  }

  .header-menu-item {
    font-family: Arial;
    font-weight: 200;
    color: aliceblue;
    font-size: 13px;
  }

  .icon-correction-right {
    margin-right: 10px;
  }
</style>
