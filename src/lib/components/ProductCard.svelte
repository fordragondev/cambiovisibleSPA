<script lang="ts">
	import type { Product } from '$lib/types/product';
	import { formatPrice } from '$lib/data/products';

	interface Props {
		product: Product;
	}

	let { product }: Props = $props();
</script>

<div class="product-card">
	{#if product.promotion}
		<div class="special-offer">{product.promotion.badge}</div>
	{/if}

	<!-- Product Image with Instagram Link -->
	{#if product.image}
		<a
			href={product.instagramUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="product-image-link"
		>
			<enhanced:img
				src={product.image}
				alt={product.name}
				class="product-image"
			/>
			<div class="instagram-overlay">
				<span class="instagram-icon">📷 Ver en Instagram</span>
			</div>
		</a>
	{/if}

	<!-- Promotion Message -->
	{#if product.promotion?.message}
		<div class="promotion-message">
			<strong>{product.promotion.message}</strong>
			{#if product.promotion.limitedTo}
				<br />
				<span class="promotion-limit">{product.promotion.limitedTo}</span>
			{/if}
		</div>
	{/if}

	<!-- Product Header -->
	<div class="product-header">
		<div class="product-name">
			{product.emoji}
			{product.name}
		</div>

		<div class="product-price-box">
			{#if product.priceVariants}
				<!-- Show price variants -->
				{#each product.priceVariants as variant}
					<div class="price-variant-inline">
						<span class="variant-label">{variant.label}</span>
						<span class="variant-price">{formatPrice(variant.price, product.currency)}</span>
					</div>
				{/each}
			{:else if product.price}
				<span class="product-price">{formatPrice(product.price, product.currency)}</span>
				{#if product.dosage}
					<span class="product-duration">⏱️ {product.dosage}</span>
				{/if}
			{/if}

			{#if product.availability === 'low'}
				<span class="availability-badge low">⚠️ Bajo disponibilidad</span>
			{:else if product.availability === 'coming-soon'}
				<span class="availability-badge coming">📦 Próximamente</span>
			{/if}
		</div>
	</div>

	<!-- Subtitle -->
	{#if product.subtitle}
		<p class="product-subtitle">{product.subtitle}</p>
	{/if}

	<!-- Benefits -->
	<h4 class="benefits-title">🌿 Beneficios:</h4>
	<ul class="benefits-list">
		{#each product.benefits as benefit}
			<li>{benefit}</li>
		{/each}
	</ul>

	<!-- Ideal For -->
	{#if product.idealFor}
		<div class="product-ideal">
			💎 <strong>Ideal para:</strong> {product.idealFor}
		</div>
	{/if}
</div>

<style>
	.product-card {
		background: linear-gradient(135deg, #ffffff 0%, #f9f6f0 100%);
		padding: 1.875rem;
		border-radius: 0.9375rem;
		border: 1px solid #e8dcc8;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		position: relative;
	}

	.product-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 40px rgba(218, 165, 32, 0.25);
	}

	.special-offer {
		position: absolute;
		top: -0.9375rem;
		right: 1.25rem;
		background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
		color: white;
		padding: 0.5rem 1.25rem;
		border-radius: 1.25rem;
		font-size: 0.85em;
		font-weight: 600;
		box-shadow: 0 5px 15px rgba(238, 90, 111, 0.4);
		animation: pulse 2s infinite;
		z-index: 10;
	}

	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.05); }
	}

	.product-image-link {
		display: block;
		position: relative;
		width: 100%;
		aspect-ratio: 4 / 3;
		margin-bottom: 1.25rem;
		border-radius: 0.625rem;
		overflow: hidden;
		cursor: pointer;
		background: #f9f6f0;
	}

	.product-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.product-image-link:hover .product-image {
		transform: scale(1.05);
	}

	.instagram-overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
		padding: 1rem;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.product-image-link:hover .instagram-overlay {
		opacity: 1;
	}

	.instagram-icon {
		color: white;
		font-size: 0.875rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.promotion-message {
		background: linear-gradient(135deg, #ff6b6b15 0%, #ee5a6f15 100%);
		padding: 0.9375rem;
		border-radius: 0.625rem;
		margin: 1.25rem 0;
		border: 2px dashed #ff6b6b;
		color: #ee5a6f;
		font-weight: 500;
	}

	.promotion-limit {
		font-size: 0.9em;
		color: #a0826d;
	}

	.product-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1.25rem;
		flex-wrap: wrap;
		gap: 0.9375rem;
	}

	.product-name {
		font-family: 'Cormorant Garamond', serif;
		font-size: 1.9em;
		color: #8b6f47;
		font-weight: 600;
		flex: 1;
		min-width: 200px;
	}

	.product-price-box {
		text-align: right;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.product-price {
		font-size: 1.6em;
		color: #daa520;
		font-weight: 600;
		display: block;
	}

	.product-duration {
		font-size: 0.9em;
		color: #a0826d;
		display: block;
	}

	.price-variant-inline {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		background: #f9f6f0;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		min-width: 200px;
	}

	.variant-price {
		color: #daa520;
		font-weight: 600;
		font-size: 1.1em;
	}

	.availability-badge {
		font-size: 0.9em;
		font-weight: 600;
		padding: 0.25rem 0.75rem;
		border-radius: 0.5rem;
		display: inline-block;
	}

	.availability-badge.low {
		color: #ee5a6f;
		background: #fff5f5;
	}

	.availability-badge.coming {
		color: #8b6f47;
		background: #f9f6f0;
	}

	.product-subtitle {
		color: #8b6f47;
		margin-bottom: 0.9375rem;
		font-style: italic;
	}

	.benefits-title {
		color: #8b6f47;
		margin-bottom: 0.75rem;
		font-size: 1.1em;
	}

	.benefits-list {
		margin: 1.25rem 0;
		padding-left: 0;
		list-style: none;
	}

	.benefits-list li {
		padding: 0.5rem 0 0.5rem 1.875rem;
		color: #5a4a42;
		line-height: 1.6;
		position: relative;
	}

	.benefits-list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: #daa520;
		font-weight: bold;
		font-size: 1.2em;
	}

	.product-ideal {
		background: #f9f6f0;
		padding: 0.9375rem 1.25rem;
		border-radius: 0.625rem;
		margin-top: 0.9375rem;
		font-size: 0.95em;
		color: #6b5d52;
		border-left: 3px solid #daa520;
	}

	@media (max-width: 768px) {
		.product-card {
			padding: 1.25rem;
		}

		.product-name {
			font-size: 1.5em;
		}

		.product-price {
			font-size: 1.3em;
		}

		.price-variant-inline {
			min-width: 100%;
		}

		.product-header {
			flex-direction: column;
		}

		.product-price-box {
			width: 100%;
			text-align: left;
		}
	}
</style>
