import type { IconNav } from './types';

export const sideBarNavigations: IconNav[] = [
	{
		icon: 'ic:round-space-dashboard',
		href: '/',
		title: 'Dashboard'
	},
	{
		icon: 'ic:round-store',
		href: '/stores',
		title: 'Stores'
	},
	{
		icon: 'material-symbols-light:package-2',
		href: '/products',
		title: 'Products'
	},
	{
		icon: 'material-symbols-light:format-list-bulleted',
		href: '/categories',
		title: 'Categories'
	},
	{
		icon: 'material-symbols:garden-cart-rounded',
		href: '/orders',
		title: 'Orders'
	},
	{
		icon: 'flowbite:users-group-solid',
		href: '/customers',
		title: 'Customers'
	},
	{
		icon: 'ic:round-mark-unread-chat-alt',
		href: '/notifications',
		title: 'Notifications'
	},
	{
		icon: 'material-symbols:settings',
		href: '/settings',
		title: 'Settings'
	}
];
