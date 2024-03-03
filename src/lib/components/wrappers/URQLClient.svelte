<script lang="ts">
	import { Client, cacheExchange, fetchExchange, setContextClient } from '@urql/svelte';
	import { PUBLIC_GRAPHQL_API_URL } from '$env/static/public';
	import { getAuthTokens } from '$lib/utils/auth';

	const client = new Client({
		url: PUBLIC_GRAPHQL_API_URL,
		exchanges: [cacheExchange, fetchExchange],
		fetchOptions: () => {
			const authTokens = getAuthTokens();
			return {
				headers: { authorization: authTokens !== undefined ? `JWT ${authTokens.token}` : '' }
			};
		}
	});

	setContextClient(client);
</script>

<slot />
