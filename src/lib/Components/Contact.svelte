<script>
	let formSubmitted = false;
	let errorTrue = false;
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target)
		const entries = Object.fromEntries(formData)
		try {
			const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(entries),
        headers: { 'Content-Type': 'application/json' }
      });
			const json = await res.json()
			if (json.success) {
				formSubmitted = true;
			} else {
				errorTrue = true;
			}
		} catch (e) {
			console.log('error', e)
			errorTrue = true;
		}
	}

</script>

<div on:submit={handleSubmit} id="contact" class="flex justify-center sm:justify-start items-center px-4 md:p-0 h-screen">
	<div>
	<h1>Want to know more?</h1>
	<h2 class="pt-2 font-sans text-xl text-mdgray">Let's get in touch!</h2>
	<!-- 4d22095a-5582-442a-9c91-7e019e6b3837 -->
	<!-- Make sure you don't change the form action-->
	{#if !formSubmitted}
	<form class="text-center m-auto" action="https://api.staticforms.xyz/submit" method="post">
		<!-- Replace with accesKey sent to your email -->
		<input type="hidden" name="accessKey" value="4d22095a-5582-442a-9c91-7e019e6b3837"> <!-- Required -->
		<div class="grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-6">
			<div class="pt-4 sm:col-span-3">
				<div class="mt-1">
					<input type="text" name="name" id="name" autocomplete="given-name" class="p-2 shadow-sm block w-full sm:font-lg border-2 border-denim-blue rounded-md placeholder:text-mdgray" placeholder="Name">
				</div>
			</div>
		
			<div class="sm:col-span-4">
				<!-- <label for="emailAddress" class="block font-lg font-sans text-gray-700"> Email address </label> -->
				<div class="mt-1">
					<input id="email" name="email" type="email" autocomplete="email" class="p-2 shadow-sm block w-full sm:font-lg border-2 border-denim-blue rounded-md rounded placeholder:text-mdgray" placeholder="Email">
				</div>
			</div>

			<div class="sm:col-span-3">
				<div class="mt-1">
					<input type="text" name="subject" id="subject" autocomplete="subject" class="p-2 shadow-sm block w-full sm:font-lg border-2 border-denim-blue rounded-md placeholder:text-mdgray" placeholder="Subject">
				</div>
			</div>
		
			<div class="sm:col-span-6">
				<!-- <label for="message" class="block font-lg font-sans text-gray-700"> Your message: </label> -->
				<div class="mt-1">
					<textarea id="message" name="message" rows="6" class="shadow-sm p-2 block w-full md:w-3/4 sm:font-lg border-2 border-denim-blue rounded-md placeholder:text-mdgray" placeholder="Tell me a funny joke, your favorite movie, or something on your mind!"></textarea>
				</div>
				<p class="mt-2 font-lg text-gray-500"></p>
			</div>
		<input class="inline-flex items-center justify-center px-8 py-1 border-2 border-denim-blue text-lg font-serif font-medium rounded-full shadow-sm text-denim-blue bg-transparent hover:bg-cinnamon-satin hover:text-milk transition-colors cursor-pointer" type="submit" value="Submit" />
	</form>
	{:else}
	{#if errorTrue} 
		<h3 class="text-lg font-serif text-denim-blue">There seems to be a problem.</h3>
		<p>Oh no! There seems to be a problem with this form. In the meantime, email me at <a class="text-denim-blue transition hover:text-cinnamon-satin" href="mailto:sarahkelkeurti@gmail.com">sarahkelkeurti@gmail.com</a> and I'll get back to you</p>
	{:else}
		<div class="py-8">
			<h3 class="text-lg font-serif text-denim-blue">Thanks for your message!</h3>
			<p>I'll get back to you shortly.</p>
		</div>
	{/if}
	
{/if}
</div>
</div>
