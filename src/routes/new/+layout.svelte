<script lang="js">
  import { Stepper, Step } from "@skeletonlabs/skeleton";

  const genderList = ["Männlich", "Weiblich", "Divers"];

  let lockedState = true;

  let gender = " -/-";
  let name = " -/-";
  let age = " -/-";
  let hobbys = " -/-";
  let characteristics = "-/-";
  let addition = " -/-";

  // ------- GENDER ------- //

  function setMale() {
    gender = genderList[0];
    unlock();
  }

  function setFemale() {
    gender = genderList[1];
    unlock();
  }

  function setDivers() {
    gender = genderList[2];
    unlock();
  }

  function getRandomGender() {
    const randomIndex = Math.floor(Math.random() * genderList.length);
    gender = genderList[randomIndex];
    unlock();
  }

  //

  function unlock() {
    lockedState = false;
  }

  function lock() {
    lockedState = true;
  }
</script>

<head>
  <title>PerGen | New Profile</title>
</head>

<h2 class="center">Erstelle hier ein neues Profil</h2>

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
    on:back{lock}
  >
    <Step locked={lockedState}>
      <svelte:fragment slot="header">Geschlecht</svelte:fragment>
      <div class="logo-cloud grid-cols-3 gap-0.5">
        <button class="logo-item btn variant-filled-surface" on:click={setMale}>
          <i class="fa-solid fa-mars icon-correction"></i>Mann
        </button>
        <button
          class="logo-item btn variant-filled-surface"
          on:click={setFemale}
        >
          <i class="fa-solid fa-venus icon-correction"></i>Frau
        </button>
        <button
          class="logo-item btn variant-filled-surface"
          on:click={setDivers}
        >
          <i class="fa-solid fa-mars-and-venus icon-correction"></i>Divers
        </button>
      </div>
      <div class="sub-content">
        <p class="choice">
          Auswahl: {gender}
        </p>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={getRandomGender}
        >
          <i class="fa-solid fa-shuffle icon-correction"></i>Zufällige Auswahl
        </button>
      </div>
      <hr class="!border-t-2" />
    </Step>
    <!--  -->
    <!--  -->
    <!--  -->
    <Step locked={lockedState}>
      <svelte:fragment slot="header">Name</svelte:fragment>
      <button class="btn variant-ghost-warning" on:click={unlock}>
        präventiv weiter
      </button>
      <hr />
    </Step>
    <!--  -->
    <!--  -->
    <!--  -->
    <Step locked={lockedState}>
      <svelte:fragment slot="header">Alter</svelte:fragment>
      <button class="btn variant-ghost-warning" on:click={unlock}>
        präventiv weiter
      </button>
      <hr />
    </Step>
    <!--  -->
    <!--  -->
    <!--  -->
    <Step locked={lockedState}>
      <svelte:fragment slot="header">Hobbys</svelte:fragment>
      <button class="btn variant-ghost-warning" on:click={unlock}>
        präventiv weiter
      </button>
      <hr />
    </Step>
    <!--  -->
    <!--  -->
    <!--  -->
    <Step locked={lockedState}>
      <svelte:fragment slot="header">Eigenschaften</svelte:fragment>
      <button class="btn variant-ghost-warning" on:click={unlock}>
        präventiv weiter
      </button>
      <hr />
    </Step>
    <!--  -->
    <!--  -->
    <!--  -->
    <Step locked={lockedState}>
      <svelte:fragment slot="header">Sonstiges</svelte:fragment>
      <button class="btn variant-ghost-warning" on:click={unlock}>
        präventiv weiter
      </button>
      <hr />
    </Step>
  </Stepper>
</div>

<center class="m-8">
  <p>Gender: {gender}</p>
  <p>Name: {name}</p>
  <p>Age: {age}</p>
  <p>Hobbys: {hobbys}</p>
  <p>Characteristics: {characteristics}</p>
  <p>Additionally: {addition}</p>
</center>
<slot />

<style>
  h2 {
    margin: 25px;
  }

  hr {
    border-radius: 20px;
    margin-top: 25px !important;
    margin-bottom: 25px !important;
    border-color: rgb(19, 19, 19) !important;
  }

  .card {
    box-shadow: rgb(0, 0, 0) 0px 5px 5px 0px !important;
  }

  .logo-item {
    border-radius: 10px;
    margin-left: 1px;
    margin-right: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }

  .icon-correction {
    margin-right: 10px;
  }

  .sub-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }

  .choice {
    font-size: 14px;
    color: rgb(158, 158, 158);
  }
</style>
