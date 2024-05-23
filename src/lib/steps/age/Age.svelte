<script>
  import { RangeSlider } from "@skeletonlabs/skeleton";
  import { lockedState, globalAge } from "../../store/variables.js";
  import "./style.css";

  let value = $globalAge;

  function setAge() {
    $globalAge = value;
  }

  function getRandomAge() {}

  function resetAge() {}
</script>

<div class="selected">
  <RangeSlider name="range-slider" bind:value max={10} step={1} ticked>
    <div class="flex justify-between items-center">
      <p>Ausgewählt: {value} Jahre</p>
    </div>
  </RangeSlider>
  {$globalAge}
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
