import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { useState, useEffect } from "react";

import styles from "./index.module.css";

type FeatureItem = {
	title: string;
	description: React.ReactNode;
	link: string;
	icon: string;
	isOfficial?: boolean;
};

// 3D Card Component with Mouse Tracking
function ThreeDCard({
	children,
	className,
	isOfficial = false,
	...props
}: {
	children: ReactNode;
	className?: string;
	isOfficial?: boolean;
	[key: string]: any;
}) {
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);
	const [scale, setScale] = useState(1);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const mouseX = e.clientX - centerX;
		const mouseY = e.clientY - centerY;

		const rotateXValue = (mouseY / rect.height) * -20;
		const rotateYValue = (mouseX / rect.width) * 20;

		setRotateX(rotateXValue);
		setRotateY(rotateYValue);
		setScale(isOfficial ? 1.08 : 1.05);
	};

	const handleMouseLeave = () => {
		setRotateX(0);
		setRotateY(0);
		setScale(1);
	};

	const cardStyle = {
		transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
		transition: "transform 0.15s ease-out",
	};

	return (
		<div
			className={clsx(className, isOfficial && styles.officialCard)}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={cardStyle}
			{...props}>
			{isOfficial && (
				<div className={styles.officialBadge}>
					<span className={styles.officialBadgeIcon}>⭐</span>
					<span className={styles.officialBadgeText}>Official</span>
				</div>
			)}
			<div className={styles.cardInner}>{children}</div>
			{isOfficial && <div className={styles.glowEffect}></div>}
		</div>
	);
}

// Floating Particle Component
function FloatingParticle({ delay = 0 }: { delay?: number }) {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const animate = () => {
			const time = Date.now() * 0.001 + delay;
			const x = Math.sin(time * 0.5) * 30;
			const y = Math.cos(time * 0.3) * 20;
			setPosition({ x, y });
		};

		const interval = setInterval(animate, 50);
		return () => clearInterval(interval);
	}, [delay]);

	return (
		<div
			className={styles.floatingParticle}
			style={{
				transform: `translate(${position.x}px, ${position.y}px)`,
			}}
		/>
	);
}

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<header className={clsx("hero", styles.heroBanner)}>
			<div className={styles.heroContainer}>
				<div className={styles.heroContent}>
					<div className={styles.heroText}>
						<Heading as='h1' className={clsx("hero__title", styles.heroTitle)}>
							Refract Documentation{" "}
							<span className={styles.gradientText}></span>
						</Heading>
						<p className={clsx("hero__subtitle", styles.heroSubtitle)}>
							Build predictable, reactive applications with declarative optics,
							reusable components, and minimal boilerplate.
						</p>
						<div className={styles.buttons}>
							<Link
								className={clsx(
									"button button--primary button--lg",
									styles.primaryButton
								)}
								to='http://localhost:3000/docs/intro'>
								<span>🚀 Get Started</span>
							</Link>
							<Link
								className={clsx(
									"button button--secondary button--lg",
									styles.secondaryButton
								)}
								to='http://localhost:3000/docs/API/createComponent'>
								<span>📖 API Reference</span>
							</Link>
						</div>
						<div className={styles.trustBadges}>
							<div className={styles.trustBadge}>
								<span className={styles.trustIcon}>⭐</span>
								<span>4.9/5 Developer Rating</span>
							</div>
							<div className={styles.trustBadge}>
								<span className={styles.trustIcon}>🔒</span>
								<span>Enterprise Ready</span>
							</div>
							<div className={styles.trustBadge}>
								<span className={styles.trustIcon}>⚡</span>
								<span>99.9% Uptime</span>
							</div>
						</div>
					</div>

					<div className={styles.codePreview}>
						<div className={styles.codeHeader}>
							<div className={styles.codeDots}>
								<span className={styles.dot}></span>
								<span className={styles.dot}></span>
								<span className={styles.dot}></span>
							</div>
							<div className={styles.codeTitle}>Quick Start</div>
						</div>
						<div className={styles.codeContent}>
							<pre className={styles.codeBlock}>
								<code>{`// Install the library
npm install @refract/core

// Initialize and use
import { createRefraction } from '@refract/core';

const state = createRefraction({
  count: 0,
  user: null
});

// Reactive updates
state.count.set(42);
console.log(state.count.get()); // 42`}</code>
							</pre>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.heroBackground}>
				<div className={styles.gradientOrb}></div>
				<div className={styles.gradientOrb2}></div>
				<div className={styles.floatingElements}>
					<FloatingParticle delay={0} />
					<FloatingParticle delay={1} />
					<FloatingParticle delay={2} />
					<div className={styles.floatingElement}></div>
					<div className={styles.floatingElement}></div>
					<div className={styles.floatingElement}></div>
				</div>
			</div>
		</header>
	);
}

const FeatureList: FeatureItem[] = [
	{
		title: "Refractions",
		icon: "⚡",
		description: (
			<>
				Reactive state units similar to signals or stores. Keep your UI in sync
				with minimal effort and maximum performance. Built-in TypeScript
				support.
			</>
		),
		link: "http://localhost:3000/docs/Concepts/refractions",
		isOfficial: true,
	},
	{
		title: "Lenses",
		icon: "🔍",
		description: (
			<>
				Scope-aware helpers for accessing props, effects, and state in a clean
				and composable way. Write cleaner, more maintainable code with zero
				boilerplate.
			</>
		),
		link: "http://localhost:3000/docs/Concepts/lenses",
		isOfficial: true,
	},
	{
		title: "Optics",
		icon: "🔗",
		description: (
			<>
				Composable logic units like hooks. Organize and reuse app logic
				effortlessly across your entire application with functional composition.
			</>
		),
		link: "http://localhost:3000/docs/Concepts/optics",
		isOfficial: true,
	},
];

const AdditionalFeatures = [
	{
		title: "Developer Experience",
		icon: "👨‍💻",
		description:
			"Built with developers in mind. Full TypeScript support, excellent IDE integration, comprehensive documentation, and interactive examples.",
		link: "",
	},
	{
		title: "Performance First",
		icon: "🚀",
		description:
			"Optimized for speed and efficiency. Minimal bundle size with maximum functionality. Tree-shakable modules and zero runtime overhead.",
		link: "",
	},
	{
		title: "Community Driven",
		icon: "🤝",
		description:
			"Open source and community-driven. Join thousands of developers building amazing things. Active Discord community and regular updates.",
		link: "",
	},
	{
		title: "Composition API",
		icon: "🧩",
		description:
			"Better logic reuse and organization. Build complex features from simple, reusable pieces. Embrace functional programming principles.",
		link: "",
	},
];

function FeaturesCards() {
	return (
		<section className={styles.featuresSection}>
			<div className='container'>
				<div className={styles.sectionHeader}>
					<Heading
						as='h2'
						className={clsx(styles.sectionHeading, "text--center")}>
						Core Concepts
					</Heading>
					<p className={styles.sectionSubheading}>
						Discover the powerful building blocks that make our platform unique.
						Official libraries come with enhanced support and documentation.
					</p>
				</div>

				<div className={styles.featuresGrid}>
					{FeatureList.map((feature, idx) => (
						<ThreeDCard
							key={idx}
							isOfficial={feature.isOfficial}
							className={styles.featureCard}>
							<Link to={feature.link} className={styles.featureLink}>
								<div className={styles.featureIcon}>
									<span>{feature.icon}</span>
								</div>
								<div className={styles.featureContent}>
									<h3 className={styles.featureTitle}>
										{feature.title}
										{feature.isOfficial && (
											<span className={styles.officialIndicator}>✓</span>
										)}
									</h3>
									<p className={styles.featureDescription}>
										{feature.description}
									</p>
								</div>
								<div className={styles.featureArrow}>→</div>
							</Link>
						</ThreeDCard>
					))}
				</div>
			</div>
		</section>
	);
}

function AdditionalFeaturesSection() {
	return (
		<section className={styles.additionalFeaturesSection}>
			<div className='container'>
				<div className={styles.sectionHeader}>
					<Heading
						as='h2'
						className={clsx(styles.sectionHeading, "text--center")}>
						Why Choose Refract?
					</Heading>
					<p className={styles.sectionSubheading}>
						Built for modern development teams who value quality, performance,
						and developer experience
					</p>
				</div>

				<div className={styles.additionalFeaturesGrid}>
					{AdditionalFeatures.map((feature, idx) => (
						<ThreeDCard key={idx} className={styles.additionalFeatureCard}>
							<div className={styles.additionalFeatureIcon}>{feature.icon}</div>
							<h3 className={styles.additionalFeatureTitle}>{feature.title}</h3>
							<p className={styles.additionalFeatureDescription}>
								{feature.description}
							</p>
						</ThreeDCard>
					))}
				</div>
			</div>
		</section>
	);
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title} - Reactive State Management`}
			description='Build reactive applications with Refract. Modern state management with signals, lenses, and optics. TypeScript-first, performance-optimized, and developer-friendly.'>
			<HomepageHeader />
			<main>
				<FeaturesCards />
				<AdditionalFeaturesSection />
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
