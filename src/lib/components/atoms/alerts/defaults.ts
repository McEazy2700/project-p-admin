export const defaultClasses = {
	error: {
		filled: 'variant-filled-error',
		ghost: 'variant-ghost-error',
		soft: 'variant-soft-error',
		ringed: 'variant-ringed-error'
	},
	secondary: {
		filled: 'variant-filled-secondary',
		ghost: 'variant-ghost-secondary',
		soft: 'variant-soft-secondary',
		ringed: 'variant-ringed-secondary'
	},
	success: {
		filled: 'variant-filled-success',
		ghost: 'variant-ghost-success',
		soft: 'variant-soft-success',
		ringed: 'variant-ringed-success'
	},
	gradient: {
		primarySecondary: 'bg-gradient-to-br variant-gradient-primary-secondary',
		secondaryTertiary: 'bg-gradient-to-br variant-gradient-secondary-tertiary',
		tertiaryPrimary: 'bg-gradient-to-br variant-gradient-tertiary-primary',
		secondaryPrimary: 'bg-gradient-to-br variant-gradient-secondary-primary',
		tertiarySecondary: 'bg-gradient-to-br variant-gradient-tertiary-secondary',
		primaryTertiary: 'bg-gradient-to-br variant-gradient-primary-tertiary',
		successWarning: 'bg-gradient-to-br variant-gradient-success-warning',
		warningError: 'bg-gradient-to-br variant-gradient-warning-error',
		errorSuccess: 'bg-gradient-to-br variant-gradient-error-success',
		warningSuccess: 'bg-gradient-to-br variant-gradient-warning-success',
		errorWarning: 'bg-gradient-to-br variant-gradient-error-warning',
		successError: 'bg-gradient-to-br variant-gradient-success-error'
	}
};
type StringValueOf<T> = T[keyof T];
type NestedStringValueOf<T> = {
	[K in keyof T]: T[K] extends object ? StringValueOf<T[K]> : T[K];
}[keyof T];

export type DefaultVariants = NestedStringValueOf<typeof defaultClasses>;
export type DefaultAlert = typeof defaultClasses;
