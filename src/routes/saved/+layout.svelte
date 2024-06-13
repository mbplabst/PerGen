<script>
  import { goto } from "$app/navigation";
  import {
    globalGender,
    globalName,
    globalAge,
  } from "$lib/store/variables.js";

  export let savedProfilesAmount = 0;

  function linkCreateNew() {
    goto("/new");
  }
</script>

<head>
  <title>PerGen | Saved</title>
</head>

<h2 class="center">Deine gespeicherten Profile</h2>

<div
  class="card p-4 center profile-container max-width-container variant-ghost"
>
  {#if savedProfilesAmount == 0}
    <p class="text no-profiles">Keine gespeicherten Profile verfügbar</p>
  {:else if savedProfilesAmount > 0}
    <p class="text">Here are your saved profiles</p>
    <slot></slot>
  {/if}
  <p>
    {$globalName}, {$globalAge},
    {$globalGender},
  </p>
</div>

<div class="center">
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
    margin-top: 25px;
    margin-bottom: 50px;
  }

  button {
    border-radius: 10px;
  }

  .no-profiles {
    margin-top: 125px;
    margin-bottom: 125px;
  }

  .icon {
    margin-right: 10px;
  }
</style>
