
import { writable } from 'svelte/store'
import type { IRouteDefinition } from './types.js'

export const routeState =  writable<IRouteDefinition | null>(null)
