import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
	tutorialSidebar: [
		"intro", // keep only one reference
		{
			type: "category",
			label: "Getting Started",
			items: [
				"Getting Started/Introduction",
				"Getting Started/installation",
				"Getting Started/Quick Start",
			],
		},
		{
			type: "category",
			label: "Concepts",
			items: ["Concepts/refractions", "Concepts/optics", "Concepts/lenses"],
		},
		{
			type: "category",
			label: "API",
			items: ["API/createComponent", "API/useEffect", "API/useRefractions"],
		},
		{
			type: "category",
			label: "Tutorials",
			items: [
				"Tutorials/counter-app",
				"Tutorials/global-theme",
				"Tutorials/contributions",
			],
		},
		{
			type: "category",
			label: "Plugins",
			items: ["plugins/Overview", "plugins/Compiler", "plugins/Router"],
		},
		{
			type: "category",
			label: "Advanced Guide",
			items: [
				"advanced-guide/Internals",
				"advanced-guide/Routing",
				"advanced-guide/optimization", // lowercase o
			],
		},
		"contributing",
	],
};

export default sidebars;
