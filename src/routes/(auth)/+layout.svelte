<main class="flex flex-col lg:flex-row items-center min-h-screen p-10 relative">
	<div
		class="lg:flex-1 w-full backdrop-blur-lg py-10 lg:py-0 md:p-4 rounded-xl self-baseline lg:self-center z-10 mt-auto lg:mt-0"
	>
		<slot />
	</div>
	<div
		class="flex-1 w-full bg-surface-100 dark:bg-surface-800 absolute lg:relative py-8 rounded-3xl flex items-center justify-center"
	>
		<img src="/graphics/ecommerce.svg" alt="Online store" />
	</div>
</main>
