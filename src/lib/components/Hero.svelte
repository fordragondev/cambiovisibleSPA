<script lang="ts">
	import { contactInfo } from '$lib/data/products';
</script>

<section class="hero">
	<div class="hero-content">
		<div class="decorative-icon">✨</div>
		<h1 class="hero-logo">{contactInfo.businessName}</h1>
		<p class="hero-subtitle">by {contactInfo.name}</p>
		<h2 class="section-title">Colección Premium de Péptidos 2025</h2>
		<p class="hero-tagline">Línea exclusiva de bienestar, regeneración y belleza desde adentro.</p>

		<div class="hero-cta">
			<a href="#productos" class="btn-primary">Explorar Productos</a>
			<a href="#contacto" class="btn-secondary">Contáctame</a>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<section class="intro-section">
	<h2 class="section-title">🌿 Tu cambio visible comienza desde adentro</h2>
	<div class="intro-text-wrapper">
		<p class="intro-paragraph">
			<strong>Bienvenida a la Colección Premium de Péptidos 2025 – {contactInfo.businessName}.</strong>
		</p>
		<p class="intro-paragraph">
			Descubre nuestra línea de péptidos premium, diseñados para equilibrar, regenerar y
			transformar tu bienestar desde adentro.
		</p>
		<div class="highlight-box">
			<p>
				Cada fórmula ha sido desarrollada con <strong>pureza del 99.9%</strong> y el respaldo de
				laboratorios certificados 🇺🇸, garantizando resultados visibles, seguros y sostenibles.
			</p>
		</div>
	</div>
</section>

<style>
	/* Hero Section - Layout & Positioning Only */
	.hero {
		background: linear-gradient(135deg, var(--color-beige-light) 0%, var(--color-beige-dark) 100%);
		min-height: auto;
		max-height: 85vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 3rem 1.25rem 2.5rem;
		position: relative;
		overflow: hidden;
	}

	/* Desktop: more compact but still prominent */
	@media (min-width: 769px) {
		.hero {
			max-height: 75vh;
			padding: 4rem 1.25rem 3.5rem;
		}
	}

	.hero::before {
		content: '';
		position: absolute;
		top: -50%;
		right: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle, color-mix(in srgb, var(--color-primary) 10%, transparent) 0%, transparent 70%);
	}

	.hero-content {
		position: relative;
		z-index: 1;
		max-width: 800px;
	}

	.decorative-icon {
		font-size: 4em;
		color: color-mix(in srgb, var(--color-primary) 30%, transparent);
		margin: 2.5rem 0;
		text-align: center;
	}

	/* CTA Button Layout */
	.hero-cta {
		display: flex;
		gap: 1.25rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 2.5rem;
	}

	.btn-primary,
	.btn-secondary {
		font-family: var(--font-sans);
		padding: 1.125rem 2.5rem;
		border-radius: 1.5625rem;
		font-size: 1.05em;
		font-weight: var(--font-weight-semibold);
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		letter-spacing: var(--tracking-wide);
		text-transform: uppercase;
		min-height: 50px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.btn-primary {
		background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
		color: white;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px color-mix(in srgb, var(--color-primary) 40%, transparent);
	}

	.btn-secondary {
		background: white;
		color: var(--color-brown);
		border: 2px solid var(--color-primary);
	}

	.btn-secondary:hover {
		background: #faf8f5;
		transform: translateY(-2px);
	}

	/* Introduction Section - Layout Only */
	.intro-section {
		background: #fefdfb;
		padding: 5rem 1.25rem;
	}

	/* Mobile Responsive Layout */
	@media (max-width: 768px) {
		.hero-cta {
			flex-direction: column;
			align-items: stretch;
		}

		.btn-primary {
			width: 100%;
			min-height: 54px;
		}

		.btn-secondary {
			width: 100%;
			min-height: 42px;
			padding: 0.75rem 1.5rem;
			font-size: 0.9em;
			opacity: 0.85;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		}
	}
</style>
