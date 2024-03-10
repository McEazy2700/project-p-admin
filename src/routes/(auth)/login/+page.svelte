<script lang="ts">
	import { goto } from '$app/navigation';
	import { defaultClasses } from '$lib/components/atoms/alerts/defaults';
	import alertQueue from '$lib/components/atoms/alerts/store';
	import type {
		EmailPasswordLoginMutation,
		EmailPasswordLoginMutationVariables
	} from '$lib/graphql/generated';
	import { EMAIN_PASSWORD_LOGIN } from '$lib/graphql/mutations/auth';
	import { clearAuthTokens, setAuthTokens } from '$lib/utils/auth';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { getContextClient, mutationStore, type OperationResultStore } from '@urql/svelte';

	let passwordVissble = false;
	let email = '';
	let password = '';

	const client = getContextClient();
	let result: OperationResultStore<EmailPasswordLoginMutation, EmailPasswordLoginMutationVariables>;

	const handleLogin = () => {
		clearAuthTokens();
		result = mutationStore<EmailPasswordLoginMutation, EmailPasswordLoginMutationVariables>({
			client,
			query: EMAIN_PASSWORD_LOGIN,
			variables: {
				email,
				password
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
		if ($result?.data?.emailPasswordLogin) {
			setAuthTokens({
				token: $result.data.emailPasswordLogin.token,
				refreshToken: $result.data.emailPasswordLogin.refreshToken
			});
			alertQueue.append({
				title: 'Success',
				message: `Welcome Back`,
				variant: defaultClasses.secondary.filled
			});
			goto('/', { replaceState: true });
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex flex-col items-center">
	<form on:submit|preventDefault={handleLogin} class="flex flex-col items-center w-full">
		<div class="flex flex-col items-center w-full max-w-2xl gap-10">
			<div class="w-full flex flex-col items-center max-w-xl">
				<h1 class="h1 w-fit">Welcome back!</h1>
				<p class="max-w-lg text-center opacity-80">
					Let's get back to setting up your online store and taking your buisiness to new heights
				</p>
			</div>
			<div class="flex flex-col gap-4 w-full">
				<input bind:value={email} type="email" class="input p-3" placeholder="Email" />

				<div class="input-group input-group-divider grid-cols-[1fr_auto]">
					<input
						on:change={(e) => (password = e.currentTarget.value)}
						class="p-3"
						placeholder="Password"
						type={passwordVissble ? 'text' : 'password'}
					/>
					<button type="button" on:click={() => (passwordVissble = !passwordVissble)}>
						<iconify-icon icon={passwordVissble ? 'mdi:eye-off' : 'mdi:eye'} />
					</button>
				</div>
				<div class="flex justify-between flex-wrap flex-col sm:flex-row">
					<div class="">
						Do not have an account? <a class="anchor no-underline" href="/sign-up">Sign up</a>
					</div>
					<a class="anchor no-underline" href="/forgot-password">Forgot Password?</a>
				</div>
			</div>
		</div>
		<button class="btn btn-lg w-full max-w-2xl mt-8 variant-filled" type="submit">
			{#if $result?.fetching}
				<ProgressRadial width="w-7" />
			{:else}
				Login
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
