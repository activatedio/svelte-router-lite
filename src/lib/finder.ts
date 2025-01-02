import type {IRouteDefinition, IRouterOptions} from "./types.js";

export class Finder {

    constructor(private routes: IRouteDefinition[], private currentPath: string, private options: IRouterOptions = {}) {
    }

    findActive() :IRouteDefinition | null {
        let fallback: IRouteDefinition | null = null;
        for (const route of this.routes) {
            const path = (this.options.pathPrefix || '') + route.path;
            if (this.currentPath === path) {
                return route;
            }
            if (route.path === "") {
                fallback = route
            }
        }
        return fallback
    }

}