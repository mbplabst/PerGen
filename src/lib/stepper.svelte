<script lang="js">
  import { Stepper, Step } from "@skeletonlabs/skeleton";

  import SelectGender from "./steps/gender/Gender.svelte";
  import SelectAge from "./steps/age/Age.svelte";
  import SelectHobbys from "./steps/hobbys/Hobbys.svelte";
  import { lockedState, globalGender, globalAge } from "./store/variables.js";

  import { preNameList } from "./data/prenames.js";
  import { surNameList } from "./data/surnames.js";
  import { hobbyList } from "./data/hobbys.js";
  import { characteristicList } from "./data/characteristics.js";

  const nameNotAvailable = "-/-";

  let preName = nameNotAvailable;
  let surName = nameNotAvailable;
  let hobbys = nameNotAvailable;
  let characteristics = nameNotAvailable;

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

  // ------- HOBBYS ------- //

  // function getRandomHobby() {
  //   const randomIndex = Math.floor(Math.random() * hobbyList.length);
  //   hobbys = hobbyList[randomIndex];
  // }

  // function resetHobbys() {
  //   hobbys = nameNotAvailable;
  //   lock();
  // }

  // function confirmHobbys() {
  //   if (hobbys == nameNotAvailable) {
  //     return;
  //   }
  //   unlock();
  // }

  // ------- CHARACTERISTICS ------- //

  function getRandomCharacteristics() {
    const randomIndex = Math.floor(Math.random() * characteristicList.length);
    characteristics = characteristicList[randomIndex];
  }

  function resetCharacteristics() {
    characteristics = nameNotAvailable;
    lock();
  }

  function confirmCharacteristics() {
    if (characteristics == nameNotAvailable) {
      return;
    }
    unlock();
  }

  // ------- STATE CONTROL ------- //

  function unlock() {
    $lockedState = false;
  }

  function lock() {
    $lockedState = true;
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
  >
    <!-- // ------- GENDER ------- // -->

    <Step locked={$lockedState}>
      <svelte:fragment slot="header">Geschlecht</svelte:fragment>
      <SelectGender />
      <hr class="!border-t-2" />
    </Step>

    <!-- // ------- NAME ------- // -->
    <!-- // ------- NAME ------- // -->
    <!-- // ------- NAME ------- // -->

    <Step locked={$lockedState}>
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
    </Step> -->

    <!-- // ------- AGE ------- // -->
    <!-- // ------- AGE ------- // -->
    <!-- // ------- AGE ------- // -->

    <Step locked={$lockedState}>
      <svelte:fragment slot="header">Alter</svelte:fragment>
      <SelectAge />
      <hr class="!border-t-2" />
    </Step>

    <!-- // ------- HOBBYS ------- // -->
    <!-- // ------- HOBBYS ------- // -->
    <!-- // ------- HOBBYS ------- // -->

    <Step locked={$lockedState}>
      <svelte:fragment slot="header">Hobbys</svelte:fragment>
      <SelectHobbys />
      <!-- <div class="selected">
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
      </div> -->
      <hr class="!border-t-2" />
    </Step>

    <!-- // ------- CHARACTERISTICS ------- // -->
    <!-- // ------- CHARACTERISTICS ------- // -->
    <!-- // ------- CHARACTERISTICS ------- // -->

    <Step locked={$lockedState}>
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

    <Step locked={$lockedState}>
      <svelte:fragment slot="header">Zusammenfassung</svelte:fragment>

      <center>
        <h2>Diese Person hast du neu erschaffen:</h2>

        <br />
        Name: {preName}
        {surName}
        <br />
        Geschlecht : {$globalGender}
        <br />
        Alter: {$globalAge} Jahre
        <br />
        Hobbys: {hobbys}
        <br />
        Eigenschaften: {characteristics}

        <div>
          <button class="btn variant-ghost-success mt-5 mr-3">Speichern</button>
          <button class="btn variant-ghost-primary mt-5 ml-3">Löschen</button>
        </div>
      </center>

      <hr class="!border-t-2" />
    </Step>
  </Stepper>
</div>

<center class="mt-10">
  Lockstate: {$lockedState}, {$globalGender}, {$globalAge}
</center>

<style>
  hr {
    border-radius: 20px;
    margin-top: 24px !important;
    margin-bottom: 24px !important;
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
</style>
