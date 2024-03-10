<script>
	import NavItem from '$lib/components/atoms/nav/NavItem.svelte';
	import { sideBarNavigations } from '$lib/constants/navigation';
</script>

<nav
	class="bg-tertiary-700 text-on-tertiary-token py-8 min-h-[98vh] rounded-2xl flex flex-col items-center gap-10 m-2"
>
	<div>
		<h1 class="h1">Shop</h1>
	</div>
	<ul class="overflow-auto">
		{#each sideBarNavigations as nav}
			<NavItem href={nav.href}>
				<iconify-icon class="text-2xl" icon={nav.icon} />
				<span title={nav.title}>{nav.title}</span>
			</NavItem>
		{/each}
	</ul>
</nav>
