<script>
	/**
	 * Progress indicator component for lesson advancement
	 * @type {number} value - Current progress value (0-100)
	 * @type {number} max - Maximum progress value (default 100)
	 * @type {'default' | 'success' | 'warning'} variant - Progress bar color
	 * @type {'small' | 'medium' | 'large'} size - Progress bar height
	 * @type {boolean} showLabel - Whether to show percentage label
	 */
	let {
		value = 0,
		max = 100,
		variant = 'default',
		size = 'medium',
		showLabel = true,
		...restProps
	} = $props();

	// Calculate percentage
	const percentage = $derived(Math.min(Math.max((value / max) * 100, 0), 100));
	
	// Base classes for progress container
	const baseClasses = 'w-full bg-gray-200 rounded-full overflow-hidden';
	
	// Size variants
	const sizeClasses = {
		small: 'h-2',
		medium: 'h-3',
		large: 'h-4'
	};
	
	// Color variants for progress bar
	const variantClasses = {
		default: 'bg-blue-600',
		success: 'bg-green-600',
		warning: 'bg-yellow-600'
	};
	
	// Combine container classes
	const containerClasses = $derived([
		baseClasses,
		sizeClasses[size]
	].join(' '));
	
	// Progress bar classes
	const barClasses = $derived([
		'h-full transition-all duration-300 ease-out',
		variantClasses[variant]
	].join(' '));
</script>

<div class="w-full" {...restProps}>
	{#if showLabel}
		<div class="flex justify-between items-center mb-2">
			<span class="text-sm font-medium text-gray-700">Progress</span>
			<span class="text-sm font-medium text-gray-700">{Math.round(percentage)}%</span>
		</div>
	{/if}
	
	<div class={containerClasses} role="progressbar" aria-valuenow={value} aria-valuemax={max}>
		<div 
			class={barClasses}
			style="width: {percentage}%"
		></div>
	</div>
</div>
