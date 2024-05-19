<script>
  import { lockedState, globalGender } from "../store/variables.js";
  import { genderList } from "../data/genders.js";
  import { updated } from "$app/stores";

  let gender;

  function resetGender() {
    gender = "Nicht ausgewählt";
    $globalGender = gender;
    $lockedState = true;
  }

  function getRandomGender() {
    const randomIndex = Math.floor(Math.random() * genderList.length);
    $globalGender = genderList[randomIndex];
    $lockedState = false;
  }

  resetGender();
</script>

<div class="selected">
  <p>{$globalGender}</p>
  <button class="btn p-0">
    <i class="fa-solid fa-chevron-down mt-0.5"></i>
  </button>
</div>

<div class="button-group">
  <button
    class="btn btn-sm variant-ghost-secondary gray"
    on:click={getRandomGender}
  >
    <i class="fa-solid fa-random mr-2 random"></i>
    Zufällig
  </button>
  <button
    class="btn btn-sm variant-ghost-secondary gray"
    on:click={resetGender}
  >
    <i class="fa-solid fa-trash-can mr-2 reset"></i>
    Löschen
  </button>
</div>
<hr class="!border-t-2" />

<style>
  /* .custom-select {
    position: relative;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    background-color: #050505;
    border-radius: 10px;
    padding: 15px;
    font-size: 20px;
    cursor: pointer;
  }

  option {
    background-color: #090909;
    border-radius: 10px !important;
  }

  .custom-select::before,
  .custom-select::after {
    --size: 0.3rem;
    content: "";
    position: absolute;
    right: 1rem;
    pointer-events: none;
  }

  .custom-select::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-bottom: var(--size) solid rgb(255, 255, 255);
    top: 40%;
  }

  .custom-select::after {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid rgb(255, 255, 255);
    top: 55%;
  } */

  .gray {
    color: rgb(201, 200, 200);
  }
</style>
