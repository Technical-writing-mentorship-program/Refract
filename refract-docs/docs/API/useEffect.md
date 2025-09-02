---
id: useEffect
title: useEffect
---

In Refract, useEffect is the hook you use when your component needs to synchronize with the outside world.
While your component’s main job is to calculate and render UI, effects let it reach beyond the render cycle to perform actions like:

- Fetching or saving data

- Subscribing to a data stream

- Running a timer or animation

- Manually changing the DOM

Think of useEffect as a way to connect your component to external systems.

:::note
You will learn

- What side effects are and why they matter

- How to run effects after render

- How to control when an effect re-runs

- How to clean up resources like timers or subscriptions

- How to avoid common pitfalls with dependencies

- Advanced patterns like conditional effects and multiple effects
  :::

## Effects run after render

By default, Refract renders your component to produce UI. Once the UI is committed to the screen, useEffect runs.

```js
import { useEffect } from "refract";

function WelcomeMessage() {
	useEffect(() => {
		console.log("WelcomeMessage rendered!");
	});

	return <h1>Welcome to Refract!</h1>;
}
```

Here, the console.log runs after every render. This ensures your effect logic always runs after the UI is updated.

## Controlling when effects run

Running an effect after every render is often unnecessary. To optimize this, pass a dependency array as the second argument.

```js
// Runs only once (on mount)
useEffect(() => {
	console.log("Mounted!");
}, []);

// Runs when `count` changes
useEffect(() => {
	console.log(`Count is now ${count}`);
}, [count]);
```

- No array → runs after every render

- Empty array [] → runs once (when the component mounts)

- Array with values → runs whenever one of those values changes

This makes your effects predictable and efficient.

## Cleaning up effects

Some effects need cleanup—like stopping a timer or unsubscribing from a service. To do this, return a function from your effect:

```js
useEffect(() => {
	const id = setInterval(() => {
		console.log("Tick");
	}, 1000);

	return () => clearInterval(id); // cleanup
}, []);
```

Refract will run the cleanup function before the component unmounts or before re-running the effect with new dependencies.

This prevents memory leaks and keeps your app stable.

## Multiple effects per component

You don’t have to cram everything into a single useEffect. Instead, split effects by responsibility:

```js
useEffect(() => {
	document.title = `Count: ${count}`;
}, [count]);

useEffect(() => {
	console.log("User logged in:", user.name);
}, [user]);
```

Each effect is independent, which keeps your code easier to read and maintain.

## Conditional effects

Instead of conditionally calling useEffect, put conditions inside the effect:

```js
useEffect(() => {
	if (!user) return;

	console.log(`Fetching data for ${user.name}...`);
}, [user]);
```

Hooks must always be called in the same order, so keep conditions inside, not around, useEffect.

## Common use cases

- Here are some real-world situations where useEffect shines:

- Fetching data from an API when a component mounts

- Listening for browser events like resize or scroll

- Connecting to a WebSocket for real-time updates

- Synchronizing state with localStorage or sessionStorage

- Triggering animations when certain values change

Example:

```js
useEffect(() => {
	async function fetchData() {
		const response = await fetch("/api/data");
		const result = await response.json();
		setData(result);
	}
	fetchData();
}, []); // run once on mount
```

## Pitfalls and best practices

:::caution Mind your dependencies!
Your effect’s dependency array should include every variable used inside the effect.

Missing dependencies → stale values or inconsistent behavior

Too many dependencies → effect runs too often

No array → effect runs after every render (can cause loops)

If you’re unsure, always start with all dependencies. If you need to reduce them, restructure your logic rather than removing them.
:::

Example: Infinite loop mistake
// ❌ Wrong: causes infinite loop

```js
useEffect(() => {
	setCount(count + 1);
}, [count]);
```

This keeps updating count, triggering another render, and repeating forever.

✅ Fix by rethinking logic:

// ✅ Correct: update once when mounted

```js
useEffect(() => {
	setCount((c) => c + 1);
}, []);
```

## Recap

useEffect lets you run side effects after your component renders.

Use the dependency array to control when it runs.

Always clean up resources like timers and event listeners.

Split multiple concerns into separate effects.

Keep conditions inside effects, not around them.

Be careful with dependencies—they’re key to predictable behavior.
