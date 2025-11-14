<script lang="ts">
	import { contactInfo } from '$lib/data/products';
</script>

<section class="hero">
	<div class="hero-content">
		<div class="decorative-icon">✨</div>
		<h1 class="logo">{contactInfo.businessName}</h1>
		<p class="subtitle">by {contactInfo.name}</p>
		<h2 class="hero-title">Colección Premium de Péptidos 2025</h2>
		<p class="tagline">Línea exclusiva de bienestar, regeneración y belleza desde adentro.</p>
		<div class="decorative-icon">💎</div>

		<div class="hero-cta">
			<a href="#productos" class="btn-primary">Explorar Productos</a>
			<a href="#contacto" class="btn-secondary">Contáctame</a>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<section class="intro-section">
	<h2 class="section-title">🌿 Tu cambio visible comienza desde adentro</h2>
	<div class="intro-text">
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
	.hero {
		background: linear-gradient(135deg, #f5f0e8 0%, #d4c4a8 100%);
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 3.75rem 1.25rem;
		position: relative;
		overflow: hidden;
	}

	.hero::before {
		content: '';
		position: absolute;
		top: -50%;
		right: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle, rgba(218, 165, 32, 0.1) 0%, transparent 70%);
	}

	.hero-content {
		text-align: center;
		position: relative;
		z-index: 1;
		max-width: 800px;
	}

	.decorative-icon {
		font-size: 4em;
		color: rgba(218, 165, 32, 0.3);
		margin: 2.5rem 0;
	}

	.logo {
		font-family: 'Cormorant Garamond', serif;
		font-size: 3.5em;
		font-weight: 300;
		color: #8b6f47;
		margin-bottom: 1.25rem;
		letter-spacing: 3px;
	}

	.subtitle {
		font-size: 1.3em;
		color: #a0826d;
		margin-bottom: 2.5rem;
		font-weight: 300;
		letter-spacing: 2px;
	}

	.hero-title {
		font-family: 'Cormorant Garamond', serif;
		font-size: 2em;
		color: #8b6f47;
		margin: 1.875rem 0;
	}

	.tagline {
		font-size: 1.1em;
		color: #6b5d52;
		line-height: 1.8;
		max-width: 600px;
		margin: 0 auto 2.5rem;
	}

	.hero-cta {
		display: flex;
		gap: 1.25rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 2.5rem;
	}

	.btn-primary,
	.btn-secondary {
		padding: 0.9375rem 2.5rem;
		border-radius: 1.5625rem;
		font-size: 1.05em;
		font-weight: 500;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	}

	.btn-primary {
		background: linear-gradient(135deg, #daa520 0%, #b8860b 100%);
		color: white;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(218, 165, 32, 0.4);
	}

	.btn-secondary {
		background: white;
		color: #8b6f47;
		border: 2px solid #daa520;
	}

	.btn-secondary:hover {
		background: #faf8f5;
		transform: translateY(-2px);
	}

	/* Introduction Section */
	.intro-section {
		background: #fefdfb;
		padding: 5rem 1.25rem;
	}

	.section-title {
		font-family: 'Cormorant Garamond', serif;
		font-size: 2.5em;
		color: #8b6f47;
		margin-bottom: 1.875rem;
		text-align: center;
		position: relative;
		padding-bottom: 1.25rem;
	}

	.section-title::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100px;
		height: 2px;
		background: linear-gradient(to right, transparent, #daa520, transparent);
	}

	.intro-text {
		font-size: 1.05em;
		line-height: 1.9;
		color: #5a4a42;
		text-align: center;
		max-width: 700px;
		margin: 0 auto;
	}

	.intro-paragraph {
		margin-bottom: 1.5625rem;
	}

	.intro-text strong {
		color: #8b6f47;
		font-weight: 500;
	}

	.highlight-box {
		background: linear-gradient(135deg, #f9f6f0 0%, #f0e8d8 100%);
		padding: 1.875rem;
		border-radius: 0.9375rem;
		margin-top: 2.5rem;
		border-left: 4px solid #daa520;
	}

	.highlight-box p {
		line-height: 1.9;
		margin: 0;
	}

	@media (max-width: 768px) {
		.logo {
			font-size: 2.5em;
		}

		.subtitle {
			font-size: 1.1em;
		}

		.hero-title {
			font-size: 1.5em;
		}

		.tagline {
			font-size: 1em;
		}

		.section-title {
			font-size: 2em;
		}

		.hero-cta {
			flex-direction: column;
			align-items: stretch;
		}

		.btn-primary,
		.btn-secondary {
			width: 100%;
		}
	}
</style>
