---
id: lenses
title: Lenses
---

# Lenses

Lenses in Refract are scope-aware helpers for reading and updating deeply nested props, state, and derived effects—without prop-drilling, mutation, or boilerplate. They’re composable, type-safe (when using TypeScript), and optimized to minimize re-renders.

Use lenses when you want precise access to a slice of data while keeping components small, reusable, and predictable.

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

## Core ideas

A lens has two capabilities:

- get(model) -> value — view a focused value

- set(model, value) -> newModel — update a focused value (immutably)

In Refract you won’t usually call get/set directly—you’ll use hooks that bind a lens to the relevant scope (props/state/effects).

## Quick start

```js
import { useLens, lens } from "refract/lens";

// Example component state (managed by Refract or your own state hook)
const initial = {
	user: {
		profile: { name: "Ada", avatarUrl: "/img/ada.png" },
		settings: { theme: "dark" },
	},
};

export default function ProfileEditor() {
	// Create a lens to focus on user.profile.name
	const nameL = lens.path("user.profile.name");

	// Bind the lens to your component state
	const [name, setName] = useLens(nameL);

	return (
		<label>
			Display name
			<input value={name} onChange={(e) => setName(e.target.value)} />
		</label>
	);
}
```

lens.path(...) composes a lens from a dot-path. useLens(l) returns a value and an updater for that focus. Updates are immutable and granular.

## Creating lenses

**From a dot path**

```js
const themeL = lens.path("user.settings.theme");
```

**From object properties**

```js
const userL = lens.prop<Root>()("user");           // focus `root.user`
const profileL = lens.prop<User>()("profile");     // focus `user.profile`
const nameL = userL.compose(profileL).prop("name"); // `user.profile.name`
```

**From arrays**

```js
const itemsL = lens.prop<Cart>()("items");
const firstItemQtyL = itemsL.index(0).prop("qty");
```

**Optional paths (safe)**

```js
const bioL = lens.path("user.profile.bio").optional();
// get returns string | undefined, set creates path if needed
```

## Using lenses with different scopes

Refract exposes dedicated hooks to bind a lens to the appropriate source:

```js
import { useLens } from "refract/lens";         // component-local state
import { usePropLens } from "refract/lens/prop"; // component props
import { useEffectLens } from "refract/lens/effect"; // derived/effectful data

function Card({ user }: { user: User }) {
  const [theme] = usePropLens(lens.path("settings.theme"), user);
  // read-only by default; pass an updater to make it writable
  return <div data-theme={theme}>...</div>;
}


useLens(lens[, source, setSource]) — bind to local state (or a provided model + setter)

usePropLens(lens, props[, setProps]) — focus on props (often read-only)

useEffectLens(lens, effectStore) — focus on derived/effect data
```

If you’re not supplying a model/setter, Refract will bind to the component’s registered state store (via its internal state system). If you’re integrating with React’s useState, pass [model, setModel].

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
