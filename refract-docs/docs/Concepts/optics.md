---
id: optics
title: Optics
---

:::note In this chapter

- What optics are and why they matter
- How to create your first optic
- How to bundle reusable logic into optics
- How to compose multiple optics together
- How optics handle setup and cleanup
- How to share logic across components
- Best practices for writing custom optics  
  :::

  Optics in Refract are **composable logic units** that let you bundle reusable behaviors into your components. If **Refractions** hold state and **Lenses** help you scope it, then **Optics** connect the pieces — combining state, side effects, and transformations into one neat package.

They’re inspired by React hooks, but with a focus on **composition and clarity**.

---

## Why Optics?

Without optics, you might repeat the same logic in multiple components (e.g., fetching data, subscribing to events, or toggling state). Optics help by:

- **Encapsulating logic** → Wrap up behavior into a reusable unit.
- **Composing behaviors** → Mix and match optics across components.
- **Keeping components lean** → Separate UI from logic.

:::tip Think of optics as your app’s “glasses”
Refractions and lenses help you see state clearly, but optics sharpen the _logic_ in focus.  
They bring together data and side effects so your components can stay simple and declarative.
:::

---

## Basic Usage

```js
title = "useWindowWidth.js";
import { createOptic } from "refract";

export const useWindowWidth = createOptic(() => {
	const width = window.innerWidth;

	const handler = () => {
		optic.set(window.innerWidth);
	};

	window.addEventListener("resize", handler);

	return () => {
		window.removeEventListener("resize", handler);
	};
});
```

```js
import { createComponent } from "refract";
import { useWindowWidth } from "./useWindowWidth";

const ResponsiveBox = createComponent(() => {
	const width = useWindowWidth();

	return (
		<div>
			<p>Window width: {width}</p>
		</div>
	);
});
```

## Composing Optics

You can combine optics like functions to create higher-level logic:

```js
import { useFetch } from "./useFetch";
import { useToken } from "./useToken";

export const useAuthProfile = () => {
	const token = useToken();
	return useFetch("/api/profile", { headers: { Authorization: token } });
};
```

Now any component can use useAuthProfile() to instantly get authenticated data.

## Best Practices

- Keep optics focused and reusable.

- Avoid putting UI logic inside optics.

- Clean up any listeners or timers in the return function.

- Compose small optics into larger ones rather than duplicating logic.
