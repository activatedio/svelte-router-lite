<script lang="ts">
	import Router from './lib/Router.svelte';
	import Page1 from './pages/page1/Page.svelte';
	import HomePage from './pages/home/Page.svelte';
	import FallbackPage from './pages/fallback/Page.svelte';

	let routes = [
		{
			path: '/page1',
			component: Page1
		},
		{
			path: '/',
			component: HomePage
		},
		{
			path: '',
			component: FallbackPage
		}
	];
</script>

<main>
	<div>
		<Router {routes} />
	</div>
</main>
