---
id: createComponent
title: createComponent()
---

Refract applications are built from isolated pieces of UI called components. A component is a small, reusable building block that returns part of your user interface. Components can be as tiny as a button or as large as an entire page.

In Refract, you create them with the createComponent() function. Just like React functions return JSX, a Refract component is a function that returns markup-like UI. Components can then be combined, customized, and rendered anywhere in your app.

:::note

## In this chapter

How to write your first Refract component

How to configure components with props

How to nest multiple components together

How to keep components pure and predictable

Why components form the foundation of every Refract app
:::

## Your first component

Here’s a simple Greeting component built with createComponent(). It accepts a name prop and renders a personalized message:

```js
import { createComponent } from "refract";

const Greeting =
	createComponent <
	{ name: string } >
	(({ name }) => {
		return <h1>Hello, {name}!</h1>;
	});

export function App() {
	return (
		<section>
			<Greeting name='Ada' />
			<Greeting name='Grace' />
			<Greeting name='Katherine' />
		</section>
	);
}
```

This example renders three greetings, each with a different name. Notice that:

- createComponent wraps your function and marks it as a component.

- Props (like name) let you configure the component from outside.

- Components can be reused multiple times with different data.

---

## Why createComponent()?

- It ensures all components follow the same declarative structure.

- It makes components predictable—pure functions of their props.

- It integrates cleanly with other Refract concepts like refractions, lenses, and optics.

- Think of createComponent() as the entry point to building any UI in Refract.
