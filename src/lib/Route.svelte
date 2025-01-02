<script lang="ts">
    import type {IRouteDefinition} from "./types.js";
    export let currentRoute: IRouteDefinition | null;
</script>

{#if currentRoute }
<svelte:component this={currentRoute.component}  />
{/if}
