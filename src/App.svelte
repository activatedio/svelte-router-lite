<script lang="ts">
	import Router from './lib/Router.svelte';
	import type { IRouteDefinition } from './lib/types.js';
	import Page1 from './pages/page1/Page.svelte';
	import HomePage from './pages/home/Page.svelte';
	import FallbackPage from './pages/fallback/Page.svelte';

	let routes: IRouteDefinition[] = [
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
