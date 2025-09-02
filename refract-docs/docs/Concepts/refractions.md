---
id: refractions
title: Refractions
---

Refractions are Refract’s reactive state units lightweight containers for values that change over time. Think of them as a blend between signals (like in Solid.js) and stores (like in Zustand or Redux), but scoped and composable within Refract’s optics system.

Think of refractions as the “single source of truth” for your component’s state.

:::note In this chapter, you'll learn

- What refractions are and why they matter
- How to create and use a refraction
- How to read and update state with refractions
- How refractions trigger reactive updates in components
- How to work with nested or complex state
- Best practices for managing state with refractions  
  :::

---

## Why Refractions?

Without a reactive state system, keeping your UI in sync with data can become tedious and error-prone. Refractions solve this by:

- **Providing a single source of truth** → Every component that uses a refraction sees the same value.
- **Automatic reactivity** → Updating a refraction immediately triggers re-render of dependent components.
- **Supporting composition** → Refractions work seamlessly with lenses and optics.

:::tip Refractions are like batteries
They hold energy (state) that components can consume. When the energy changes, all connected components react automatically.
:::

## Creating a refraction

```js
import { refraction } from "refract/state";

const count = refraction(0);

// Reading the value
console.log(count.get()); // 0

// Updating the value
count.set(1);
console.log(count.get()); // 1
```

A refraction exposes a simple API:

- get() → current value

- set(newValue) → replace value

- update(fn) → update based on previous value

## Using refractions in components

```js
import { useRefraction } from "refract/state";

const counter = refraction(0);

export default function Counter() {
	const [count, setCount] = useRefraction(counter);

	return (
		<div>
			<p>{count}</p>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
		</div>
	);
}
```

useRefraction(r) subscribes the component to updates of r.

It returns [value, setter], just like React’s useState.

## Basic Usage

Creating and using a refraction is simple:

```js
title="CounterRefraction.js"
import { createComponent, useRefraction } from "refract";

const Counter = createComponent(() => {
  const count = useRefraction(0);

  return (
    <div>
      <p>Current count: {count.get()}</p>
      <button onClick={() => count.set(count.get() + 1)}>
        Increment
      </button>
    </div>
  );
```

## Anatomy of a Refraction

A refraction exposes three main methods:

- .get() → Read the current value.

- .set(newValue) → Update the value and trigger reactivity.

- .map(transformFn) → Create a derived view of the value.

Example of a derived value:

```js
const doubled = count.map((n) => n * 2);
console.log(doubled.get()); // Always returns double the current count
```

## Working with Complex State

Refractions can hold objects or arrays and work well with nested data. Use lenses to focus on specific parts:

```js
const user = useRefraction({
	profile: { name: "Peace", age: 24 },
});

const nameLens = useLens(user).map((u) => u.profile.name);
```

nameLens.set("Sandy"); // Updates user.profile.name reactively

Refractions are the foundation of state management in Refract. They store reactive values, automatically update dependent components, and integrate seamlessly with lenses and optics to help you build modular, maintainable applications.

## API Reference

refraction(initialValue)

Creates a new reactive refraction.

```js
r.get();
```

Read the current value.

```js
r.set(value);
```

Replace with a new value.

```js
r.update(fn);
```

Update based on previous value.

```js
r.focus(lens);
```

Returns a focused refraction for a nested property.

```js
derive(fn);
```

Creates a derived refraction that recomputes when its dependencies change.

```js
useRefraction(refraction);
```

Hook for binding a refraction to a React component.

```js
effect(fn);
```

Runs a side-effect whenever the refractions accessed inside fn change.

## Best practices

- Keep global app state in refractions at module scope.

- Use focused refractions to keep updates granular.

- Prefer derive instead of manually recomputing values in components.

- Use effect for side-effects only, not for deriving state.

Think of refractions as the “atoms” of state in Refract. They’re small, reactive, composable, and can be wired together into any architecture you like.
