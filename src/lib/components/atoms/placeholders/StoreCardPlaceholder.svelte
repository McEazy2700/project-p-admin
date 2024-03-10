<div class="animate-pulse w-full p-4 rounded-[30px]">
	<div class="flex justify-center items-center">
		<div class="w-[30%] flex items-center justify-center">
			<div class="placeholder-circle w-28" />
		</div>
		<div class="w-[70%]">
			<div class="placeholder h-10 w-full" />
			<div class="flex w-full flex-col gap-2 mt-4">
				{#each [1, 2, 3] as num}
					<div data-num={num} class="flex w-full gap-3">
						<div class="placeholder flex-1" />
						<div class="placeholder flex-1" />
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div>
		<div class="flex flex-col w-full gap-2 mt-4">
			{#each [1, 2, 3] as num}
				<div class="placeholder" data-num={num} />
			{/each}
		</div>
	</div>
</div>
