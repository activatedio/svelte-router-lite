import * as svelte from 'svelte';

export interface IRouteDefinition {
	path: string;
	component: svelte.Component;
}

export interface IRouterOptions {
	pathPrefix?: string;
}
