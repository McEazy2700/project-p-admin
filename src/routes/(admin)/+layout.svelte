<script>
	import Navigation from '$lib/components/molecules/navigation/Navigation.svelte';
	import UserProvider from '$lib/components/providers/UserProvider.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<UserProvider>
	<AppShell>
		<svelte:fragment slot="sidebarLeft">
			<Navigation />
		</svelte:fragment>
		<div class="h-screen overflow-y-auto px-4">
			<slot />
		</div>
	</AppShell>
</UserProvider>
