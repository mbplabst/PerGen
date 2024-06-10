<script>
  import { lockedState, globalHobbys } from "../../store/variables.js";
  import { hobbyList } from "../../data/hobbys.js";
  import { onMount } from "svelte";
  let isVisible = false;

  function getRandomHobby() {
    const randomIndex = Math.floor(Math.random() * hobbyList.length);
    localHobbys.push(hobbyList[randomIndex]);
    $lockedState = false;
  }

  function resetHobbys() {
    $lockedState = true;
  }

  let localHobbys = [];

  function toggleVisibility() {
    isVisible = !isVisible;
  }

  onMount(() => {
    const toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", toggleVisibility);
  });
</script>

<div class="selected flex" id="toggleButton">
  <p>{$globalHobbys}</p>
  <button>
    {#if isVisible}
      <i class="fa-solid fa-chevron-up grey"></i>
    {:else}
      <i class="fa-solid fa-chevron-down grey"></i>
    {/if}
  </button>
</div>

{#if isVisible}
  <div class="selected" id="dropdown">
    <input
      class="input"
      type="text"
      placeholder="Gib eigene Hobbys ein"
    />
  </div>
{/if}

<div class="button-group">
  <button class="btn btn-sm variant-ghost-secondary" on:click={getRandomHobby}>
    <i class="fa-solid fa-shuffle mr-2 random"></i>
    Random
  </button>
  <button class="btn btn-sm variant-ghost-secondary" on:click={resetHobbys}>
    <i class="fa-solid fa-trash-can mr-2 reset"></i>
    Reset
  </button>
</div>

<style>
  #dropdown {
    display: block;
    justify-content: right;
    text-align: center;
    padding: 2.5px 10px 2.5px 10px;
    margin-top: -15px;
  }
</style>
