<script>
  import { lockedState, globalGender } from "../store/variables.js";
  import { genderList } from "../data/genders.js";
  import { updated } from "$app/stores";
  import { onMount } from "svelte";

  let isVisible = false;
  let isSelected = false;

  function getRandomGender() {
    const randomIndex = Math.floor(Math.random() * genderList.length);
    $globalGender = genderList[randomIndex];
    isSelected = false;
  }

  function setGender(int) {
    if (int > 2) {
      return;
    }
    $globalGender = genderList[int];
    toggleVisibility();
    isSelected = false;
  }

  function resetGender() {
    $globalGender = "Nicht ausgewählt";
    $lockedState = true;
    isSelected = false;
  }

  function confirmGender() {
    if ($globalGender === "Nicht ausgewählt") {
      return;
    }
    $lockedState = false;
    isSelected = true;
  }

  function toggleVisibility() {
    isVisible = !isVisible;
  }

  onMount(() => {
    const toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", toggleVisibility);
  });
</script>

<div class="selected flex">
  {#if isSelected}
    <p class="dark-grey">{$globalGender}</p>
  {:else}
    <p>{$globalGender}</p>
  {/if}
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
      <i class="fa-solid fa-mars mr-2 icon"></i>Männlich
    </button>

    <button class="btn dropdown-button" on:click={() => setGender(1)}>
      <i class="fa-solid fa-venus mr-2 icon"></i>Weiblich
    </button>

    <button class="btn dropdown-button" on:click={() => setGender(2)}>
      <i class="fa-solid fa-mars-and-venus mr-2 icon"></i>Divers
    </button>
  </div>
{/if}

<div class="button-group">
  <button
    class="btn btn-sm variant-ghost-secondary button-group-badge grey badge"
    on:click={getRandomGender}
  >
    <i class="fa-solid fa-random mr-2 random"></i>
    Zufall
  </button>
  <button
    class="btn btn-sm variant-ghost-secondary button-group-badge grey badge"
    on:click={resetGender}
  >
    <i class="fa-solid fa-trash-can mr-2 reset"></i>
    Löschen
  </button>
  <button
    class="btn btn-sm variant-ghost-secondary button-group-badge grey badge"
    on:click={confirmGender}
  >
    <i class="fa-solid fa-check mr-2 confirm"></i>
    Bestät.
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

  .icon {
    margin-right: 15px;
  }

  .button-group-badge {
    border-radius: 12px !important;
    margin-right: 5px;
  }

  .dark-grey {
    color: rgb(99, 99, 99);
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
</style>
