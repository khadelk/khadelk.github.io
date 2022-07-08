<script>
	import ProjectCard from '$lib/Components/Projects/ProjectCard.svelte';
	const projects = [
		{
			name:"The Bechdel Test", 
			description:"A web app made using Sveltekit that displays whether or not films pass the Bechdel Test. This was done as a personal project to learn more about Sveltekit and data visualization.",
			link: "https://bechdeltest.netlify.app",
			github_link: "https://github.com/khadelk/bechdel-test",
			icons:['logos:svelte-icon'],
			image: "https://i.picsum.photos/id/324/200/200.jpg?hmac=qhw4ORwk8T1r-Rxd2QREZORSVvc6l_R1S6F3Pl9mR_c"
		},
		{
			name:"Patient-Centered Dental Home Project",
			description:"A web app made using Sveltekit and Python displaying the patient-centered dental home model of care. This is used by dental researchers at the Public Policy Center.",
			link:"https://ppc.uiowa.edu/pcdh/indicators/clearinghouse/",
			github_link : null,
			icons:['logos:svelte-icon', 'logos:python'],
			image: "https://i.picsum.photos/id/184/200/200.jpg?hmac=MflhZikSXVt3rvwnx8_nAvoHdLOwJFA0B2_Mk8vQvms"
		}
	]

</script>

<div >
	<h1 class="py-4">My Projects</h1>
	{#each projects as project}
		<ProjectCard {project}/>
	{/each}
</div>