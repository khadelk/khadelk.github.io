<script>
	import Nav from '$lib/Components/Nav.svelte';
	import Projects from '$lib/Components/Projects/Projects.svelte';
	import About from '$lib/Components/About.svelte';
	import MySkills from '$lib/Components/MySkills.svelte';
</script>

<main class="bg-milk">
<div class="grid grid-cols-12 ">
	<div class="col-start-3 col-end-10">
	<div>
		<h1>Hi, I'm Sarah</h1>
		<p>
			Hi there. I’m Sarah. I’m an app developer at the University of Iowa Public Policy Center. I love coding, design, and building things with empathetic teams. 
		</p>
		<div>
			<a href="/resume">Resume</a>
			<!-- Github Icon -->
			<!-- Linkedin Icon -->
			<!-- Twitter Icon -->
		</div>
	</div>
	<Projects />
	<About />
	<MySkills />
</div>
</div>
</main>