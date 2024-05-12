<script lang="ts">
  import { LightSwitch, SlideToggle } from "@skeletonlabs/skeleton";
</script>

<head>
  <title>PerGen | Settings</title>
</head>

<div>
  Darkmode
  <LightSwitch />
</div>

<br />
<hr />
<br />

<div>
  <p>Language</p>
  <div class="btn-group-vertical variant-filled">
    <button class="btn">Kartoffel</button>
    <button class="btn">Twin Towers</button>
    <button class="btn">Bobr Kurva</button>
  </div>
</div>
<br />
<hr />
<br />

<div>
  <p>Enable NSFW</p>
  <SlideToggle name="slide" active="bg-primary-500" />
</div>

<slot><!-- optional fallback --></slot>