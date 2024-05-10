<script>
  import { goto } from "$app/navigation";
  export let savedProfilesAmount = 0;

  function linkCreateNew() {
    goto("/new");
  }
</script>

<!-- <h1 class="headline mt-5 mb-5">Gespeicherte Profile</h1> -->

<div class="card p-4 center profile-container variant-ghost">
  {#if savedProfilesAmount == 0}
    <p class="text no-profiles">Keine gespeicherten Profile verfügbar</p>
  {:else if savedProfilesAmount > 0}
    <p class="text">Here are your saved profiles</p>
    <slot></slot>
  {/if}
</div>

<div class="center button-container">
  <button
    class="btn variant-ghost-tertiary"
    type="button"
    on:click={linkCreateNew}
  >
    <i class="fa-solid fa-plus icon"></i>Neues Profil erstellen
  </button>
</div>

<style>
  .profile-container {
    box-shadow: rgba(0, 0, 0, 4) 0px 15px 10px 0px;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .button-container {
    margin-top: 50px;
  }

  button {
    border-radius: 10px;
  }

  .no-profiles {
    margin-top: 125px;
    margin-bottom: 125px;
  }

  @media screen and (min-width: 800px) {
    .profile-container {
      margin-left: 200px;
      margin-right: 200px;
    }
  }

  @media screen and (min-width: 1400px) {
    .profile-container {
      margin-left: 500px;
      margin-right: 500px;
    }
  }

  .icon {
    margin-right: 10px;
  }
</style>
