# svelte-router-lite

Simple router which renders components based on paths.

* Supports prefix via `prefixPath` options.
* Blank route is a fallback route.

Example usage:

``` 
<script lang="ts">
	import Router from '@activatedio/svelte-router-lite';
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
```

