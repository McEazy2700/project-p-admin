import { gql } from '@urql/svelte';

export const STORES = gql`
	query Stores($opts: PaginatedStoreFilter = {}) {
		stores(opts: $opts) {
			dateAdded
			description
			id
			name
			creator {
				dateAdded
				email
				id
			}
		}
	}
`;
