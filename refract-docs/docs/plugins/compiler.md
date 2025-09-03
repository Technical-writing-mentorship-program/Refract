---
id: Compiler
title: Compiler
---

The compiler is what transforms your JSX-like templates into efficient render functions. While most developers will never touch it directly, advanced users can extend it using a **plugin system**, similar to Vue’s compiler architecture.

:::note In this chapter, you'll learn

- How the compiler pipeline works
- How to create custom compiler plugins
- How to transform templates with AST visitors
- Best practices for writing and sharing plugins

:::

## Compiler Pipeline

The compilation process goes through three main phases:

1. **Parse** – Source code is parsed into an Abstract Syntax Tree (AST).
2. **Transform** – Plugins traverse the AST and apply transformations.
3. **Generate** – The optimized AST is turned into JavaScript render functions.

````mermaid
flowchart LR
  A[Template Source] --> B[Parser]
  B --> C[AST]
  C --> D[Transform Plugins]
  D --> E[Optimized AST]
  E --> F[Code Generator]
  F --> G[Render Function]
Writing a Compiler Plugin
Compiler plugins are functions that receive the AST and can modify it.

```js
export function MyUppercasePlugin(node, context) {
  if (node.type === "Text") {
    node.value = node.value.toUpperCase();
  }
}
````

When registered, this plugin will automatically uppercase all text nodes in templates.

## Using Plugins

You can register plugins when setting up the compiler:

```js
Copy code
import { compile } from "refract/compiler";
import { MyUppercasePlugin } from "./plugins/uppercase";

const template = `<p>Hello world</p>`;

const { code } = compile(template, {
  plugins: [MyUppercasePlugin],
});

console.log(code);
```

Resulting render function will produce:

```js
<p>HELLO WORLD</p>
```

## Advanced Example: Custom Directive

Plugins can also introduce new syntax or directives.

```js
export function vHighlight(node, context) {
	if (node.type === "Directive" && node.name === "highlight") {
		node.codegenNode = {
			type: "JSExpression",
			value: `style="background: yellow"`,
		};
	}
}
```

Usage in a template:

```jsx
<p v-highlight>Hello!</p>
```

Transforms into:

```js
<p style='background: yellow'>Hello!</p>
```

## Best Practices for Plugins

- Keep plugins small & focused – One transformation per plugin.

- Avoid side effects – Work only on the AST nodes you need.

- Test with multiple templates – Ensure compatibility.

- Compose plugins – Use multiple plugins together for more complex behavior.

## Sharing Plugins

Plugins live in the plugins/ directory and can be published as npm packages.

```js
my-plugin/
 ├─ index.js
 ├─ package.json
 └─ README.md
```

Community plugins can extend the compiler with custom directives, transforms, or syntax sugar.

Plugins let you bend the rules of the framework—without forking it. Think of them as middleware for your compiler.
