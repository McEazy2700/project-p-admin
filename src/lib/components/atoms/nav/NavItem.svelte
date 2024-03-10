<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	export let href: string;

	$: isActive = href === '/' ? $page.url.pathname === '/' : $page.url.pathname.startsWith(href);
</script>

<div class="flex w-full flex-col pl-8 items-end transition-all">
	<div class="bg-surface-50 w-full">
		<div data-active={isActive} class="bg-tertiary-700 h-2 data-[active=true]:rounded-br-3xl" />
	</div>
	<a
		data-active={isActive}
		class="data-[active=true]:bg-surface-50 data-[active=true]:dark:text-white data-[active=true]:text-black w-full rounded-l-3xl p-2 pr-20 px-4 flex items-center gap-3"
		{href}
	>
		<slot />
	</a>
	<div transition:fade class="bg-surface-50 w-full">
		<div data-active={isActive} class="bg-tertiary-700 h-2 data-[active=true]:rounded-tr-3xl" />
	</div>
</div>
