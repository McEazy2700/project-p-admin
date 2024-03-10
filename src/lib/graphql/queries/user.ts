import { gql } from '@urql/svelte';

export const ME = gql`
	query Me {
		me {
			dateAdded
			email
			id
		}
	}
`;
