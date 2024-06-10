<script>
  import { RangeSlider } from "@skeletonlabs/skeleton";
  import { lockedState, globalAge } from "../../store/variables.js";
  import { onMount } from "svelte";
  import "../style.css";

  let value = 0;
  let isVisible = false;
  let maxAge = 100;

  function setAge() {
    $globalAge = value.toString();
    $lockedState = false;
  }

  function getRandomAge() {
    value = Math.floor(Math.random() * maxAge) + 1;
    setAge();
  }

  function resetAge() {
    $globalAge = "Nicht ausgewählt";
    value = 0;
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
  {#if $globalAge === "Nicht ausgewählt"}
    <p>Nicht ausgewählt</p>
  {:else}
    <p>Ausgewählt: {value} Jahre</p>
  {/if}

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
    <div class="slider-container">
      <RangeSlider
        name="range-slider"
        bind:value
        max={maxAge}
        step={1}
        on:change={setAge}
      ></RangeSlider>
    </div>
  </div>
{/if}


<div class="button-group">
  <button
    class="btn btn-sm variant-ghost-secondary button-group-badge badge"
    on:click={getRandomAge}
  >
    <i class="fa-solid fa-random mr-2 random"></i>
    Zufall
  </button>
  <!--  -->
  <button
    class="btn btn-sm variant-ghost-secondary button-group-badge badge"
    on:click={resetAge}
  >
    <i class="fa-solid fa-trash-can mr-2 reset"></i>
    Löschen
  </button>
</div>

<style>
  .slider-container {
    border-radius: 5px;
    background-color: rgb(12, 12, 12);
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
  }
</style>
