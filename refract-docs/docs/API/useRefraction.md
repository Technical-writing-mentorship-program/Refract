---
id: useRefractions
title: useRefractions()
---

Refractions are the way components in Refract share logic and behavior. They let you “bend” functionality from one part of your UI into another without tightly coupling components. Think of them as reusable lenses: instead of duplicating logic everywhere, you create a refraction and apply it wherever needed.

:::note
You will learn:

How to create and use a refraction

How to pass values into a refraction

How to read values from a refraction

How to define default values for a refraction

How refractions update over time
:::

## Familiar Refractions

A refraction is information or behavior you attach to a component. Unlike plain props or attributes, refractions let you package logic that can be reused across multiple places. For example, you might use a useRefraction hook to manage state, format data, or inject functionality into your component:

```js
// Counter.js
import { useRefraction } from "refract";

function Counter() {
	const { value, increment } = useRefraction({ initial: 0 });

	return (
		<div>
			<p>Value: {value}</p>
			<button onClick={increment}>Increase</button>
		</div>
	);
}
```

:::caution Don’t misuse refractions
A refraction is a read-only snapshot passed into your component. It can change between renders, but you should never try to mutate it directly.

If you need interactivity (like updating a value in response to user input), use state, not a refraction. Mutating refractions breaks their predictable flow and will cause confusing bugs.
:::

Here, the useRefraction call gives Counter reusable state and behavior without writing custom hooks or duplicating logic.

- Passing Data into a Refraction

- You can configure a refraction by passing it options:

- This sets up a counter that starts at 10 and increments by 2.

- Reading Values from a Refraction

- Refractions return plain objects. You can read the values directly:

```js
const { value, increment } = useRefraction({ initial: 5 });

console.log(value); // 5
increment();
console.log(value); // 6
```

This makes them flexible: treat a refraction like a function that hands you all the tools you need for your component.

## Default Values

You can define defaults so a refraction always behaves predictably, even if no options are passed:

```js
function Counter() {
	const { value, increment } = useRefraction({ step: 1 }); // defaults initial to 0

	return <button onClick={increment}>Count: {value}</button>;
}
```

## Refractions Over Time

Refractions aren’t static. They update as your app evolves—whether from user interactions, data changes, or parent configuration. Each render receives a fresh “snapshot” of the refraction’s state, so your component is always in sync.
