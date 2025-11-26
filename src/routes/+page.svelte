<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import FAQSection from '$lib/components/FAQSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import { products, getProductsByCategory } from '$lib/data/products';
	import { categoryNames } from '$lib/types/product';
	import type { ProductCategory } from '$lib/types/product';

	// Group products by category
	const weightControlProducts = getProductsByCategory('weight-control');
	const beautyProducts = getProductsByCategory('beauty-rejuvenation');
	const metabolismProducts = getProductsByCategory('metabolism-energy');

	const categories: Array<{ id: ProductCategory; products: typeof products }> = [
		{ id: 'weight-control', products: weightControlProducts },
		{ id: 'beauty-rejuvenation', products: beautyProducts },
		{ id: 'metabolism-energy', products: metabolismProducts }
	];

	// Back to Top button state
	let showBackToTop = $state(false);
	const scrollThreshold = 800; // Show button after scrolling past hero section (approx 100vh)

	// Handle scroll to detect when to show the button
	$effect(() => {
		const handleScroll = () => {
			showBackToTop = window.scrollY > scrollThreshold;
		};

		// Add scroll listener
		window.addEventListener('scroll', handleScroll);

		// Cleanup on unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	// Smooth scroll to top
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<svelte:head>
	<title>Cambiovisible - Colección Premium de Péptidos 2025</title>
	<meta
		name="description"
		content="Descubre nuestra línea exclusiva de péptidos premium, diseñados para equilibrar, regenerar y transformar tu bienestar desde adentro. Pureza del 99.9%."
	/>
	<meta name="keywords" content="péptidos, bienestar, regeneración, belleza, salud, Colombia" />
	<meta property="og:title" content="Cambiovisible - Colección Premium de Péptidos 2025" />
	<meta
		property="og:description"
		content="Línea exclusiva de bienestar, regeneración y belleza desde adentro."
	/>
</svelte:head>

<div id="inicio">
	<Navigation />
</div>

<Hero />

<!-- Products Section -->
<section class="products-section" id="productos">
	{#each categories as category, index}
		{#if category.products.length > 0}
			<div class="category-section" data-category-index={index}>
				<div class="category-header">
					<div class="category-icon">
						{#if category.id === 'weight-control'}
							💉
						{:else if category.id === 'beauty-rejuvenation'}
							✨
						{:else}
							⚡
						{/if}
					</div>
					<h2 class="category-title">
						{categoryNames[category.id]}
					</h2>
					<div class="category-description">
						{#if category.id === 'weight-control'}
							Transforma tu metabolismo y alcanza tus metas
						{:else if category.id === 'beauty-rejuvenation'}
							Regenera tu belleza desde adentro
						{:else}
							Activa tu energía y bienestar
						{/if}
					</div>
				</div>

				<div class="products-grid">
					{#each category.products as product}
						<ProductCard {product} />
					{/each}
				</div>
			</div>
		{/if}
	{/each}
</section>

<FAQSection />
<ContactSection />

<!-- Back to Top Button -->
{#if showBackToTop}
	<button
		onclick={scrollToTop}
		class="back-to-top-button"
		aria-label="Volver arriba"
		type="button"
	>
		<svg
			class="back-to-top-icon"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 10l7-7m0 0l7 7m-7-7v18"
			/>
		</svg>
	</button>
{/if}

<style>
	.products-section {
		padding: 0;
	}

	.category-section {
		padding: 5rem 1.5rem;
		position: relative;
	}

	/* Alternating background colors for DRAMATIC visual distinction */
	.category-section[data-category-index='0'] {
		background: var(--color-beige-light);
		border-bottom: 4px solid var(--color-primary);
	}

	.category-section[data-category-index='1'] {
		background: var(--color-beige);
		box-shadow:
			inset 0 2px 0 color-mix(in srgb, var(--color-primary) 20%, transparent),
			inset 0 -2px 0 color-mix(in srgb, var(--color-primary) 20%, transparent),
			0 8px 24px color-mix(in srgb, var(--color-primary) 20%, transparent);
		border-top: 4px solid var(--color-primary);
		border-bottom: 4px solid var(--color-primary);
	}

	.category-section[data-category-index='2'] {
		background: var(--color-beige-dark);
		border-top: 4px solid var(--color-primary);
		box-shadow: 0 -4px 16px color-mix(in srgb, var(--color-primary) 15%, transparent);
	}

	/* Category Header Container */
	.category-header {
		max-width: 1200px;
		margin: 0 auto 4rem;
		text-align: center;
		position: relative;
	}

	/* Decorative Icon */
	.category-icon {
		font-size: 3rem;
		line-height: 1;
		margin-bottom: 1rem;
		display: inline-block;
		padding: 0.75rem;
		border-radius: 50%;
		background: linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 15%, transparent), color-mix(in srgb, var(--color-primary) 8%, transparent));
		box-shadow: 0 4px 12px color-mix(in srgb, var(--color-primary) 20%, transparent);
		border: 2px solid color-mix(in srgb, var(--color-primary) 30%, transparent);
	}

	/* Enhanced Category Title */
	.category-title {
		font-family: var(--font-serif);
		font-size: var(--font-size-3xl);
		font-weight: var(--font-weight-semibold);
		color: var(--color-brown);
		letter-spacing: var(--tracking-wide);
		line-height: var(--leading-tight);
		margin-bottom: 1rem;
		text-align: center;
		position: relative;
	}

	/* Category Description */
	.category-description {
		font-family: var(--font-sans);
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-normal);
		color: var(--color-text);
		font-style: italic;
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
		line-height: var(--leading-relaxed);
	}

	/* Decorative line under header */
	.category-header::after {
		content: '';
		position: absolute;
		bottom: -2rem;
		left: 50%;
		transform: translateX(-50%);
		width: 150px;
		height: 2px;
		background: linear-gradient(to right, transparent, var(--color-primary), transparent);
	}

	/* Products Grid */
	.products-grid {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	/* Back to Top Button */
	.back-to-top-button {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		width: 48px;
		height: 48px;
		background-color: var(--color-primary);
		color: var(--color-brown);
		border: none;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 10px 25px -5px color-mix(in srgb, var(--color-primary) 40%, transparent),
			0 8px 10px -6px color-mix(in srgb, var(--color-primary) 30%, transparent);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		z-index: 1000;
		animation: fadeIn 0.3s ease-out;
	}

	.back-to-top-icon {
		width: 24px;
		height: 24px;
	}

	.back-to-top-button:hover {
		background-color: var(--color-primary-dark);
		transform: translateY(-4px) scale(1.05);
		box-shadow: 0 15px 35px -5px color-mix(in srgb, var(--color-primary) 50%, transparent),
			0 10px 15px -6px color-mix(in srgb, var(--color-primary) 40%, transparent);
	}

	.back-to-top-button:active {
		transform: translateY(-2px) scale(1.02);
	}

	.back-to-top-button:focus {
		outline: 3px solid var(--color-primary);
		outline-offset: 4px;
	}

	.back-to-top-button:focus:not(:focus-visible) {
		outline: none;
	}

	.back-to-top-button:focus-visible {
		outline: 3px solid var(--color-primary);
		outline-offset: 4px;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px) scale(0.9);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (max-width: 768px) {
		.category-section {
			padding: 3.5rem 1.25rem;
		}

		.category-header {
			margin-bottom: 3rem;
		}

		.category-icon {
			font-size: 2.5rem;
			padding: 0.5rem;
		}

		.category-title {
			font-size: var(--font-size-2xl);
		}

		.category-description {
			font-size: var(--font-size-sm);
			padding: 0 1rem;
		}

		.category-header::after {
			bottom: -1.5rem;
			width: 100px;
		}

		.products-grid {
			grid-template-columns: 1fr;
		}

		.back-to-top-button {
			bottom: 1rem;
			right: 1rem;
			width: 44px;
			height: 44px;
		}

		.back-to-top-icon {
			width: 20px;
			height: 20px;
		}
	}
</style>
