---
id: Routing
title: Routing
---

The router in Refract is more than just a simple mapping of URLs to components.  
At the advanced level, it acts as a **navigation engine** with hooks, middleware, and lifecycle events you can extend.

:::note In this chapter, you'll learn

- How the router lifecycle works internally
- Writing custom navigation guards and middlewares
- Lazy loading and route-based code splitting
- Handling nested and dynamic routes
- Advanced features: scroll behavior, route meta, and error handling
  :::

---

## Router Lifecycle

When a navigation is triggered, the router processes it through several stages:

1. **Resolve** → Match the incoming path against the route table.
2. **Before Hooks** → Run global and per-route guards.
3. **Component Mount** → Render matched components.
4. **After Hooks** → Trigger side-effects like analytics or logging.

This lifecycle gives you multiple extension points.

## Global Navigation Guards

Global guards allow you to intercept every route change and enforce app-wide rules.

```js
router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !auth.isLoggedIn()) {
		next("/login");
	} else {
		next();
	}
});
```

## Middleware-Style Plugins

You can inject middlewares into the router for modular logic:

```js
function analyticsPlugin(router) {
	router.afterEach((to) => {
		trackPageView(to.fullPath);
	});
}
router.use(analyticsPlugin);
```

## Nested & Dynamic Routes

Advanced routing often requires deeply nested views or dynamic parameters.

```js
const routes = [
	{
		path: "/dashboard",
		component: Dashboard,
		children: [
			{ path: "settings", component: Settings },
			{ path: "users/:id", component: UserProfile },
		],
	},
];
```

Dynamic routes like /users/42 automatically expose parameters (id) inside the component.

## Lazy Loading & Code Splitting

For performance, load components only when needed:

```js
const routes = [
	{
		path: "/settings",
		component: () => import("./views/Settings.js"),
	},
];
```

This ensures faster initial load and smaller bundles.

## Scroll Behavior

Customize scroll restoration between navigations:

```
const router = createRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
});
```

## Error Handling

Catch navigation errors gracefully:

```js
router.onError((err) => {
	console.error("Routing error:", err);
	router.push("/error");
});
```

## Summary

The advanced router APIs give you fine-grained control over navigation, user experience, and app performance. By mastering lifecycle hooks, lazy loading, and middleware, you can build routing systems that are scalable, resilient, and optimized for users.
