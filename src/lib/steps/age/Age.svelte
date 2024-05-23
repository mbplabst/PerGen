<script>
  import { lockedState, globalAge } from "../../store/variables.js";
  import { agesList } from "../../data/ages.js";
  import { onMount } from "svelte";
  import "./style.css";

  function getRandomAge() {
    const randomIndex = Math.floor(Math.random() * agesList.length);
    $globalAge = agesList[randomIndex];
  }

  //   function setAge(int) {
  //     if (int > 2) {
  //       return;
  //     }
  //     $npmglobalAge = genderList[int];
  //     toggleVisibility();
  //   }

  function resetAge() {
    $globalAge = "Nicht ausgewählt";
    $lockedState = true;
  }

  function confirmAge() {
    if ($globalAge === "Nicht ausgewählt") {
      return;
    }
    $lockedState = false;
  }
</script>

<div class="selected">
  <p>{$globalAge}</p>
</div>

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
