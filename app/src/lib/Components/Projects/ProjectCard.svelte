<script>
	import Icon from '@iconify/svelte';

	export let project;
	// {
	// 		name:"The Bechdel Test", 
	// 		description:"A web app made using Sveltekit that displays whether or not films pass the Bechdel Test. This was done as a personal project to learn more about Sveltekit and data visualization.",
	// 		link: "https://bechdeltest.netlify.app",
	// 		github_link: "https://github.com/khadelk/bechdel-test",
	// 		tech:['sveltekit']
	// 	},
	$: console.log(project)
</script>

<div class="mb-4 bg-white border border-transparent rounded-md drop-shadow-xl md:grid md:grid-cols-3 items-center md:max-h-96 md:max-w-7xl">
	<div class="col-span-1 rounded-md">
		<!-- Image goes here -->
		<img class="rounded-t-md w-full max-h-96 md:rounded-l-md md:rounded-none" src="{project.image}" alt="Image of {project.name} project">
	</div>
	<div class="col-span-2 p-2 md:px-8">
		<div class="flex items-center">
			<h2 class="text-2xl text-denim-blue pr-4"><a class="" href="{project.link}">{project.name} </a></h2>
			{#if project.github_link}
			<a target="_blank" href="{project.github_link}">
				<!-- Github Icon goes here -->
					<Icon color="#2743B5" icon="iconoir:github" width="24" height="24" />
			</a>
			{/if}
		</div>
		<p class="py-4">{project.description}</p>
		<div class="flex">
			{#each project.icons as icon}
				<div class="pb-2 pr-4">
					<Icon width="24" height="24" icon="{icon}" />
				</div>
			{/each}
		</div>

	</div>
</div>