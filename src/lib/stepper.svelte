<script lang="js">
  import { Stepper, Step } from "@skeletonlabs/skeleton";

  import { genderList } from "./data/genders.js";
  import { agesList } from "./data/ages";
  import { preNameList } from "./data/prenames.js";
  import { surNameList } from "./data/surnames.js";
  import { hobbyList } from "./data/hobbys.js";
  import { characteristicList } from "./data/characteristics.js";
  import { extrasList } from "./data/extras.js";

  const nameNotAvailable = "-/-";

  let lockedState = true;
  let visible = false;

  let gender = nameNotAvailable;
  let preName = nameNotAvailable;
  let surName = nameNotAvailable;
  let age = nameNotAvailable;
  let hobbys = nameNotAvailable;
  let characteristics = nameNotAvailable;
  let extras = nameNotAvailable;

  function onCompleteHandler() {
    alert("finished");
    visible = true;
  }

  // ------- GENDER ------- //

  function getRandomGender() {
    const randomIndex = Math.floor(Math.random() * genderList.length);
    gender = genderList[randomIndex];
  }

  function resetGender() {
    gender = nameNotAvailable;
    lock();
  }

  function confirmGender() {
    if (gender == nameNotAvailable) {
      return;
    }
    unlock();
  }

  // ------- NAME ------- //

  function getRandomName() {
    const randomIndex = Math.floor(Math.random() * preNameList.length);
    const randomIndex2 = Math.floor(Math.random() * surNameList.length);
    preName = preNameList[randomIndex];
    surName = surNameList[randomIndex2];
  }

  function resetName() {
    preName = nameNotAvailable;
    surName = nameNotAvailable;
    lock();
  }

  function confirmName() {
    if (preName == nameNotAvailable && surName == nameNotAvailable) {
      return;
    }
    unlock();
  }

  // ------- AGE ------- //

  function getRandomAge() {
    // age = Math.floor(Math.random() * 99).toString();
    const randomIndex = Math.floor(Math.random() * agesList.length);
    age = agesList[randomIndex];
  }

  function resetAge() {
    age = nameNotAvailable;
  }

  function confirmAge() {
    if (age == nameNotAvailable) {
      return;
    }
    unlock();
  }

  // ------- HOBBYS ------- //

  function getRandomHobby() {
    const randomIndex = Math.floor(Math.random() * hobbyList.length);
    hobbys = hobbyList[randomIndex];
  }

  function resetHobbys() {
    hobbys = nameNotAvailable;
  }

  function confirmHobbys() {
    if (hobbys == nameNotAvailable) {
      return;
    }
    unlock();
  }

  // ------- CHARACTERISTICS ------- //

  function getRandomCharacteristics() {
    const randomIndex = Math.floor(Math.random() * characteristicList.length);
    characteristics = characteristicList[randomIndex];
  }

  function resetCharacteristics() {
    characteristics = nameNotAvailable;
  }

  function confirmCharacteristics() {
    if (characteristics == nameNotAvailable) {
      return;
    }
    unlock();
  }

  // ------- EXTRAS ------- //

  function getRandomExtras() {
    const randomIndex = Math.floor(Math.random() * extrasList.length);
    extras = extrasList[randomIndex];
  }

  function resetExtras() {
    extras = nameNotAvailable;
  }

  function confirmExtras() {
    if (extras == nameNotAvailable) {
      return;
    }
    unlock();
  }

  // ------- STATE CONTROL ------- //

  function unlock() {
    lockedState = false;
  }

  function lock() {
    lockedState = true;
  }
</script>

<div class="card p-4">
  <Stepper
    badge="variant-filled-secondary"
    buttonNext="variant-ghost-primary"
    buttonNextLabel="Weiter"
    buttonBack="variant-ghost-tertiary"
    buttonBackLabel="Zurück"
    buttonComplete="variant-filled-primary"
    buttonCompleteLabel="Abschließen"
    on:next={lock}
    on:complete={onCompleteHandler}
  >
    <!-- // ------- GENDER ------- // -->
    <!-- // ------- GENDER ------- // -->
    <!-- // ------- GENDER ------- // -->

    <Step locked={lockedState}>
      <svelte:fragment slot="header">Geschlecht</svelte:fragment>
      <div class="selected">
        <p>{gender}</p>
      </div>
      <div class="button-group">
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={getRandomGender}
        >
          <i class="fa-solid fa-random mr-2 random"></i>
          Random
        </button>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={resetGender}
        >
          <i class="fa-solid fa-trash-can mr-2 reset"></i>
          Reset
        </button>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={confirmGender}
        >
          <i class="fa-solid fa-check mr-2 confirm"></i>
          Confirm
        </button>
      </div>
      <hr class="!border-t-2" />
    </Step>

    <!-- // ------- NAME ------- // -->
    <!-- // ------- NAME ------- // -->
    <!-- // ------- NAME ------- // -->

    <Step locked={lockedState}>
      <svelte:fragment slot="header">Name</svelte:fragment>
      <div class="selected">
        <p>{preName} {surName}</p>
      </div>
      <div class="button-group">
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={getRandomName}
        >
          <i class="fa-solid fa-shuffle mr-2 random"></i>
          Random
        </button>
        <button class="btn btn-sm variant-ghost-secondary" on:click={resetName}>
          <i class="fa-solid fa-trash-can mr-2 reset"></i>
          Reset
        </button>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={confirmName}
        >
          <i class="fa-solid fa-check mr-2 confirm"></i>
          Confirm
        </button>
      </div>
      <hr class="!border-t-2" />
    </Step>

    <!-- // ------- AGE ------- // -->
    <!-- // ------- AGE ------- // -->
    <!-- // ------- AGE ------- // -->

    <Step locked={lockedState}>
      <svelte:fragment slot="header">Alter</svelte:fragment>
      <div class="selected">
        <p>{age}</p>
      </div>
      <div class="button-group">
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={getRandomAge}
        >
          <i class="fa-solid fa-shuffle mr-2 random"></i>
          Random
        </button>
        <button class="btn btn-sm variant-ghost-secondary" on:click={resetAge}>
          <i class="fa-solid fa-trash-can mr-2 reset"></i>
          Reset
        </button>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={confirmAge}
        >
          <i class="fa-solid fa-check mr-2 confirm"></i>
          Confirm
        </button>
      </div>
      <hr class="!border-t-2" />
    </Step>

    <!-- // ------- HOBBYS ------- // -->
    <!-- // ------- HOBBYS ------- // -->
    <!-- // ------- HOBBYS ------- // -->

    <Step locked={lockedState}>
      <svelte:fragment slot="header">Hobbys</svelte:fragment>
      <div class="selected">
        <p>{hobbys}</p>
      </div>
      <div class="button-group">
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={getRandomHobby}
        >
          <i class="fa-solid fa-shuffle mr-2 random"></i>
          Random
        </button>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={resetHobbys}
        >
          <i class="fa-solid fa-trash-can mr-2 reset"></i>
          Reset
        </button>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={confirmHobbys}
        >
          <i class="fa-solid fa-check mr-2 confirm"></i>
          Confirm
        </button>
      </div>
      <hr class="!border-t-2" />
    </Step>

    <!-- // ------- CHARACTERISTICS ------- // -->
    <!-- // ------- CHARACTERISTICS ------- // -->
    <!-- // ------- CHARACTERISTICS ------- // -->

    <Step locked={lockedState}>
      <svelte:fragment slot="header">Eigenschaften</svelte:fragment>
      <div class="selected">
        <p>{characteristics}</p>
      </div>
      <div class="button-group">
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={getRandomCharacteristics}
        >
          <i class="fa-solid fa-shuffle mr-2 random"></i>
          Random
        </button>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={resetCharacteristics}
        >
          <i class="fa-solid fa-trash-can mr-2 reset"></i>
          Reset
        </button>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={confirmCharacteristics}
        >
          <i class="fa-solid fa-check mr-2 confirm"></i>
          Confirm
        </button>
      </div>
      <hr class="!border-t-2" />
    </Step>

    <!-- // ------- EXTRAS ------- // -->
    <!-- // ------- EXTRAS ------- // -->
    <!-- // ------- EXTRAS ------- // -->

    <Step locked={lockedState}>
      <svelte:fragment slot="header">Sonstiges</svelte:fragment>
      <div class="selected">
        <p>{extras}</p>
      </div>
      <div class="button-group">
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={getRandomExtras}
        >
          <i class="fa-solid fa-shuffle mr-2 random"></i>
          Random
        </button>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={resetExtras}
        >
          <i class="fa-solid fa-trash-can mr-2 reset"></i>
          Reset
        </button>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={confirmExtras}
        >
          <i class="fa-solid fa-check mr-2 confirm"></i>
          Confirm
        </button>
      </div>
      <hr class="!border-t-2" />
    </Step>
  </Stepper>
</div>

<style>
  hr {
    border-radius: 20px;
    margin-top: 25px !important;
    margin-bottom: 25px !important;
    border-color: rgb(19, 19, 19) !important;
  }

  .card {
    box-shadow: rgb(0, 0, 0) 0px 5px 5px 0px !important;
  }

  .selected {
    display: flex;
    justify-content: space-between;
    align-self: center;
    background-color: rgb(5, 5, 5);
    border-radius: 10px;
    padding: 15px;
    font-size: 20px;
  }

  .random {
    color: goldenrod;
  }

  .reset {
    color: brown;
  }

  .confirm {
    color: green;
  }
</style>
