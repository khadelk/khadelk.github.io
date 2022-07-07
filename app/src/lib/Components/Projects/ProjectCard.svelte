<script>
	export let project;
	// {
	// 		name:"The Bechdel Test", 
	// 		description:"A web app made using Sveltekit that displays whether or not films pass the Bechdel Test. This was done as a personal project to learn more about Sveltekit and data visualization.",
	// 		link: "https://bechdeltest.netlify.app",
	// 		github_link: "https://github.com/khadelk/bechdel-test",
	// 		tech:['sveltekit']
	// 	},
</script>

<div>
	<div>
		<!-- Image goes here -->
		<img src="{project.image}" alt="Image of {project.name} project">
	</div>
	<div>
		<h2><a href="{project.link}">{project.name}</a></h2>
		<p>{project.description}</p>
		{#if project.github}
		<a href="{project.github}">
			<!-- Github Icon goes here -->
		</a>
		{/if}
	</div>
</div>