<script lang="ts">
  import { Drawer } from "@skeletonlabs/skeleton";
  import { goto } from "$app/navigation";

  function openDrawer() {
    console.log("open drawer");
  }

  function linkHome() {
    goto("/home");
  }

  function linkCreateNew() {
    goto("/new");
  }

  function linkSaved() {
    goto("/saved");
  }
</script>

<Drawer>this is content</Drawer>

<button type="button" class="btn p-0" on:click={openDrawer}>
  <i class="fa-solid fa-bars fa-2xl"></i>
</button>
