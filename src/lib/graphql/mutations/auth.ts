import { gql } from '@urql/svelte';

export const EMAIL_PASSWORD_REGISTER = gql`
	mutation EmailPasswordRegister($input: EmailPasswordRegisterInput!) {
		emailPasswordRegister(input: $input) {
			email
		}
	}
`;

export const EMAIN_PASSWORD_LOGIN = gql`
	mutation EmailPasswordLogin($email: String!, $password: String!) {
		emailPasswordLogin(email: $email, password: $password) {
			token
			refreshToken
			user {
				email
			}
		}
	}
`;
