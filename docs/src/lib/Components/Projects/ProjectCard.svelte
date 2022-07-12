<script>
	import Icon from '@iconify/svelte';

	export let project;
</script>

<div class="mb-4 bg-white border border-transparent rounded-md drop-shadow-xl md:grid md:grid-cols-3 items-center md:max-h-96 md:max-w-7xl">
	<div class="col-span-1 rounded-md">
		<!-- Image goes here -->
		<img class="rounded-t-md w-full max-h-96 md:rounded-l-md md:rounded-none" src="{project.image}" alt="Image of {project.name} project">
	</div>
	<div class="col-span-2 p-2 md:px-8">
		<div class="flex items-center">
			<h2 class="text-2xl text-denim-blue pr-2">{project.name}</h2>
			<a target="_blank" class="pr-2" href="{project.link}">
				<Icon class="text-denim-blue transition hover:text-cinnamon-satin" icon="iconoir:link" width="24" height="24" />
			</a>
			{#if project.github_link}
			<a target="_blank" href="{project.github_link}">
				<!-- Github Icon goes here -->
				<Icon class="text-denim-blue transition hover:text-cinnamon-satin" icon="iconoir:github" width="24" height="24" />
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