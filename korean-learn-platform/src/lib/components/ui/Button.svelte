<script>
	/**
	 * Reusable button component with mobile-first design
	 * @type {'primary' | 'secondary' | 'outline'} variant - Button style variant
	 * @type {'small' | 'medium' | 'large'} size - Button size
	 * @type {boolean} disabled - Whether button is disabled
	 * @type {boolean} fullWidth - Whether button takes full width
	 */
	let {
		variant = 'primary',
		size = 'medium',
		disabled = false,
		fullWidth = false,
		onclick,
		children,
		...restProps
	} = $props();

	// Base classes for all buttons
	const baseClasses = 'font-medium rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95';
	
	// Size variants with mobile-first touch targets
	const sizeClasses = {
		small: 'px-3 py-2 text-sm min-h-[40px]',
		medium: 'px-4 py-3 text-base min-h-[44px]',
		large: 'px-6 py-4 text-lg min-h-[48px]'
	};
	
	// Style variants
	const variantClasses = {
		primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300',
		secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 disabled:bg-gray-300',
		outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 disabled:border-blue-300 disabled:text-blue-300'
	};
	
	// Combine all classes using Svelte 5 $derived
	const buttonClasses = $derived([
		baseClasses,
		sizeClasses[size],
		variantClasses[variant],
		fullWidth ? 'w-full' : '',
		disabled ? 'cursor-not-allowed' : 'cursor-pointer'
	].join(' '));
</script>

<button
	class={buttonClasses}
	{disabled}
	{onclick}
	{...restProps}
>
	{@render children?.()}
</button>
