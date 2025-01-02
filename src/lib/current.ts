import { routeState } from './store.js';
import type { IRouteDefinition, IRouterOptions } from './types.js';
import { Finder } from './finder.js';

export class CurrentRoute {
	constructor(
		private routes: IRouteDefinition[],
		private currentPath: string,
		private options: IRouterOptions = {}
	) {}

	async setCurrent() {
		const active = new Finder(this.routes, this.currentPath, this.options).findActive();
		console.log('active route ' + active);
		routeState.set(active);
	}
}
