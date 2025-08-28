# Refract

_Refract – A reactive, composable, and refraction-based JavaScript framework for building user interfaces with clarity._

## What is Refract?

Refract** is a fictional JavaScript framework designed to help developers build modern, scalable, and reactive user interfaces. Inspired by React’s component model and state management principles, Refract introduces a novel concept called **“refractions”\*\*—a declarative way to describe UI behavior and state transitions based on reactive data flows.

While it shares conceptual similarities with React (like components, hooks, and virtual DOM), Refract reimagines the developer experience with:

- A **lightweight compiler** for optimization
- Native support for **stream-based UI updates**
- A **declarative animation API**
- Built-in **side-effect control mechanisms**
- Seamless **integration with TypeScript** and JSX-like syntax

Refract encourages **pure function-driven UIs**, uses **refractive signals** (a reactivity system like Svelte’s stores or Solid.js signals), and introduces the concept of **optical composition**—modular patterns for UI logic reuse.

## 🎯 Core concepts

### 1. **Components**

- Components in Refract are created using the `createComponent()` function.
- They are pure functions returning JSX-like syntax.
- Props and local reactive state are passed in as "lenses"—an abstraction over refractions.

```js
import { createComponent } from "refract";

const Counter = createComponent(({ lens }) => {
	const count = lens.useRefraction(0);

	return (
		<button onClick={() => count.set(count.value + 1)}>
			Clicked {count.value} times
		</button>
	);
});
```

### 2. **Refractions**

- A **refraction** is a reactive unit of state.
- Similar to signals or refs, they update the UI when mutated.
- Can be scoped globally or locally to components.

```js
import { useRefraction } from "refract";

const theme = useRefraction("light");

theme.set("dark");
console.log(theme.value); // 'dark'
```

### 3. **Lenses**

- Think of lenses as the bridge between props, refractions, and effects.
- Provide scoped access to component state, side-effects, and lifecycle.

```js
const TodoList = createComponent(({ lens }) => {
	const todos = lens.useRefraction([]);
	lens.useEffect(() => {
		fetchTodos().then(todos.set);
	}, []);
});
```

### 4. **Optical composition**

- Reusable hooks or logic patterns are grouped as **optics**.
- Similar to React hooks but with dependency-aware caching and animation-aware transitions.

```js
import { useOptic } from "refract";

function useMousePosition() {
	const pos = useRefraction({ x: 0, y: 0 });

	useOptic(() => {
		const handler = (e) => pos.set({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", handler);
		return () => window.removeEventListener("mousemove", handler);
	}, []);

	return pos;
}
```

### 5. **Side effects**

- Controlled with `useEffect`, `useOptic`, and `useFlash`.
- **useFlash** runs once after render for things like animations.
- Side-effects are opt-in and clearly scoped—no ambiguous behavior.

## Getting started

### Installation

```bash
npm install refract-js
```

### File structure

```
my-app/
├── components/
│   └── Header.js
├── optics/
│   └── useTheme.js
├── refract.config.js
├── main.js
└── index.html
```

### Basic usage

```js
import { createApp } from "refract";
import App from "./App";

createApp(App).mount("#root");
```
