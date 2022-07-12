<script>
	import Icon from '@iconify/svelte';
	
	import Nav from '$lib/Components/Nav.svelte';
	import Projects from '$lib/Components/Projects/Projects.svelte';
	import About from '$lib/Components/About.svelte';
	import MySkills from '$lib/Components/MySkills.svelte';
</script>

<main class="bg-milk">
<div class="grid grid-cols-12">
	<div class="col-start-3 col-end-11">
		<div class="grid grid-cols-3 justify-center items-center pt-36">
			<div class="col-start-1 col-end-3">
			<h1>Hi, I'm Sarah</h1>
			<p class="py-4">
				Hi there. I’m Sarah. I’m an app developer at the University of Iowa Public Policy Center. I love coding, design, and building things with empathetic teams. 
			</p>
			<div class="flex">
				<button type="button" class="inline-flex items-center px-8 py-1 mr-4 border-2 border-denim-blue text-sm font-serif font-medium rounded-full shadow-sm text-denim-blue bg-transparent hover:bg-denim-blue hover:text-milk transition-colors">
					<a target="_blank" href="/resume">Resume</a>
				</button>
				<!-- Github Icon -->
				<a class="mr-2 pr-2" target="_blank" href="https://github.com/khadelk">
					<Icon color="#2743B5" icon="iconoir:github" width="32" height="32" />
				</a>
				<!-- Linkedin Icon -->
				<a class="mr-2 pr-2" target="_blank" href="https://www.linkedin.com/in/sarah-elkeurti/">
					<Icon color="#2743B5" icon="iconoir:linkedin" width="32" height="32"/>
				</a>
				<!-- Twitter Icon -->
				<a target="_blank" href="https://twitter.com/SElkeurti">
					<Icon color="#2743B5" icon="iconoir:twitter" width="32" height="32"/>
				</a>
			</div>

		</div>
		<div class="justify-self-center col-start-3">
			<img class="clip-headshot" width="200" height="200" src="images/headshot.png" alt="Sarah headshot">
		</div>
	</div>

	<Projects />
	<About />
	<MySkills />
</div>
</div>
</main>