<script>
	import Icon from "@iconify/svelte";
	import { slide } from 'svelte/transition'
	let showNav = false

	const navigation = [
		{name: 'Home', link: '/'},
		{name:'Projects', link: '#projects'},
		{name: 'About', link: '#about'},
		{name: 'Contact', link: '#contact'}
	]

	const handleClick = (e) => {
		showNav = !showNav
	}
</script>

<nav class="hidden sm:block fixed w-full z-40 bg-milk p-4 md:pl-0">
	{#each navigation as nav}
	<ul class="inline-block font-serif text-denim-blue text-xl transition hover:text-cinnamon-satin">
		<li class="mr-2 pr-2">
			<a href="{nav.link}">{nav.name}</a>
		</li>
	</ul>
	{/each}
</nav>

<nav class="px-10 py-2 fixed w-full z-50 bg-milk sm:hidden">
	<div class="cursor-pointer" on:click={handleClick}>
		<Icon class="text-denim-blue" width="32" height="32" icon="ci:hamburger" />
	</div>

	{#if showNav}
	<div transition:slide class="h-full bg-milk w-1/2">
		{#each navigation as nav}
		<ul class="font-serif text-denim-blue text-lg transition hover:text-cinnamon-satin">
			<li class="mr-2 pr-2">
				<a href="{nav.link}">{nav.name}</a>
			</li>
		</ul>
		{/each}
	</div>
{/if}

</nav>