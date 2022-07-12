<script>
	import Icon from '@iconify/svelte';
	
	import Nav from '$lib/Components/Nav.svelte'
	import Projects from '$lib/Components/Projects/Projects.svelte';
	import About from '$lib/Components/About.svelte';
	import Contact from '$lib/Components/Contact.svelte';
</script>

<main class="bg-milk">
<div class="md:grid md:grid-cols-12">
	<div class="md:col-start-3 md:col-end-11">
		<Nav />
		<div class="flex items-center justify-center h-screen">
		<div class="p-4 my-auto max-w-screen md:p-0 md:flex flex-row-reverse justify-center items-center">
			<div class="justify-self-center col-start-3">
				<img class="clip-headshot m-auto" width="300" height="300" src="images/headshot.png" alt="Sarah headshot">
			</div>
		<!-- <div class="grid grid-cols-3 justify-center items-center h-screen"> -->
			<div class="px-8 md:px-0 col-start-1 col-end-3">
			<h1 class="text-center md:text-left">Hi, I'm Sarah</h1>
			<p class="py-4 text-xl">
				Hi there. I’m Sarah. I’m an app developer at the University of Iowa Public Policy Center. I love coding, design, and building things with empathetic teams. 
			</p>
			<div class="flex justify-center md:justify-start">
				<button type="button" class="inline-flex items-center px-8 py-1 mr-4 border-2 border-denim-blue text-md font-serif font-medium rounded-full shadow-sm text-denim-blue bg-transparent hover:bg-cinnamon-satin hover:text-milk transition-colors">
					<a target="_blank" href="https://drive.google.com/file/d/1km6JnodIK42EvXAakS2K-zOOLfQfvOlX/view?usp=sharing">Resume</a>
				</button>
				<!-- Github Icon -->
				<a class="mr-2 pr-2" target="_blank" href="https://github.com/khadelk">
					<Icon class="text-denim-blue transition hover:text-cinnamon-satin" icon="iconoir:github" width="32" height="32" />
				</a>
				<!-- Linkedin Icon -->
				<a class="mr-2 pr-2" target="_blank" href="https://www.linkedin.com/in/sarah-elkeurti/">
					<Icon class="text-denim-blue transition hover:text-cinnamon-satin" icon="iconoir:linkedin" width="32" height="32"/>
					<!-- text-denim-blue rounded-md transition hover:text-milk hover:bg-denim-blue -->
				</a>
				<!-- Twitter Icon -->
				<a target="_blank" href="https://twitter.com/SElkeurti">
					<Icon class="text-denim-blue transition hover:text-cinnamon-satin" icon="iconoir:twitter" width="32" height="32"/>
				</a>
			</div>
		</div>
	</div>
	</div>
	<Projects />
	<About />
	<Contact />
</div>
</div>
</main>