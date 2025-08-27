---
id: refractions
title: Refractions
---

Refractions in Refract are **reactive state units** — the core building blocks for holding and managing state in your application. They behave similarly to signals or stores in other frameworks and automatically update any component that uses them when their value changes.

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

---

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
