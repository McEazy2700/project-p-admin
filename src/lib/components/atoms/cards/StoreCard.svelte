<script lang="ts">
	import type { StoreType } from '$lib/graphql/generated';
	import { formatDatetime } from '$lib/utils/datetime';

	export let store: StoreType;
</script>

<a href={`/stores/${store.id}`} class="hover:shadow-xl transition-all p-4 rounded-2xl border">
	<div class="flex items-center justify-evenly">
		<div class="flex-[0.3] px-4 border-r flex items-center justify-center">
			<img
				loading="lazy"
				class="object-cover rounded-full"
				src={`https://dummyimage.com/150x150/04338c/fff&text=${store.name}`}
				alt={store.name}
			/>
		</div>
		<div class="flex-1 px-4">
			<h3 class="h3 pb-2">{store.name}</h3>
			<div class="border-t pt-2">
				<div class="justify-between flex mb-1 items-baseline gap-2">
					<span class="font-medium">Products</span>
					<div class="border-b border-dashed flex-1 border-surface-500 border-spacing-10"></div>
					<span>0</span>
				</div>
				<div class="justify-between flex mb-1 items-baseline gap-2">
					<span class="font-medium">Sales</span>
					<div class="border-b border-dashed flex-1 border-surface-500 border-spacing-10"></div>
					<span>0</span>
				</div>
				<div class="justify-between flex mb-1 items-baseline gap-2">
					<span class="font-medium">Deliveries</span>
					<div class="border-b border-dashed flex-1 border-surface-500 border-spacing-10"></div>
					<span>0</span>
				</div>
			</div>
		</div>
	</div>
	{#if store.description}
		<div>
			<p>{store.description}</p>
		</div>
	{/if}
	<div class="flex items-end gap-2 pr-4 justify-end text-sm w-full mt-4">
		<span class="font-medium">Created:</span>
		<time datetime={store.dateAdded}>{formatDatetime(store.dateAdded)}</time>
	</div>
</a>
