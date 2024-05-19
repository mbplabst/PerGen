<script>
  import ProfileStepper from "$lib/stepper.svelte";
</script>

<head>
  <title>PerGen | New Profile</title>
</head>

<h2 class="center">Erstelle hier ein neues Profil</h2>
<ProfileStepper />
<slot />

<style>
  h2 {
    margin: 25px;
  }
</style>
