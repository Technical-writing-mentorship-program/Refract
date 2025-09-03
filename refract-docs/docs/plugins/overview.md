---
id: Overview
title: Overview
---

Plugins are the extension points of the framework. They allow developers to hook into internals, enhance functionality, and share reusable logic without modifying the core library.

Think of plugins as “add-ons” that register extra behavior—whether it’s a new compiler transform, a custom directive, or global utilities.

:::note In this chapter, you’ll learn

- What plugins are and why they matter
- How to create and register a plugin
- The plugin lifecycle
- Common use cases and best practices  
  :::

## Why Plugins?

Without plugins, frameworks would need to ship with every possible feature built-in. Plugins solve this by letting you extend functionality **on demand**:

- Add new directives or syntax sugar
- Integrate external libraries (e.g., state, i18n, analytics)
- Customize compiler transformations
- Provide reusable components and hooks

## Anatomy of a Plugin

A plugin is simply a function that receives the application instance (or compiler context) and extends it.

```js
export function MyPlugin(app, options) {
	// Add a global property
	app.config.globalProperties.$hello = () => "Hello from plugin!";

	// Register a global component
	app.component("MyButton", {
		template: `<button><slot /></button>`,
	});

	// Add a directive
	app.directive("focus", {
		mounted(el) {
			el.focus();
		},
	});
}
```

## Registering Plugins

Plugins are registered at app creation:

```js
Copy code
import { createApp } from "refract";
import { MyPlugin } from "./plugins/myPlugin";

const app = createApp(App);

app.use(MyPlugin, { someOption: true });

app.mount("#app");
```

Once registered, all plugin-provided features are available across the app.

## Plugin Lifecycle

- Initialization → Runs when app.use() is called.

- Augmentation → Adds properties, directives, components, or compiler hooks.

- Execution → Takes effect whenever the app renders or compiles templates.

## Best Practices

- Keep plugins modular → Solve one problem per plugin.

- Support options → Make behavior configurable.

- Avoid globals when possible → Use scoped APIs for cleaner design.

- Document clearly → Explain what your plugin does and how to use it.

## Sharing Plugins

Plugins can be packaged and published to npm for reuse. A simple structure:

```js
bash
my-plugin/
 ├─ index.js        # plugin entry
 ├─ package.json
 └─ README.md
```

Install with:

```js
bash
npm install my-plugin
```

Then:

```js
import MyPlugin from "my-plugin";
app.use(MyPlugin);
```

Plugins are the bridge between framework core and community creativity. Use them to keep your app lightweight, flexible, and future-proof.
