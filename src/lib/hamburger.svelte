<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton";

  function openNav() {
    let sidenav = document.getElementById("mySidenav");
    if (sidenav == null) {
      return;
    }
    sidenav.style.width = "250px";
  }

  function closeNav() {
    let sidenav = document.getElementById("mySidenav");
    if (sidenav == null) {
      return;
    }
    sidenav.style.width = "0";
  }
</script>

<button type="button" class="btn p-0 ml-2" on:click={openNav}>
  <i class="fa-solid fa-bars fa-xl"></i>
</button>

<div id="mySidenav" class="sidenav">
  <div class="top-container">
    <p id="title">Navigation</p>
    <button on:click={closeNav}>
      <i class="fa-solid fa-square-xmark fa-lg"></i>
    </button>
  </div>

  <!-- <hr class="!border-t-2" /> -->

  <nav class="list-nav links-container">
    <ul>
      <li>
        <a href="/home" on:click={closeNav}>
          <i class="fa-solid fa-house icon"></i>
          <span class="flex-auto">Home</span>
        </a>
      </li>
      <li>
        <a href="/new" on:click={closeNav}>
          <i class="fa-solid fa-user-plus icon"></i>
          <span class="flex-auto correction">New Profile</span>
        </a>
      </li>
      <li>
        <a href="/saved" on:click={closeNav}>
          <i class="fa-solid fa-folder-open icon"></i>
          <span class="flex-auto">Saved Profiles</span>
        </a>
      </li>
    </ul>
  </nav>
  <hr class="!border-t-2" />
  <nav class="list-nav links-container">
    <ul>
      <li>
        <a href="/home" on:click={closeNav}>
          <i class="fa-solid fa-gear icon"></i>
          <span class="flex-auto">Settings</span>
        </a>
      </li>
    </ul>
  </nav>
</div>

<style>
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #0a0a0a;
    overflow-x: hidden;
    transition: 0.5s;
  }

  .top-container {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    background-color: rgb(7, 7, 7);
  }

  #title {
    font-weight: 400;
    font-size: 20px;
  }

  ul {
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .correction {
    margin-left: 13px !important;
  }

  hr {
    border-radius: 10px;
    margin: 15px;
    border-color: rgb(51, 51, 51) !important;
  }
</style>
