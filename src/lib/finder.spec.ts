import { describe, it, expect, beforeEach } from 'vitest';
import { IRouteDefinition, IRouterOptions } from './types.js';
import { Finder } from './finder.js';
import HomePage from '../pages/home/Page.svelte'
import FallbackPage from '../pages/fallback/Page.svelte'
import Page1Page from '../pages/page1/Page.svelte'

describe('finder', () => {

	let routes: IRouteDefinition[] = [];

	const newFinder = (currentUrl: string, opts?: IRouterOptions):Finder => {
		return new Finder(routes, currentUrl, opts);
	}

	describe('with fallback', () => {

		beforeEach(() => {

			routes = [
				{
					path: "/",
					component:  HomePage,
				},
				{
					path: "/page1",
					component:  Page1Page,
				},
				{
					path: "",
					component:  FallbackPage,
				},
			]

		})

		it('handles default route', () => {
			expect(newFinder('/').findActive()?.component).toBe(HomePage)
		});

		it('handles page1 route', () => {
			expect(newFinder('/page1').findActive()?.component).toBe(Page1Page)
		});

		it('handles fallback route', () => {
			expect(newFinder('/unkonwn').findActive()?.component).toBe(FallbackPage)
		});

	});

	describe('without fallback', () => {

		beforeEach(() => {

			routes = [
				{
					path: "/",
					component:  HomePage,
				},
				{
					path: "/page1",
					component:  Page1Page,
				},
			]

		})

		it('handles fallback route as undefined', () => {
			expect(newFinder('/unkonwn').findActive()?.component).toBeUndefined()
		});

	})
});
