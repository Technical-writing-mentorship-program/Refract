---
id: Internals
title: Internals
---

The internals of Refract explain how the framework actually works behind the scenes. While you don’t need this knowledge to build apps, understanding the internals helps with debugging, optimization, and even extending the framework with plugins or custom compilers.

:::note In this chapter, you'll learn

- How rendering is scheduled and committed
- How the virtual DOM diffing works
- How state updates are batched internally
- How effects are scheduled and prioritized
- How `createApp()` bootstraps everything

:::

## Rendering Pipeline

The rendering pipeline is the heart of the framework:

1. **Component Execution** – Functions run with props, returning a virtual tree.
2. **VNode Construction** – JSX compiles into lightweight virtual nodes.
3. **Diff & Reconciliation** – Old vs. new trees are compared.
4. **Commit Phase** – Minimal updates are applied to the DOM.

```js
// Pseudo-code for reconciliation
function reconcile(oldVNode, newVNode, container) {
	if (!oldVNode) {
		mount(newVNode, container);
	} else if (oldVNode.type !== newVNode.type) {
		replaceNode(oldVNode, newVNode, container);
	} else {
		patchProps(oldVNode, newVNode);
		reconcileChildren(oldVNode.children, newVNode.children, container);
	}
}
```

This ensures the DOM only changes when absolutely necessary.

## State and Reactivity

Refract uses a dependency graph to track state:

- Reads → register dependencies.

- Writes → schedule invalidation.

- Batching → groups updates to prevent wasted renders.

```js
import { refraction } from "refract/state";

const count = refraction(0);

count.subscribe((val) => {
	console.log("Re-render triggered with:", val);
});

count.set(1); // logs → "Re-render triggered with: 1"
```

This approach keeps UI fast and predictable.

## Lifecycle Management

Every component has a lifecycle object:

- onMount → setup refs & subscriptions

- onUpdate → re-run when dependencies change

- onUnmount → cleanup resources

```js
import { createComponent, onMount, onUnmount } from "refract";

export const Logger = createComponent(() => {
	onMount(() => console.log("Mounted!"));
	onUnmount(() => console.log("Unmounted!"));

	return <p>Hello Internals</p>;
});
```

## Scheduler and Effects

Effects are handled by a priority-based scheduler:

- Microtasks – urgent updates

- Macrotasks – normal effects (useEffect)

- Idle – background tasks

```js
import { effect } from "refract/state";

const clock = refraction(Date.now());

effect(() => {
	console.log("Clock tick:", clock.get());
});
createApp;
```

The createApp() method wires everything together:

```js
import { createApp } from "refract";

import App from "./App";

createApp(App).mount("#root");
```

It sets up:

- The root scope for state.

- The renderer for diffing & committing.

- Event delegation for efficient listeners.

## Why Internals Matter

Knowing the internals helps you:

- Debug reactivity issues.

- Understand why state feels “batched.”

- Write custom plugins (e.g., router, compiler).

Contribute confidently to the framework.

Think of internals as the engine room. You don’t need to go there often—but knowing how it works makes you a stronger builder.
