---
id: installation
title: Installation
---

Refract has been designed from the start for gradual adoption. You can use as little or as much Refract as you need. Whether you want to get a taste of Refract, add some interactivity to an HTML page, or start a complex React-powered app, this section will help you get started.

:::info
**You will learn**

- Install Refract

- Spin up Your First App

- Understand the basic project structure
  :::

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

## Installing Dependencies

Before using Refract, ensure your project environment is ready and all necessary dependencies are installed.

```js
npm install @refractjs/core
```

Refract is designed to work seamlessly with modern JavaScript tooling and bundlers.

## Setting Up the Configuration

Create a configuration file to define global settings for your project:

```js
// refract.config.js
export default {
	reactive: true,
	debug: false,
	plugins: ["./plugins/logger.js"],
};
```

This configuration allows you to enable or disable reactivity, register plugins, and customize debugging options.

## Quick Configuration Guide

- Reactive Mode: Enable or disable global reactivity.

- Plugins: Register third-party or custom plugins to extend functionality.

- Debugging: Toggle verbose logging for development purposes.

## Project Structure

Organizing your Refract project properly ensures scalability and maintainability:

- components/ — all your UI components.

- plugins/ — custom or third-party plugins.

- refract.config.js — global configuration.

- index.js — entry point for mounting your root component.

## First Component

After installation, create your first component to confirm everything works:

```js
import { createComponent } from "@refractjs/core";

const App = createComponent(() => `<h1>Hello, Refract!</h1>`);
App.mount("#root");
```

Once mounted, your component should render instantly in the browser.

## Next Steps

After installing and configuring Refract, you can:

Start building reactive UI components.

Add middleware or plugins for extended functionality.

Explore state management and lifecycle methods for more complex applications.
