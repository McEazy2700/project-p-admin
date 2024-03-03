import type { DefaultVariants } from './defaults';

interface IconAlertAction {
	variant: 'icon';
	icon: string;
}

interface TextAlertAction {
	variant: 'text';
	title: string;
}

interface TextIconAlertAction {
	variant: 'both';
	title: string;
	icon: string;
}
export type AlertAction = (IconAlertAction | TextAlertAction | TextIconAlertAction) & {
	class?: string;
	description?: string;
	action: () => void;
};

export interface AlertClasses {
	message?: string;
	action?: string;
	alert?: string;
}

export type AlertProps = {
	id: number;
	variant: DefaultVariants;
	class?: AlertClasses;
	title?: string;
	duration?: number;
	message?: string;
	actions?: AlertAction[];
};
