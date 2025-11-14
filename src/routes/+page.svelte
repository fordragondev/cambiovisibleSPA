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
</script>

<svelte:head>
	<title>Cambiovisiblec - Colección Premium de Péptidos 2025</title>
	<meta
		name="description"
		content="Descubre nuestra línea exclusiva de péptidos premium, diseñados para equilibrar, regenerar y transformar tu bienestar desde adentro. Pureza del 99.9%."
	/>
	<meta name="keywords" content="péptidos, bienestar, regeneración, belleza, salud, Colombia" />
	<meta property="og:title" content="Cambiovisiblec - Colección Premium de Péptidos 2025" />
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
	{#each categories as category}
		{#if category.products.length > 0}
			<div class="category-section">
				<h2 class="category-title">
					{#if category.id === 'weight-control'}
						💉
					{:else if category.id === 'beauty-rejuvenation'}
						✨
					{:else}
						⚡
					{/if}
					{categoryNames[category.id]}
				</h2>

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

<style>
	.products-section {
		background: #fefdfb;
		padding: 3.125rem 1.25rem;
	}

	.category-section {
		max-width: 1200px;
		margin: 0 auto 5rem auto;
	}

	.category-section:last-child {
		margin-bottom: 0;
	}

	.category-title {
		font-family: 'Cormorant Garamond', serif;
		font-size: 2.5em;
		color: var(--color-brown);
		margin-bottom: 2.5rem;
		text-align: center;
		position: relative;
		padding-bottom: 1.25rem;
	}

	.category-title::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100px;
		height: 2px;
		background: linear-gradient(to right, transparent, var(--color-primary), transparent);
	}

	.products-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	@media (max-width: 768px) {
		.category-title {
			font-size: 2em;
		}

		.products-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
