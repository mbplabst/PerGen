<script lang="ts">
  import { LightSwitch } from "@skeletonlabs/skeleton";

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

  <div class="main-container">
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
          <a href="/" on:click={closeNav}>
            <i class="fa-solid fa-gear icon"></i>
            <span class="flex-auto">Settings</span>
          </a>
        </li>
      </ul>
    </nav>
    <hr class="!border-t-2" />

    <div class="center"><LightSwitch /> Vorsicht!</div>
  </div>
  <div class="footer">Build Version 1.5.2<br />Updated May 12, 2024</div>
</div>

<style>
  .sidenav {
    display: flex;
    flex-direction: column;
    background-attachment: fixed;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    z-index: 1;
    background-color: #0a0a0a;
    overflow-x: hidden;
    transition: 0.35s;
  }

  .top-container {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    background-color: rgb(7, 7, 7);
  }

  .main-container {
    flex: 1;
  }

  .footer {
    text-align: center;
    font-weight: 200;
    font-size: 12px;
    padding: 15px;
    background-color: rgb(7, 7, 7);
    line-height: 13px;
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
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-color: rgb(51, 51, 51) !important;
  }
</style>
