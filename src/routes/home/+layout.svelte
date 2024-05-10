<script>
  import { goto } from "$app/navigation";

  function linkCreateNew() {
    goto("/new");
  }
</script>

<head>
  <title>PerGen | Home</title>
</head>

<div>
  <h1 id="header">Dein individueller Persöhnlichkeiten Generator</h1>
  <div class="center">
    <p class="subtitle">
      Du gibst dich im Internet häufig als jemand anderes aus? Dann ist dieses
      Tool genau das richtige für dich! Denn nur hier bekommst du die
      Möglichkeit, durch zufällig ausgewählte Eigenschaften und Situationen
      deinem neuen Ich einen ganz neuen Flair zu verleihen!
    </p>
    <button
      type="button"
      class="btn btn-xl variant-ghost-tertiary"
      on:click={linkCreateNew}
    >
      Jetzt ausprobieren
      <i class="fa-solid fa-arrow-up-right-from-square icon"></i>
    </button>
  </div>
  <slot></slot>
</div>

<style>
  #header {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .subtitle {
    font-size: 15px;
    font-weight: 200;
    line-height: 20px;
    margin-bottom: 50px;
  }

  .icon {
    margin-left: 10px;
  }

  button {
    border-radius: 15px;
  }
</style>
