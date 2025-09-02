---
id: global-theme
title: Global Theme
---

Global Themes

Refract allows you to define global themes that apply consistent colors, typography, and component styles across your entire application. Themes make it easy to maintain a unified look and feel, while still giving you the flexibility to adapt to dark mode, brand requirements, or user preferences.

## Why Use Global Themes?

- Consistency: Ensure all components share the same design language.

- Scalability: Update your entire UI from a single configuration file.

- Customization: Support multiple themes (light, dark, custom branding).

- User Experience: Allow users to switch between modes seamlessly.

## Setting Up a Theme

Refract’s theming system works by wrapping your application in a ThemeProvider at the root level.

```
import { ThemeProvider } from "refract/theme";
import App from "./App";

const theme = {
  colors: {
    primary: "#4cafef",
    secondary: "#f39c12",
    background: "#ffffff",
    text: "#333333",
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Roboto, sans-serif",
  },
};

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
```

Think of ThemeProvider as a global styling contract. Once set, every component in your app can "read" from it without you passing props manually.

## Accessing Theme Values

Inside your components, use the useTheme hook to access the current theme.

```js
import { useTheme } from "refract/theme";

export default function Button({ children }) {
	const { colors } = useTheme();

	return (
		<button
			style={{
				background: colors.primary,
				color: "#fff",
				padding: "0.5rem 1rem",
				border: "none",
				borderRadius: "5px",
			}}>
			{children}
		</button>
	);
}
```

Here, the button automatically adopts your primary color, ensuring brand alignment everywhere it’s used.

Switching Between Themes

You can define multiple themes and switch between them dynamically.

```js
const lightTheme = {
	colors: { background: "#ffffff", text: "#000000" },
};

const darkTheme = {
	colors: { background: "#000000", text: "#ffffff" },
};
```

Example toggle:

```js
import { ThemeProvider, useThemeManager } from "refract/theme";

function ThemeToggle() {
	const { setTheme, currentTheme } = useThemeManager();

	return (
		<button
			onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}>
			Switch Theme
		</button>
	);
}
```

:::caution Performance Note
Avoid placing multiple ThemeProvider components deep in the tree. Stick to one global provider at the root to prevent unnecessary re-renders.
:::

## Best Practices

Define tokens, not styles: Store raw values like primary: #4cafef, not CSS strings like background: linear-gradient(...). This keeps your theme clean.

- Support accessibility: Ensure good contrast ratios for dark/light themes.

- Keep it DRY: Use your theme values everywhere instead of hardcoding.

- Expose overrides: Allow components to accept style or className props for flexibility.

Example: Card Component with Theming

```js
import { useTheme } from "refract/theme";

export default function Card({ title, children }) {
	const { colors } = useTheme();

	return (
		<div
			style={{
				background: colors.background,
				color: colors.text,
				border: `1px solid ${colors.primary}`,
				padding: "1rem",
				borderRadius: "10px",
				margin: "1rem 0",
			}}>
			<h3>{title}</h3>
			<p>{children}</p>
		</div>
	);
}
```
