<script lang="ts">
  import { Stepper, Step } from "@skeletonlabs/skeleton";
</script>

<head>
  <title>PerGen | New Profile</title>
</head>

<h2 class="center">Erstelle hier ein neues Profil</h2>

<div class="card p-4 container">
  <Stepper
    badge="variant-filled-surface"
    buttonNext="variant-ghost-primary"
    buttonNextLabel="Weiter"
    buttonBack="variant-soft-tertiary"
    buttonBackLabel="Zurück"
    buttonComplete="variant-filled-primary"
    buttonCompleteLabel="Abschließen"
  >
    <Step>
      <svelte:fragment slot="header">un</svelte:fragment>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, delectus nobis
      officia qui quam sunt accusamus perspiciatis ipsa.
    </Step>
    <Step>
      <svelte:fragment slot="header">deux</svelte:fragment>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, delectus nobis
      officia qui quam sunt accusamus perspiciatis ipsa.
    </Step>
    <Step>
      <svelte:fragment slot="header">trois</svelte:fragment>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, delectus nobis
      officia qui quam sunt accusamus perspiciatis ipsa.
    </Step>
    <Step>
      <svelte:fragment slot="header">quatre</svelte:fragment>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, delectus nobis
      officia qui quam sunt accusamus perspiciatis ipsa.
    </Step>
  </Stepper>
</div>

<slot />

<style>
  .card {
    color: aliceblue;
    box-shadow: rgb(0, 0, 0) 0px 5px 5px 0px !important;
  }

  .container {
    margin-top: 25px;
  }
</style>
