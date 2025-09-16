import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function CounterDemo() {
	return (
		<BrowserOnly>
			{() => {
				// Mock Refract implementation
				const Refract = {
					createApp: () => ({
						registerComponent: (name, component) => {
							window.__refractComponent = component;
						},
						mount: () => {
							const root = document.getElementById("counter-root");
							if (root && window.__refractComponent) {
								root.innerHTML = window.__refractComponent.view();
								const button = root.querySelector("button");
								if (button) {
									button.onclick = window.__refractComponent.actions.increment;
								}
							}
						},
					}),
					createComponent: (factory) => factory(),
					useRefraction: (initial) => {
						const ref = { value: initial };
						return [
							ref,
							(val) => {
								ref.value = val;
								const display = document
									.getElementById("counter-root")
									?.querySelector("strong");
								if (display) display.textContent = val;
							},
						];
					},
				};

				// Inject mock framework
				if (typeof window !== "undefined") {
					window.Refract = Refract;
				}

				// Load the counter component
				const script = document.createElement("script");
				script.type = "module";
				script.innerHTML = `
          const { createApp, createComponent, useRefraction } = Refract;
          
          const Counter = createComponent(() => {
            const [count, setCount] = useRefraction(0);
            
            return {
              view: () => \`
                <div style="
                  font-family: sans-serif;
                  text-align: center;
                  padding: 1rem;
                  border: 1px solid var(--ifm-color-emphasis-200);
                  border-radius: 8px;
                  margin: 0.5rem 0;
                  max-width: 280px;
                ">
                  <p style="font-size: 1.2rem; margin-bottom: 1rem;">
                    Count: <strong>\${count.value}</strong>
                  </p>
                  <button
                    style="
                      padding: 0.5rem 1rem;
                      background: var(--ifm-color-primary);
                      color: white;
                      border: none;
                      border-radius: 4px;
                      cursor: pointer;
                      width: 100%;
                    "
                  >
                    Increment +
                  </button>
                </div>
              \`,
              actions: {
                increment: () => setCount(count.value + 1)
              }
            };
          });

          const app = createApp();
          app.registerComponent('counter', Counter);
          app.mount();
        `;

				document.body.appendChild(script);
				return <div id='counter-root' />;
			}}
		</BrowserOnly>
	);
}
