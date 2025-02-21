<script>
	import '../app.css';
	let { children } = $props();
	import Header from '$lib/components/Navbar.svelte';

</script>

<Header />

{@render children()}
