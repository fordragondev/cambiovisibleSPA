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
			aria-label="Ver {product.name} en Instagram"
		>
			<img
				src={product.image}
				alt={product.name}
				class="product-image"
				loading="lazy"
			/>
			<div class="instagram-badge">
				<svg class="instagram-icon" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
				</svg>
			</div>
		</a>
	{/if}

	<!-- Product Header -->
	<div class="product-header">
		<h3 class="product-name">
			<span class="product-emoji">{product.emoji}</span>
			{product.name}
		</h3>
	</div>

	<!-- Dedicated Pricing Section -->
	<div class="pricing-section">
		<div class="pricing-header">
			<span class="pricing-label">💰 Precio</span>
			{#if product.availability === 'low'}
				<span class="availability-badge low">⚠️ Bajo disponibilidad</span>
			{:else if product.availability === 'coming-soon'}
				<span class="availability-badge coming">📦 Próximamente</span>
			{/if}
		</div>

		<div class="pricing-content">
			{#if product.priceVariants}
				<!-- Multiple price variants -->
				<div class="price-variants-grid">
					{#each product.priceVariants as variant}
						<div class="price-variant-card">
							<span class="variant-label">{variant.label}</span>
							<span class="variant-price">{formatPrice(variant.price, product.currency)}</span>
						</div>
					{/each}
				</div>
			{:else if product.price}
				<!-- Single price -->
				<div class="price-variant-card">
					<span class="variant-label">
						{#if product.dosage}
							⏱️ {product.dosage}
						{:else}
							Precio
						{/if}
					</span>
					<span class="variant-price">{formatPrice(product.price, product.currency)}</span>
				</div>
			{/if}
		</div>
	</div>

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
		background: linear-gradient(135deg, var(--color-beige-light) 0%, var(--color-beige) 100%);
		padding: 1.875rem;
		border-radius: 0.9375rem;
		border: 1px solid var(--color-beige);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		position: relative;
	}

	.product-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 40px color-mix(in srgb, var(--color-primary) 25%, transparent);
	}

	.special-offer {
		position: absolute;
		top: -0.9375rem;
		right: 1.25rem;
		background: linear-gradient(135deg, var(--color-promo) 0%, var(--color-promo-dark) 100%);
		color: white;
		padding: 0.5rem 1.25rem;
		border-radius: 1.25rem;
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--tracking-wide);
		box-shadow: 0 5px 15px color-mix(in srgb, var(--color-promo-dark) 40%, transparent);
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
		background: var(--color-beige-light);
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

	.instagram-badge {
		position: absolute;
		bottom: 0.75rem;
		right: 0.75rem;
		background: var(--color-beige-light);
		border-radius: 50%;
		padding: 0.625rem;
		box-shadow: 0 2px 8px color-mix(in srgb, var(--color-brown) 20%, transparent);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 5;
		border: 2px solid var(--color-primary);
	}

	.product-image-link:hover .instagram-badge {
		transform: scale(1.1);
		box-shadow: 0 4px 12px color-mix(in srgb, var(--color-brown) 30%, transparent);
	}

	.instagram-icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-primary);
	}

	.promotion-message {
		background: linear-gradient(135deg, color-mix(in srgb, var(--color-promo) 8%, transparent) 0%, color-mix(in srgb, var(--color-promo-dark) 8%, transparent) 100%);
		padding: 1rem 1.25rem;
		border-radius: 0.625rem;
		margin: 1.25rem 0;
		border: 2px dashed var(--color-promo);
		color: var(--color-promo-dark);
		font-family: var(--font-sans);
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-semibold);
		line-height: var(--leading-relaxed);
	}

	.promotion-limit {
		font-size: var(--font-size-sm);
		color: var(--color-brown-light);
		font-weight: var(--font-weight-normal);
	}

	.product-header {
		margin-bottom: 1rem;
	}

	.product-name {
		font-family: var(--font-serif);
		font-size: 2.2em;
		color: var(--color-brown);
		font-weight: var(--font-weight-bold);
		line-height: var(--leading-tight);
		letter-spacing: var(--tracking-tight);
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.product-emoji {
		font-size: 1.1em;
		flex-shrink: 0;
	}

	/* Dedicated Pricing Section */
	.pricing-section {
		background: linear-gradient(135deg, var(--color-beige-light) 0%, var(--color-beige) 100%);
		border: 2px solid var(--color-primary);
		border-radius: 0.75rem;
		padding: 1.25rem;
		margin: 1.25rem 0;
		box-shadow: 0 4px 12px color-mix(in srgb, var(--color-primary) 15%, transparent);
		transition: box-shadow 0.3s ease, transform 0.3s ease;
	}

	.pricing-section:hover {
		box-shadow: 0 6px 20px color-mix(in srgb, var(--color-primary) 25%, transparent);
		transform: translateY(-2px);
	}

	.pricing-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}

	.pricing-label {
		font-family: var(--font-sans);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wider);
		color: var(--color-brown);
	}

	/* Single Price Display */
	.price-display {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
		text-align: center;
	}

	.product-price {
		font-family: var(--font-sans);
		font-size: 2.25em;
		color: var(--color-primary);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--tracking-tight);
		line-height: 1;
		text-shadow: 0 2px 4px color-mix(in srgb, var(--color-primary) 20%, transparent);
	}

	.product-dosage {
		font-size: var(--font-size-base);
		color: var(--color-brown);
		font-weight: var(--font-weight-medium);
	}

	/* Price Variants Grid */
	.price-variants-grid {
		display: grid;
		gap: 0.875rem;
		grid-template-columns: 1fr;
	}

	.price-variant-card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		background: var(--color-beige-light);
		padding: 0.875rem 1.125rem;
		border-radius: 0.625rem;
		border: 1px solid var(--color-beige);
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}

	.price-variant-card:hover {
		background: var(--color-beige);
		border-color: var(--color-primary);
		box-shadow: 0 2px 8px color-mix(in srgb, var(--color-primary) 20%, transparent);
	}

	.variant-label {
		font-family: var(--font-sans);
		font-size: var(--font-size-base);
		color: var(--color-text-dark);
		font-weight: var(--font-weight-semibold);
		flex-shrink: 0;
	}

	.variant-price {
		font-family: var(--font-sans);
		color: var(--color-primary);
		font-weight: var(--font-weight-bold);
		font-size: 1.5em;
		letter-spacing: var(--tracking-tight);
		white-space: nowrap;
		text-align: right;
	}

	.availability-badge {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--tracking-wide);
		padding: 0.375rem 0.875rem;
		border-radius: 0.5rem;
		display: inline-block;
	}

	.availability-badge.low {
		color: var(--color-promo-dark);
		background: color-mix(in srgb, var(--color-promo) 10%, var(--color-beige-light));
		border: 1px solid color-mix(in srgb, var(--color-promo) 30%, transparent);
	}

	.availability-badge.coming {
		color: var(--color-brown);
		background: var(--color-beige-light);
	}

	.product-subtitle {
		color: var(--color-text-dark);
		margin-bottom: 1rem;
		font-family: var(--font-serif);
		font-style: italic;
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-normal);
		letter-spacing: var(--tracking-wide);
		line-height: var(--leading-relaxed);
	}

	.benefits-title {
		font-family: var(--font-sans);
		color: var(--color-brown);
		margin-bottom: 0.875rem;
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wider);
	}

	.benefits-list {
		margin: 1.25rem 0;
		padding-left: 0;
		list-style: none;
	}

	.benefits-list li {
		padding: 0.625rem 0 0.625rem 1.875rem;
		color: var(--color-text);
		font-family: var(--font-sans);
		font-size: var(--font-size-base);
		line-height: var(--leading-relaxed);
		position: relative;
		font-weight: var(--font-weight-normal);
	}

	.benefits-list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--color-primary);
		font-weight: bold;
		font-size: 1.2em;
	}

	.product-ideal {
		background: var(--color-beige-light);
		padding: 1rem 1.25rem;
		border-radius: 0.625rem;
		margin-top: 1rem;
		font-family: var(--font-sans);
		font-size: var(--font-size-base);
		color: var(--color-text);
		line-height: var(--leading-relaxed);
		border-left: 3px solid var(--color-primary);
		font-weight: var(--font-weight-medium);
	}

	.product-ideal strong {
		color: var(--color-brown);
		font-weight: var(--font-weight-bold);
	}

	@media (max-width: 768px) {
		.product-card {
			padding: 1.25rem;
		}

		.product-name {
			font-size: 1.75em;
			gap: 0.375rem;
		}

		.product-emoji {
			font-size: 1em;
		}

		.product-subtitle {
			font-size: var(--font-size-base);
		}

		/* Mobile pricing adjustments */
		.pricing-section {
			padding: 1rem;
			margin: 1rem 0;
		}

		.pricing-header {
			gap: 0.5rem;
		}

		.pricing-label {
			font-size: 0.75rem;
		}

		.product-price {
			font-size: 1.875em;
		}

		.product-dosage {
			font-size: var(--font-size-sm);
		}

		.variant-price {
			font-size: 1.25em;
		}

		.price-variant-card {
			padding: 0.75rem 1rem;
			gap: 0.75rem;
		}

		.variant-label {
			font-size: var(--font-size-sm);
		}

		.availability-badge {
			font-size: 0.6875rem;
			padding: 0.25rem 0.625rem;
		}
	}

	/* Extra small screens - Stack variant cards if needed */
	@media (max-width: 400px) {
		.product-price {
			font-size: 1.625em;
		}

		.variant-price {
			font-size: 1.125em;
		}

		.pricing-section {
			padding: 0.875rem;
		}
	}
</style>
