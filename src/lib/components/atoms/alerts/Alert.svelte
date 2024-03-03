<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { AlertAction, AlertClasses } from './types';
	import { onMount } from 'svelte';
	import alertQueue from './store';
	import { slide } from 'svelte/transition';

	let klass: AlertClasses | undefined = undefined;
	export let variant: string = '';
	export let id: number;
	export let duration: number = 5000;
	export { klass as class };
	export let title: string | undefined = undefined;
	export let message: string | undefined = undefined;
	export let actions: AlertAction[] = [];

	onMount(() => {
		const timeOutId = setTimeout(() => alertQueue.remove(id), duration);
		return () => clearTimeout(timeOutId);
	});

	const closeAction = actions[0];
</script>

<aside
	class={twMerge(`alert relative text-sm ${variant}`, klass?.alert)}
	transition:slide|local={{ duration: 200 }}
>
	{#if title || message}
		<div class={twMerge('alert-message', klass?.message)}>
			{#if title}
				<h3 class="h3">{title}</h3>
			{/if}
			{#if message}
				<p>{message}</p>
			{/if}
		</div>
	{/if}
	{#if actions.length > 0}
		<div class={twMerge('alert-actions', klass?.action)}>
			{#each actions.slice(1) as action}
				<button
					on:click={action.action}
					title={action.description}
					class={twMerge('btn variant-filled p-1', action.class)}
				>
					{#if action.variant === 'text'}
						{action.title}
					{:else if action.variant === 'icon'}
						<iconify-icon icon={action.icon} />
					{:else}
						<span>{action.title}</span>
						<iconify-icon icon={action.icon} />
					{/if}
				</button>
			{/each}
		</div>
	{/if}
	<button
		on:click={closeAction.action}
		title={closeAction.description}
		class={twMerge('absolute top-2 right-2 btn variant-filled p-1', closeAction.class)}
	>
		{#if closeAction.variant === 'text'}
			{closeAction.title}
		{:else if closeAction.variant === 'icon'}
			<iconify-icon icon={closeAction.icon} />
		{:else}
			<span>{closeAction.title}</span>
			<iconify-icon icon={closeAction.icon} />
		{/if}
	</button>
</aside>
