<script>
	import Icon from '@iconify/svelte';
	const languages = ["logos:javascript","logos:typescript-icon","logos:python","logos:php","logos:css-3","logos:mysql","logos:postgresql"]
	const frameworks = ["logos:svelte-icon","logos:react","logos:drupal-icon"]
	const tools = ["logos:git","logos:aws","logos:docker-icon","logos:figma","logos:visual-studio-code","bxl:adobe"]
</script>

<div class="py-4">
	<h2 class="font-serif text-2xl text-denim-blue">Skills:</h2>

	<div class="flex flex-wrap items-center py-2">
		<h3 class="text-xl text-mdgray pr-2">Languages:</h3>
			{#each languages as language}
			<div class="pb-2 pr-4">
				<Icon icon="{language}" width="32" height="32"/>
			</div>
			{/each}
	</div>

	<div class="flex flex-wrap items-center py-2">
		<h3 class="text-xl text-mdgray pr-2">Frameworks:</h3>
			{#each frameworks as framework}
			<div class="pb-2 pr-4">
				<Icon icon="{framework}" width="32" height="32"/>
			</div>
			{/each}
	</div>

	<div class="flex flex-wrap items-center py-2">
		<h3 class="text-xl text-mdgray pr-2">Tools:</h3>
			{#each tools as tool}
			<div class="pb-2 pr-4">
				<Icon icon="{tool}" width="32" height="32"/>
			</div>
			{/each}
	</div>

</div>

