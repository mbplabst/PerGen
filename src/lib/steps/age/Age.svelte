<script>
  import { RangeSlider } from "@skeletonlabs/skeleton";
  import { lockedState, globalAge } from "../../store/variables.js";

  let value = $globalAge;

  function setAge() {
    $globalAge = value;
    $lockedState = false;
  }

  function getRandomAge() {
    $globalAge = Math.floor(Math.random() * 120) + 1;
    value = $globalAge;
    $lockedState = false;
  }

  function resetAge() {
    $globalAge = value = 1;
    $lockedState = true;
  }
</script>

<div class="selected">
  <RangeSlider
    name="range-slider"
    bind:value
    max={120}
    step={1}
    on:change={setAge}
  >
    <div class="flex justify-between items-center">
      <p>Ausgewählt: {value} Jahre</p>
    </div>
  </RangeSlider>
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
