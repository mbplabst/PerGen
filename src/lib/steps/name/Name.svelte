<script>
  import { lockedState, globalName } from "../../store/variables.js";
  import { preNameList } from "$lib/data/prenames.js";
  import { surNameList } from "../../data/surnames.js";
  import { onMount } from "svelte";

  let isVisible = false;
  let preName = "";
  let surName = "";

  // -- // -- // -- //

  function setGlobalName() {
    if (preName === "" && surName === "") {
      $globalName = "Nicht ausgewählt";
      return;
    }
    $globalName = preName + " " + surName;
  }

  function getRandomFullName() {
    getRandomPreName();
    getRandomSurName();
    $lockedState = false;
    setGlobalName();
  }

  function resetFullName() {
    preName = "";
    surName = "";
    $globalName = "Nicht ausgewählt";
    $lockedState = true;
  }

  // -- // -- // -- //

  function getRandomPreName() {
    const randomIndex = Math.floor(Math.random() * preNameList.length);
    preName = preNameList[randomIndex];
    setGlobalName();
  }

  function getRandomSurName() {
    const randomIndex2 = Math.floor(Math.random() * surNameList.length);
    surName = surNameList[randomIndex2];
    setGlobalName();
  }

  function deletePreName() {
    preName = "";
    $lockedState = true;
    setGlobalName();
  }

  function deleteSurName() {
    surName = "";
    $lockedState = true;
    setGlobalName();
  }

  // -- // -- // -- //

  function toggleVisibility() {
    isVisible = !isVisible;
  }

  onMount(() => {
    const toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", toggleVisibility);
  });
</script>

<button class="selected flex" id="toggleButton">
  <p>{$globalName}</p>
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
    <div class="input-container">
      <input
        class="input"
        bind:value={preName}
        type="text"
        placeholder="Eigener Vorname"
        on:input={() => console.log(preName)}
      />
      <button
        class="btn dropdown-control-btn"
        type="submit"
        on:click={getRandomPreName}
      >
        <i class="fa-solid fa-repeat"></i>
      </button>
      <button
        class="btn dropdown-control-btn"
        type="submit"
        on:click={deletePreName}
      >
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
    <!--  -->
    <div class="input-container dropdown-correction">
      <input
        class="input"
        bind:value={surName}
        type="text"
        placeholder="Eigener Nachname"
        on:input={() => console.log(surName)}
      />
      <button
        class="btn dropdown-control-btn"
        type="submit"
        on:click={getRandomSurName}
      >
        <i class="fa-solid fa-repeat"></i>
      </button>
      <button
        class="btn dropdown-control-btn"
        type="submit"
        on:click={deleteSurName}
      >
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  </div>
{/if}

<div class="button-group">
  <button
    class="btn btn-sm variant-ghost-secondary button-group-badge badge"
    on:click={getRandomFullName}
  >
    <i class="fa-solid fa-shuffle mr-2 random"></i>
    Zufall
  </button>
  <button
    class="btn btn-sm variant-ghost-secondary button-group-badge badge"
    on:click={resetFullName}
  >
    <i class="fa-solid fa-trash-can mr-2 reset"></i>
    Löschen
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

  .input-container {
    display: flex;
  }

  input {
    border-radius: 5px;
    background-color: rgb(12, 12, 12);
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 13px;
    font-size: 15px;
  }

  .dropdown-control-btn {
    background-color: rgb(12, 12, 12);
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    padding: 15px;
    font-size: 15px;
  }

  .dropdown-correction {
    margin-top: -10px;
  }
</style>
