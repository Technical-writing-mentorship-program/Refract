---
id: optics
title: Optics
---

Optics in Refract are **composable logic units** that let you bundle reusable behaviors into your components. If **Refractions** hold state and **Lenses** help you scope it, then **Optics** connect the pieces — combining state, side effects, and transformations into one neat package.

They’re inspired by React hooks, but with a focus on **composition and clarity**.

## Why Optics?

Without optics, you might repeat the same logic in multiple components (e.g., fetching data, subscribing to events, or toggling state). Optics help by:

- **Encapsulating logic** → Wrap up behavior into a reusable unit.
- **Composing behaviors** → Mix and match optics across components.
- **Keeping components lean** → Separate UI from logic.

:::tip Think of optics as your app’s “glasses”
Refractions and lenses help you see state clearly, but optics sharpen the _logic_ in focus.  
They bring together data and side effects so your components can stay simple and declarative.
:::

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

## using Optics in Components

**1. FormField (focused input management)**

Use optics to focus on just one field in a large form state.

```js
function FormField({ optic, label }) {
	const [value, setValue] = useOptic(optic);

	return (
		<label>
			{label}
			<input value={value} onChange={(e) => setValue(e.target.value)} />
		</label>
	);
}
```

💡 This shows how optics let you bind a single input to a nested piece of state without manually wiring props.

**2. TodoItem (working with a single item in a list)**

Demonstrates focusing on an array element through optics.

```js
function TodoItem({ optic }) {
	const [todo, setTodo] = useOptic(optic);

	return (
		<div>
			<input
				type='checkbox'
				checked={todo.done}
				onChange={(e) => setTodo({ ...todo, done: e.target.checked })}
			/>
			<span>{todo.text}</span>
		</div>
	);
}
```

💡 This highlights how optics can zoom into one object inside a bigger collection.

**3. ProfileSettings (nested state handling)**

Great for showing optics applied to deeply nested structures.

```js
function ProfileSettings({ optic }) {
	const [email, setEmail] = useOptic(optic.email);
	const [username, setUsername] = useOptic(optic.username);

	return (
		<form>
			<input value={email} onChange={(e) => setEmail(e.target.value)} />
			<input value={username} onChange={(e) => setUsername(e.target.value)} />
		</form>
	);
}
```

💡 Optics let you drill down into email and username without cluttering the component with prop drilling.

**4. ListFilter (derived state through optics)**

Focus on a computed view of state instead of the raw collection.

```js
function ListFilter({ optic }) {
	const [items] = useOptic(optic.activeItems);

	return (
		<ul>
			{items.map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	);
}
```

💡 Shows optics as a tool not just for selection but also for transforming and deriving state.

**5. ThemeToggler (global/local bridge)**

Focus on shared/global state while keeping the component scoped.

```js
function ThemeToggler({ optic }) {
	const [theme, setTheme] = useOptic(optic);

	return (
		<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
			Switch to {theme === "light" ? "Dark" : "Light"} Mode
		</button>
	);
}
```

💡 This demonstrates optics as a bridge between local components and global context/state.

## Related Resources

Here are some helpful links to deepen your understanding of Refract and related tools:

- 📘 Refract Documentation – Learn more about core concepts and APIs.

- 🚀 Vite Documentation – Explore the build tool we used to set up our development environment.

- ⚛️ JSX Guide – A refresher on JSX syntax and how it’s used to structure your UI.

- 🛠️ Node.js – Make sure you’re comfortable with Node.js, since it powers your development setup.
