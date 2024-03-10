<script lang="ts">
	import { goto } from '$app/navigation';
	import type { MeQuery } from '$lib/graphql/generated';
	import { ME } from '$lib/graphql/queries/user';
	import user, { triedReLogin } from '$lib/stores/user';
	import { clearAuthTokens, getAuthTokens } from '$lib/utils/auth';
	import { getContextClient, queryStore } from '@urql/svelte';
	import { onMount } from 'svelte';
	import alertQueue from '../atoms/alerts/store';
	import { defaultClasses } from '../atoms/alerts/defaults';

	const me = queryStore<MeQuery>({ client: getContextClient(), query: ME, pause: true });
	$: {
		if ($me.data?.me) {
			user.set($me.data.me);
		} else if ($me.error?.graphQLErrors) {
			alertQueue.append({ message: $me.error.message, variant: defaultClasses.error.filled });
			if ($me.error.message === '[Network] Bad Request' && !$triedReLogin) {
				clearAuthTokens();
				triedReLogin.set(true);
				goto('/login', { replaceState: true });
			}
		}
	}

	onMount(() => {
		me.resume();
		const authTokens = getAuthTokens();
		if (authTokens === undefined) {
			goto('/login', { replaceState: true });
		}
	});
</script>

<slot />
