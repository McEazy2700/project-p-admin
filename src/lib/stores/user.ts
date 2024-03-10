import type { UserType } from '$lib/graphql/generated';
import { writable } from 'svelte/store';

const user = writable<UserType | undefined>();
export const triedReLogin = writable(false);

export default user;
