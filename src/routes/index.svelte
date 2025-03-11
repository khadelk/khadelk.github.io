<script>
	import Icon from '@iconify/svelte';
	
	import Projects from '$lib/Components/Projects/Projects.svelte';
	import About from '$lib/Components/About.svelte';
</script>

<div class="md:grid md:grid-cols-12">
	<div class="md:col-start-3 md:col-end-11">
		<div class="flex items-center justify-between h-screen w-full">
		<div class="p-4 my-auto w-full max-w-screen md:p-0 md:flex flex-row-reverse justify-between items-center gap-x-2">
			<div class="justify-self-center col-start-3 mb-4 md:mb-0">
				<img class="clip-headshot m-auto" width="300" height="300" src="images/headshot.png" alt="Sarah headshot">
			</div>
			<div class="px-8 md:px-0 col-start-1 col-end-3">
			<h1 class="text-center md:text-left">Hi, I'm Sarah</h1>
			<p class="py-4 text-xl">
				Hi there. I’m Sarah. I’m a developer at <a class="underline text-denim-blue hover:text-gray-500" target="_blank" href="https://www.thisismess.com/">Mess</a>, a dev & design agency in Chicago, IL. <br>
			</p>
			<p class="pb-8 text-xl">
				I love coding, design, and building things with empathetic teams. 
			</p>
			<div class="flex justify-center gap-2 md:justify-start">
				<button type="button" class="inline-flex items-center px-8 py-1 mr-4 border-2 border-denim-blue text-md font-serif font-medium rounded-full shadow-sm text-denim-blue bg-transparent hover:bg-cinnamon-satin hover:text-milk transition-colors">
					<a target="_blank" href="https://drive.google.com/file/d/1ji_qR6ZZjZFDT5BVtAFNniVH8-lr588S/view?usp=sharing">Resume</a>
				</button>
				<!-- Github Icon -->
				<a class="mr-2 pr-2" target="_blank" href="https://github.com/khadelk">
					<Icon class="text-denim-blue transition hover:text-cinnamon-satin" icon="iconoir:github" width="42" height="42" />
				</a>
				<!-- Linkedin Icon -->
				<a class="mr-2 pr-2" target="_blank" href="https://www.linkedin.com/in/sarah-elkeurti/">
					<Icon class="text-denim-blue transition hover:text-cinnamon-satin" icon="iconoir:linkedin" width="42" height="42"/>
				</a>
				<!-- Twitter Icon -->
				<a target="_blank" href="https://twitter.com/SElkeurti">
					<Icon class="text-denim-blue transition hover:text-cinnamon-satin" icon="iconoir:twitter" width="42" height="42"/>
				</a>
			</div>
		</div>
	</div>
	</div>
	<Projects />
	<About />
</div>
</div>