<script lang="ts">
    import { onMount } from "svelte"
    import Route  from "./Route.svelte"
    import { routeState } from './store.js';
    import {CurrentRoute} from './current.js';
    import type {IRouteDefinition} from "./types.js";

    export let routes: IRouteDefinition[];
    export let pathPrefix: string = ''

    if (! routes) {
        throw new Error("routes not defined")
    }

    onMount(async () => {
        await new CurrentRoute(routes, document.location.pathname, { pathPrefix: pathPrefix}).setCurrent()
    })
</script>

<Route currentRoute={$routeState} />
