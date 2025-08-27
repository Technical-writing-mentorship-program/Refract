---
id: getting-started
title: Getting Started
---

# Welcome to Refract

Welcome to Refract 👋 This page will give you an introduction to 80% of the Refract concepts that you will use on a daily basis.

:::info
**You will learn**

- Install Refract

- Spin up Your First App

- Understand the basic project structure
  :::

  Learn how to integrate Refract into your project quickly and efficiently. With just a few steps, you can have a basic setup running and start building interactive UIs immediately.

## Installation

Step-by-step instructions to install Refract and configure your environment.

```js
npm install @refractjs/core
```

## Architecture Guide

Understand the internal structure of Refract, from its reactive rendering engine to component lifecycle management, and learn how to contribute to its development.

## Plugins

Extend Refract with community plugins or create your own to add new functionality and enhance your applications.

## API Reference

Comprehensive documentation to customize and control your UI components, manage state, and handle user interactions effectively.

---

## Quick Start

Kick off your first Refract component in minutes:

```js
import { createComponent } from "@refractjs/core";

const App = createComponent(() => {
	return `<h1>Hello, Refract!</h1>`;
});

App.mount("#root");
```

Refract’s minimal setup ensures you can focus on building features rather than boilerplate.

---

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

---

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

---

## Getting Help

### Submit an Issue

If you encounter a bug or have a feature request, you can submit an issue on the Refract GitHub repository.

### Join the Community

Connect with other Refract developers, share ideas, and get help via the official discussion forums and community channels.
