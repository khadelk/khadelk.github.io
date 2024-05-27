<script>
	import { slide } from 'svelte/transition';
	import ProjectCard from '$lib/Components/Projects/ProjectCard.svelte';
	const projects = [
		{
			name:"Run A Better Set Animation", 
			description:"Component that animates on scroll using CSS & Javascript.",
			link: "https://www.runabetterset.com/",
			// github_link: "https://github.com/khadelk/bechdel-test",
			icons:['logos:javascript', 'logos:css-3'],
			image: "/images/rabs-screen-recording.gif"
		},
		{
			name:"The Bechdel Test", 
			description:"A web app made with SvelteKit that displays whether or not films pass the Bechdel Test. This was done as a personal project to learn more about SvelteKit and data visualization.",
			link: "https://bechdeltest.netlify.app",
			github_link: "https://github.com/khadelk/bechdel-test",
			icons:['logos:svelte-icon'],
			image: "/images/bechdel-test.png"
		},
		{
			name:"Patient-Centered Dental Home Project",
			description:"A web app made with Sveltekit and Python displaying the patient-centered dental home model of care. This is used by dental researchers at the Public Policy Center.",
			link:"https://ppc.uiowa.edu/pcdh/indicators/clearinghouse/",
			github_link : null,
			icons:['logos:svelte-icon', 'logos:python'],
			image: "/images/ppc-clearinghouse.png"
		}
	]

</script>

<div id="projects" class="flex items-center px-4 md:p-0">
	<div class="mt-16">
		<h1 class="py-4">My Projects</h1>
		{#each projects as project}
			<ProjectCard {project}/>
		{/each}
	</div>
</div>