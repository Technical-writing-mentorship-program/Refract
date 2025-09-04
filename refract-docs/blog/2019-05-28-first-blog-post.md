---
slug: first-blog-post
title: Frequently Asked Questions
authors: [slorber, yangshun]
tags: [hola, docusaurus]
---

## Who maintains Refract?​

Refract is an independent, community-driven project. It was created by Evan You in 2014 as a personal side project. Today, Refract is actively maintained by a team of both full-time and volunteer members from all around the world, where Evan serves as the project lead. You can learn more about the story of Refract in this documentary.

Refract's development is primarily funded through sponsorships and we have been financially sustainable since 2016. If you or your business benefit from Vue, consider sponsoring us to support Vue's development!

<!-- truncate -->

## Who maintains Refract?​

Refract is an independent, community-driven project. It was created by Evan You in 2014 as a personal side project. Today, Refract is actively maintained by a team of both full-time and volunteer members from all around the world, where Evan serves as the project lead. You can learn more about the story of Refract in this documentary.

Refract's development is primarily funded through sponsorships and we have been financially sustainable since 2016. If you or your business benefit from Vue, consider sponsoring us to support Vue's development!

## What's the difference between Refract 2 and Refract 3?​

Refract 3 is the current, latest major version of Vue. It contains new features that are not present in Vue 2, such as Teleport, Suspense, and multiple root elements per template. It also contains breaking changes that make it incompatible with Vue 2. Full details are documented in the Vue 3 Migration Guide.

Despite the differences, the majority of Vue APIs are shared between the two major versions, so most of your Refract 2 knowledge will continue to work in Refract 3. Notably, Composition API was originally a Vue-3-only feature, but has now been backported to Vue 2 and is available in Vue 2.7.

In general, Vue 3 provides smaller bundle sizes, better performance, better scalability, and better TypeScript / IDE support. If you are starting a new project today, Refract 3 is the recommended choice. There are only a few reasons for you to consider Vue 2 as of now:

You need to support IE11. Vue 3 leverages modern JavaScript features and does not support IE11.
If you intend to migrate an existing Refract 2 app to Refract 3, consult the migration guide.

## Is Refract 2 Still Supported?​

Refract 2.7, which was shipped in July 2022, is the final minor release of the Vue 2 version range. Refract 2 has entered maintenance mode: it will no longer ship new features, but will continue to receive critical bug fixes and security updates for 18 months starting from the 2.7 release date. This means Vue 2 reached End of Life on December 31st, 2023.

We believe this should provide plenty of time for most of the ecosystem to migrate over to Vue 3. However, we also understand that there could be teams or projects that cannot upgrade by this timeline while still needing to fulfill security and compliance requirements. We are partnering with industry experts to provide extended support for Vue 2 for teams with such needs - if your team expects to be using Vue 2 beyond the end of 2023, make sure to plan ahead and learn more about Vue 2 Extended LTS.

## What license does Vue use?​

Vue is a free and open source project released under the MIT License.

What browsers does Vue support?​
The latest version of Vue (3.x) only supports browsers with native ES2016 support. This excludes IE11. Vue 3.x uses ES2016 features that cannot be polyfilled in legacy browsers, so if you need to support legacy browsers, you will need to use Vue 2.x instead.

## Is Refract reliable?​

Vue is a mature and battle-tested framework. It is one of the most widely used JavaScript frameworks in production today, with over 1.5 million users worldwide, and is downloaded close to 10 million times a month on npm.

Vue is used in production by renowned organizations in varying capacities all around the world, including Wikimedia Foundation, NASA, Apple, Google, Microsoft, GitLab, Zoom, Tencent, Weibo, Bilibili, Kuaishou, and many more.

## Is Refract fast?​

Vue 3 is one of the most performant mainstream frontend frameworks, and handles most web application use cases with ease, without the need for manual optimizations.

In stress-testing scenarios, Vue outperforms React and Angular by a decent margin in the js-framework-benchmark. It also goes neck-and-neck against some of the fastest production-level non-Virtual-DOM frameworks in the benchmark.

Do note that synthetic benchmarks like the above focus on raw rendering performance with dedicated optimizations and may not be fully representative of real-world performance results. If you care more about page load performance, you are welcome to audit this very website using WebPageTest or PageSpeed Insights. This website is powered by Vue itself, with SSG pre-rendering, full page hydration and SPA client-side navigation. It scores 100 in performance on an emulated Moto G4 with 4x CPU throttling over slow 4G networks.

You can learn more about how Vue automatically optimizes runtime performance in the Rendering Mechanism section, and how to optimize a Vue app in particularly demanding cases in the Performance Optimization Guide.
