<script>
  import "../app.css";
	import Nav from '$lib/Components/Nav.svelte'

</script>
<svelte:head>
  <title>Sarah Elkeurti</title>
</svelte:head>

<main class="bg-milk">
	<Nav />
  <div class="relative top-[60px]">
    <slot />
  </div>
</main>

