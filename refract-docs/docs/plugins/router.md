---
id: Router
title: Router
---

Router plugins extend the framework’s navigation system. They let you intercept navigation, add custom guards, or provide new routing features like authentication, analytics, or transitions.

:::note In this chapter, you’ll learn

- How router plugins work
- How to create and register a router plugin
- Common use cases (auth, logging, transitions)
- Best practices for building router plugins  
  :::

## Why Router Plugins?

Routing is central to any SPA. Instead of baking every feature into the core, plugins allow you to customize and scale routing behavior:

- **Authentication guards** → Block or redirect users based on login state
- **Analytics hooks** → Send pageview events to analytics tools
- **Transitions** → Animate between routes
- **Nested route helpers** → Extend default navigation rules

## How Router Plugins Work

A router plugin is a function that receives the router instance and augments it.

```js
export function AuthPlugin(router, options) {
	router.beforeEach((to, from, next) => {
		if (to.meta.requiresAuth && !options.isAuthenticated()) {
			next("/login");
		} else {
			next();
		}
	});
}
```

## Registering Router Plugins

Register plugins after creating the router:

```js
import { createApp } from "refract";
import { createRouter } from "refract/router";
import { AuthPlugin } from "./plugins/authPlugin";

const router = createRouter({
	routes: [
		{ path: "/", component: Home },
		{ path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
		{ path: "/login", component: Login },
	],
});

router.use(AuthPlugin, {
	isAuthenticated: () => Boolean(localStorage.getItem("token")),
});

const app = createApp(App);
app.use(router);
app.mount("#app");
```

## Router Plugin Lifecycle

- Initialization → Runs when router.use(plugin) is called.

- Hook registration → Adds guards like beforeEach, afterEach, or custom hooks.

- Execution → Runs on navigation events.

## Common Use Cases

- **Auth & Permissions**
  Control access to certain pages based on user roles.

- **Analytics**
  Send navigation events to Google Analytics, Mixpanel, etc.

```js
export function AnalyticsPlugin(router) {
	router.afterEach((to) => {
		window.gtag("event", "page_view", { page_path: to.fullPath });
	});
}
```

## Transitions

Add custom animations on route changes.
