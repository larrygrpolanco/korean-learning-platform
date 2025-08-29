<script>
	/**
	 * Reusable card component for content containers
	 * @type {'default' | 'elevated' | 'outlined'} variant - Card style variant
	 * @type {'small' | 'medium' | 'large'} padding - Card padding size
	 * @type {boolean} clickable - Whether card has hover effects for interaction
	 */
	let {
		variant = 'default',
		padding = 'medium',
		clickable = false,
		onclick,
		children,
		...restProps
	} = $props();

	// Base classes for all cards
	const baseClasses = 'rounded-lg transition-all duration-150';
	
	// Padding variants
	const paddingClasses = {
		small: 'p-3',
		medium: 'p-4',
		large: 'p-6'
	};
	
	// Style variants
	const variantClasses = {
		default: 'bg-white border border-gray-200',
		elevated: 'bg-white shadow-md hover:shadow-lg',
		outlined: 'bg-transparent border-2 border-gray-300'
	};
	
	// Clickable styles
	const clickableClasses = clickable 
		? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' 
		: '';
	
	// Combine all classes using Svelte 5 $derived
	const cardClasses = $derived([
		baseClasses,
		paddingClasses[padding],
		variantClasses[variant],
		clickableClasses
	].join(' '));
</script>

{#if clickable}
	<button
		class={cardClasses}
		{onclick}
		{...restProps}
	>
		{@render children?.()}
	</button>
{:else}
	<div
		class={cardClasses}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}
