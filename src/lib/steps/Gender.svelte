<script>
  import { lockedState, globalGender } from "../store/variables.js";
  import { genderList } from "../data/genders.js";
  import { updated } from "$app/stores";
  import { onMount } from "svelte";

  let isVisible = false;

  function resetGender() {
    $globalGender = "Nicht ausgewählt";
    $lockedState = true;
  }

  function getRandomGender() {
    const randomIndex = Math.floor(Math.random() * genderList.length);
    $globalGender = genderList[randomIndex];
    $lockedState = false;
  }

  function setGender(int) {
    if (int > 2) {
      return;
    }
    $globalGender = genderList[int];
    $lockedState = false;
    toggleVisibility();
  }

  function toggleVisibility() {
    isVisible = !isVisible;
  }

  onMount(() => {
    const toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", toggleVisibility);
  });

  resetGender();
</script>

<div class="selected flex">
  <p>{$globalGender}</p>
  <button class="btn" id="toggleButton">
    {#if isVisible}
      <i class="fa-solid fa-chevron-up grey fa-lg"></i>
    {:else}
      <i class="fa-solid fa-chevron-down grey fa-lg"></i>
    {/if}
  </button>
</div>

{#if isVisible}
  <div class="selected" id="dropdown">
    <button class="btn dropdown-button" on:click={() => setGender(0)}>
      Männlich
    </button>

    <button class="btn dropdown-button" on:click={() => setGender(1)}>
      Weiblich
    </button>

    <button class="btn dropdown-button" on:click={() => setGender(2)}>
      Divers
    </button>
  </div>
{/if}

<div class="button-group">
  <button
    class="btn btn-sm variant-ghost-secondary grey"
    on:click={getRandomGender}
  >
    <i class="fa-solid fa-random mr-2 random"></i>
    Zufällig
  </button>
  <button
    class="btn btn-sm variant-ghost-secondary grey"
    on:click={resetGender}
  >
    <i class="fa-solid fa-trash-can mr-2 reset"></i>
    Löschen
  </button>
</div>

<style>
  .toggle-button {
    padding: 0;
  }

  #dropdown {
    display: block;
    justify-content: right;
    padding: 2.5px 10px 2.5px 10px;
    margin-top: -15px;
  }

  #toggleButton {
    padding: 0;
  }

  .dropdown-button {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    border-radius: 10px;
    background-color: rgb(12, 12, 12);
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 18px;
  }
</style>
