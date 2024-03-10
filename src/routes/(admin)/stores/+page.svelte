<script lang="ts">
	import StoreCard from '$lib/components/atoms/cards/StoreCard.svelte';
	import StoreCardPlaceholder from '$lib/components/atoms/placeholders/StoreCardPlaceholder.svelte';
	import type { StoresQuery, StoresQueryVariables } from '$lib/graphql/generated';
	import { STORES } from '$lib/graphql/queries/stores';
	import user from '$lib/stores/user';
	import { getContextClient, queryStore } from '@urql/svelte';

	const stores = queryStore<StoresQuery, StoresQueryVariables>({
		client: getContextClient(),
		query: STORES,
		variables: {
			opts: {
				filter: { creatorId: $user?.id }
			}
		}
	});
</script>

<ul class="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
	{#if $stores.fetching}
		<!-- eslint-disable no-unused-vars -->
		{#each Array.from({ length: 6 }).fill(0) as _, index (index)}
			<StoreCardPlaceholder />
		{/each}
	{/if}
	{#if $stores.data?.stores}
		{#each $stores.data.stores as store}
			<StoreCard {store} />
		{/each}
	{/if}
</ul>
