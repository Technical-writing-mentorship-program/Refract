---
id: contributing
title: Contributing Guide
---

# Contributing

Thank you for your interest in contributing to **Refract** 🎉  
We welcome contributions of all kinds — from bug fixes and documentation improvements to new features and plugins. This guide will help you get started.

## Getting Started

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:

   ```js
   git clone https://github.com/your-username/refract.git
   cd refract
   ```

Install dependencies:

```js
bash
npm install
```

Run the dev build to make sure everything works:

```js
bash
npm run dev
```

## Ways to Contribute

🐛 Report bugs — Open an issue with details, steps to reproduce, and screenshots if possible.

📝 Improve docs — Fix typos, add examples, or expand explanations in the docs/ folder.

⚡ Suggest enhancements — Propose new features or APIs via an issue or discussion.

🔌 Build plugins — Extend Refract with router, compiler, or state plugins.

🧪 Write tests — Help us increase coverage and reliability.

## Code Guidelines

- Style: Follow our ESLint + Prettier rules.
- Commits: Use Conventional Commits. Example:
- feat(router): add lazy loading for routes
- fix(state): correct refraction update logic
- docs: update lenses usage guide
- Testing: Make sure npm test passes before pushing.

## Pull Request Process

Create a new branch for your work:

```js
git checkout -b feat/my-new-feature
```

- Make your changes and commit with a clear message.

- Push to your fork and open a PR against main.

A maintainer will review your PR. Please be open to feedback 🙂.

## Community

💬 Join the Refract Community Discord to discuss ideas.

🐦 Tag us on Twitter (@RefractJS) when you share plugins or demos.

📚 Check the Advanced Guide for ideas on extending Refract.

## Code of Conduct

We follow the Contributor Covenant.

By participating, you agree to uphold a welcoming and respectful environment for everyone.

Thank You 💜

Every contribution makes Refract better. Whether it’s your first PR or your 100th, we’re grateful for your time and effort!
