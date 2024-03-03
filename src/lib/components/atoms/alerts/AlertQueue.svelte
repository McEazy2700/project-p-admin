<script lang="ts">
	import { slide } from 'svelte/transition';
	import Alert from './Alert.svelte';
	import alertQueue from './store';

	$: {
		console.log($alertQueue);
	}
</script>

{#if $alertQueue.length > 0}
	<ul
		transition:slide|local={{ duration: 200 }}
		class="flex flex-col gap-2 fixed top-2 right-2 z-[10000]"
	>
		{#each $alertQueue as alert}
			<Alert
				id={alert.id}
				class={alert.class}
				title={alert.title}
				actions={alert.actions}
				duration={alert.duration}
				message={alert.message}
				variant={alert.variant}
			/>
		{/each}
	</ul>
{/if}
