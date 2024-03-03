<script lang="ts">
	import { goto } from '$app/navigation';
	import { defaultClasses } from '$lib/components/atoms/alerts/defaults';
	import alertQueue from '$lib/components/atoms/alerts/store';
	import type {
		EmailPasswordRegisterMutation,
		EmailPasswordRegisterMutationVariables
	} from '$lib/graphql/generated';
	import { EMAIL_PASSWORD_REGISTER } from '$lib/graphql/mutations/auth';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { getContextClient, mutationStore, type OperationResultStore } from '@urql/svelte';

	let password1Vissble = false;
	let password2Vissble = false;
	let email = '';
	let password1 = '';
	let password2 = '';

	let result:
		| OperationResultStore<EmailPasswordRegisterMutation, EmailPasswordRegisterMutationVariables>
		| undefined;
	const client = getContextClient();

	const signUp = () => {
		result = mutationStore<EmailPasswordRegisterMutation, EmailPasswordRegisterMutationVariables>({
			client,
			query: EMAIL_PASSWORD_REGISTER,
			variables: {
				input: {
					email,
					password1,
					password2
				}
			}
		});
	};

	$: {
		if ($result?.error?.message !== undefined) {
			alertQueue.append({
				title: 'Error',
				message: $result.error.message,
				variant: defaultClasses.error.filled
			});
		}
	}

	$: {
		if ($result?.data?.emailPasswordRegister) {
			alertQueue.append({
				title: 'Success',
				message: 'Sign Up successfull. Please login',
				variant: defaultClasses.success.filled
			});
			goto('/login', { replaceState: true });
		}
	}
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<div class="flex flex-col items-center">
	<form on:submit|preventDefault={signUp} class="flex flex-col items-center w-full">
		<div class="flex flex-col items-center w-full max-w-2xl gap-10">
			<div class="w-full flex flex-col items-center max-w-xl">
				<h1 class="h1 w-fit">Welcome</h1>
				<p class="max-w-lg text-center opacity-80">
					Let's get your online store setup and take your buisiness to new heights
				</p>
			</div>
			<div class="flex flex-col gap-2 w-full">
				<input bind:value={email} type="email" class="input p-3" placeholder="Email" />

				<div class="mt-3 input-group input-group-divider grid-cols-[1fr_auto]">
					<input
						on:change={(e) => (password1 = e.currentTarget.value)}
						class="p-3"
						placeholder="Password"
						type={password1Vissble ? 'text' : 'password'}
					/>
					<button type="button" on:click={() => (password1Vissble = !password1Vissble)}>
						<iconify-icon icon={password1Vissble ? 'mdi:eye-off' : 'mdi:eye'} />
					</button>
				</div>
				<div class="input-group input-group-divider grid-cols-[1fr_auto]">
					<input
						on:change={(e) => (password2 = e.currentTarget.value)}
						class="p-3"
						placeholder="Confirm password"
						type={password2Vissble ? 'text' : 'password'}
					/>
					<button type="button" on:click={() => (password2Vissble = !password2Vissble)}>
						<iconify-icon icon={password2Vissble ? 'mdi:eye-off' : 'mdi:eye'} />
					</button>
				</div>
				<div class="self-end">
					Already have an account? <a class="anchor no-underline" href="/login">Sign in</a>
				</div>
			</div>
		</div>
		<button
			disabled={$result?.fetching}
			class="btn btn-lg w-full max-w-2xl mt-8 variant-filled"
			type="submit"
		>
			{#if $result?.fetching}
				<ProgressRadial width="w-7" />
			{:else}
				Sign up
			{/if}
		</button>
	</form>
	<div class="flex items-center w-full gap-2 max-w-2xl mt-8">
		<div class="bg-black/10 w-full h-0.5" />
		<p class="whitespace-nowrap">or continue with</p>
		<div class="bg-black/10 w-full h-0.5" />
	</div>
	<div class="flex items-center gap-8 mt-5">
		<button class="btn-icon btn-icon-lg variant-filled" title="Sign in with Google" type="button">
			<iconify-icon icon="ri:google-fill" class="text-2xl" />
		</button>
		<button class="btn-icon btn-icon-lg variant-filled" title="Sign in with Meta" type="button">
			<iconify-icon icon="ph:meta-logo-bold" class="text-2xl" />
		</button>
		<button class="btn-icon btn-icon-lg variant-filled" title="Sign in with Apple" type="button">
			<iconify-icon icon="mdi:apple" class="text-2xl" />
		</button>
	</div>
</div>
