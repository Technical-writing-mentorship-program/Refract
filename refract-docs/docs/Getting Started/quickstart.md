---
id: Quick Start
title: Quick Start
---

The fastest way to get up and running with Refract is to create a new project and render your first component. This guide takes just a few minutes and assumes you already have Node.js (v18+) installed.

Kick off your first Refract component in minutes:

```js
import { createComponent } from "@refractjs/core";

const App = createComponent(() => {
	return `<h1>Hello, Refract!</h1>`;
});

App.mount("#root");
```

Refract’s minimal setup ensures you can focus on building features rather than boilerplate.

## Configuring Refract

Fine-tune the behavior of your Refract components with a configuration file:

```js
// refract.config.js
export default {
	reactive: true,
	debug: false,
	plugins: ["./plugins/logger.js"],
};
```

This allows you to adjust global settings, enable debugging, and register third-party plugins easily.

## Basic Usage

### Creating Your First Component

Refract components are simple to define and reactive by default.

```js
const Counter = createComponent(() => {
	let count = 0;
	return `<button onclick="count++">Clicked ${count} times</button>`;
});

Counter.mount("#counter-root");
```

### Managing State

Refract provides a clean API to manage state within components, ensuring your UI updates automatically as data changes.

## Advanced Features

### Middleware

You can add middleware to intercept or modify component behavior before rendering:

```js
import { useMiddleware } from "@refractjs/core";

useMiddleware((component) => {
	console.log("Component rendered:", component);
});
```

### Handling Errors

Refract includes built-in error handling for components and lifecycle hooks, allowing you to gracefully manage runtime exceptions.

## Create a new Refract project

Run the following command in your terminal:

```js
npx create-refract-app my-app
cd my-app
npm install
npm start

```

This bootstraps a new Refract project in the my-app folder and starts the development server.

## Write your first component

Inside src/App.tsx, replace the contents with:

```js
import { createComponent } from "refract";

const HelloWorld = createComponent(() => {
	return <h1>Hello, Refract!</h1>;
});

export default function App() {
	return (
		<section>
			<HelloWorld />
		</section>
	);
}
```

This simple component displays "Hello, Refract!" in the browser.

## Add some props

Components become powerful when you pass them data. Try this:

```js
const Greeting =
	createComponent <
	{ name: string } >
	(({ name }) => {
		return <h2>Hello, {name} 👋</h2>;
	});

export default function App() {
	return (
		<section>
			<Greeting name='Ada' />
			<Greeting name='Grace' />
			<Greeting name='Katherine' />
		</section>
	);
}
```

Now you’ll see three greetings, each customized with a different name.

## Next steps

You just created your first Refract app! From here, you can explore:

Refractions

- → Add behavior and logic.

Lenses

- → Manage state and data flow.

- Optics
  → Compose logic across components.

👉 You’re ready to start building with Refract!
