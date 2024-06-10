<script>
  import { lockedState, globalGender } from "$lib/store/variables.js";
  import { genderList } from "$lib/data/genders.js";
  import { onMount } from "svelte";
  import "../style.css/";

  let isVisible = false;

  function getRandomGender() {
    const randomIndex = Math.floor(Math.random() * genderList.length);
    $globalGender = genderList[randomIndex];
    $lockedState = false;
  }

  /**
   * @param {number} int
   */
  function setGender(int) {
    if (int > 2) {
      return;
    }
    $globalGender = genderList[int];
    toggleVisibility();
    $lockedState = false;
  }

  function resetGender() {
    $globalGender = "Nicht ausgewählt";
    $lockedState = true;
  }

  function toggleVisibility() {
    isVisible = !isVisible;
  }

  onMount(() => {
    const toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", toggleVisibility);
  });
</script>

<button class="selected flex" id="toggleButton">
  <p>{$globalGender}</p>
  <button>
    {#if isVisible}
      <i class="fa-solid fa-chevron-up grey"></i>
    {:else}
      <i class="fa-solid fa-chevron-down grey"></i>
    {/if}
  </button>
</button>

{#if isVisible}
  <div class="selected" id="dropdown">
    <button class="btn dropdown-button" on:click={() => setGender(0)}>
      <i class="fa-solid fa-mars mr-2 icon"></i>Männlich
    </button>
    <button class="btn dropdown-button" on:click={() => setGender(1)}>
      <i class="fa-solid fa-venus mr-2 icon"></i>Weiblich
    </button>
    <button class="btn dropdown-button" on:click={() => setGender(2)}>
      <i class="fa-solid fa-mars-and-venus mr-2"></i>Divers
    </button>
  </div>
{/if}

<div class="button-group">
  <button
    class="btn btn-sm variant-ghost-secondary button-group-badge badge"
    on:click={getRandomGender}
  >
    <i class="fa-solid fa-random mr-2 random"></i>
    Zufall
  </button>

  <button
    class="btn btn-sm variant-ghost-secondary button-group-badge badge"
    on:click={resetGender}
  >
    <i class="fa-solid fa-trash-can mr-2 reset"></i>
    <span>Löschen</span>
  </button>
</div>

<style>
  .dropdown-button {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    border-radius: 5px;
    background-color: rgb(12, 12, 12);
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 18px;
  }

  .icon {
    margin-right: 15px;
  }

  span {
    margin-left: 0px !important;
  }
</style>
