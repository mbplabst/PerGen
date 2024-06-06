<script lang="ts">
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
            <i class="fa-solid fa-user-plus"></i>
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
          <a href="/settings" on:click={closeNav}>
            <i class="fa-solid fa-gear icon"></i>
            <span class="flex-auto">Settings</span>
          </a>
        </li>
      </ul>
    </nav>
    <hr class="!border-t-2" />
  </div>
  <div class="footer">
    Build Version 1.5.5<br />
    Updated Jun 6, 2024<br />
    Powered by <a href="https://lachsfich.de" id="lachsfich">lachsfich.de</a>
    <br />
    <br />
    Contributors:
    <br /> <span id="contributors">@fruchtea</span>,
    <span id="contributors">@im_gone_</span>
  </div>
</div>

<style>
  .sidenav {
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    z-index: 1;
    background-color: rgb(13, 13, 13);
    overflow-x: hidden;
    transition: 0.35s;
    box-shadow: 6px 0px 8px 0 rgba(0, 0, 0, 0.4);
  }

  .top-container {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: rgb(5, 5, 5);
  }

  .footer {
    text-align: center;
    font-weight: 200;
    font-size: 12px;
    padding: 15px;
    line-height: 13px;
  }

  #title {
    font-weight: 800;
    font-size: 22px;
    margin-left: 35px;
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
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 8px;
    margin-bottom: 8px;
    border-color: rgb(51, 51, 51) !important;
  }

  #lachsfich {
    color: rgb(196, 70, 70);
  }

  #contributors {
    color: cadetblue;
  }
</style>
