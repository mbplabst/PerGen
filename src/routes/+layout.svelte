<script lang="ts">
  import "../theme.postcss";
  import "../global.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
</script>

<body>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</body>
