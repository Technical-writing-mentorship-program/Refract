---
id: counter-app
title: Counter App
---

Welcome to your very first hands-on tutorial in Refract! 🎉

In this guide, we’ll build a simple Counter App together. Don’t be fooled by its simplicity — this little app introduces you to the most important concepts in Refract: components, state, and event handling.

Think of it as your "Hello World," but interactive.

🧭 Tutorial Path

This tutorial is part of the Getting Started section.
If you haven’t already, make sure you’ve gone through:

- Installation

- Project Structure

Next up after this tutorial:

## Creating Your First Form

**Step 1: Create the Counter Component**

First, inside your src/component folder, create a new file called Counter.js.

Add the following code:

```js
import React, { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div style={{ textAlign: "center", marginTop: "2rem" }}>
			<h2>Counter App</h2>
			<p>Current count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increase</button>
			<button
				onClick={() => setCount(count - 1)}
				style={{ marginLeft: "1rem" }}>
				Decrease
			</button>
		</div>
	);
}
```

## What’s happening here?

- useState creates a piece of state called count with an initial value of 0.

- Increase button updates the state by adding 1.

- Decrease button updates the state by subtracting 1.

- Whenever the state changes, Refract automatically re-renders the UI.

:::tip Why start with a Counter?
Counters are the simplest way to understand how state flows through your app.
If you get this, you’ll understand the backbone of every interactive UI you’ll ever build with Refract.
:::

**Step 2: Import the Component into Docs**

Now, let’s render the Counter component inside your docs page.

Open docs/tutorial/counter-app.mdx (this file) and add:

```js
import Counter from "@site/src/component/Counter";
```

## Building a Counter App

Here’s our Counter in action:

```js
<Counter />
```

When you restart your dev server, the live component will appear inside the documentation. Pretty cool, right? 🚀

**Step 3: Try It Out**

Start your dev server:

```js
npm run start
```

Navigate to the tutorial page. You’ll now see your Counter App running inside your documentation.

Go ahead and click the buttons you should see the number increasing and decreasing instantly.

**Step 4: Add More Functionality**

Let’s go a little further. Add a Reset button so the count can go back to zero.

Update your component:

```js
<button onClick={() => setCount(0)} style={{ marginLeft: "1rem" }}>
	Reset
</button>
```

Now you have three actions: Increase, Decrease, and Reset.

:::note Beyond the Basics
At this point, you’ve touched on three core ideas:

State – data that changes over time.

Events – user interactions like clicks.

Rendering – Refract updates the UI whenever state changes.

Everything else you’ll build — from dashboards to forms to entire apps — is just a more complex version of this cycle.
:::

**Step 5: Add Styles**

Let’s make it look a little nicer. Create a CSS file, Counter.css:

```js
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.counter button {
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border: none;
  border-radius: 5px;
  background: #4cafef;
  color: white;
  cursor: pointer;
  font-size: 1rem;
}

.counter button:hover {
  background: #2196f3;
}
```

And import it at the top of your Counter.js:

```js
import "./Counter.css";
```

Now your counter looks clean and professional.

✅ You Did It!

Congratulations — you’ve just built your very first interactive app in Refract. 🎉

**You learned how to:**

- Create a component

- Manage state with useState

- Handle events (button clicks)

- Render UI updates automatically

- Add custom styles

📌 What’s Next?

From here, you can explore:

- Form Handling

- Working with Effects

- Connecting to APIs

:::caution A Quick Reminder
If your Counter doesn’t show up:

Make sure you imported the component correctly in your .mdx file.

Double-check the file path (@site/src/component/Counter).

Restart your dev server after changes.

Most errors come from typos or missing imports.
:::
