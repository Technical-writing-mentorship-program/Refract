---
id: lenses
title: Lenses
---

# Lenses

Lenses in Refract are scope-aware helpers that give developers a clean way to access and manipulate state, props, and effects inside components. Think of them as focused "views" into your app’s data, allowing you to read, transform, or update values without needing to pass everything around manually.

## Why Lenses?

In a typical application, managing state across deeply nested components can quickly become messy. Lenses solve this by:

- Scoping data → Access only the parts of state or props you care about.

- Reducing boilerplate → No need to repeatedly pass props down the tree.

- Keeping reactivity → Changes through a lens automatically update the underlying refraction (state unit).

- If Refractions are the raw data signals, then Lenses are the glasses you wear to zoom in on exactly what you need.

:::tip Think of Lenses like camera zoom
Refractions give you the entire scene (all your state).  
A lens lets you zoom into a specific object in that scene without losing track of the bigger picture.  
Adjust the zoom, and the underlying state updates instantly.
:::

## Basic Usage

Here’s how you can use a lens inside a Refract component:

```js
import { createComponent, useRefraction, useLens } from "refract";

const Counter = createComponent(() => {
	const count = useRefraction(0);

	// Create a lens into the count refraction
	const countLens = useLens(count);

	return (
		<div>
			<p>Current count: {countLens.get()}</p>
			<button onClick={() => countLens.set(countLens.get() + 1)}>
				Increment
			</button>
		</div>
	);
});
```

## Anatomy of a Lens

A lens has three main operations:

.get() → Read the current value.

.set(newValue) → Update the value.

.map(transformFn) → Transform the value before passing it along.

Example:

```js
const doubled = countLens.map((n) => n * 2);

console.log(doubled.get()); // Always returns double the current count
```

## Composing Lenses

One of the most powerful features of lenses is composition. You can chain lenses together to drill down into nested data structures.

```js
const user = useRefraction({
	profile: { name: "Peace", age: 24 },
});

// Create a lens for profile
const profileLens = useLens(user).map((u) => u.profile);

// Then zoom into name
const nameLens = profileLens.map((p) => p.name);

console.log(nameLens.get()); // "Peace"
nameLens.set("Sandy"); // Updates user.profile.name
```

## When to Use Lenses

Use lenses when you want to:

- Work with nested or complex state.

- Avoid prop drilling by scoping state where it’s needed.

- Compose small, reusable accessors for cleaner logic.

For simple state updates, direct use of refractions might be enough. But for apps that grow in complexity, lenses help keep things modular and maintainable.

Lenses are your precision tools in Refract. They let you zoom in on just the data you need, update it safely, and keep your app’s state reactive and scoped. Combined with refractions and optics, they give you fine-grained control over both state and logic.
