<script lang="ts">
	import { contactInfo } from '$lib/data/products';

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	const navLinks = [
		{ href: '#inicio', label: 'Inicio' },
		{ href: '#productos', label: 'Productos' },
		{ href: '#faq', label: 'FAQ' },
		{ href: '#contacto', label: 'Contacto' }
	];
</script>

<nav class="navbar">
	<div class="nav-container">
		<a href="#inicio" class="nav-brand" onclick={closeMobileMenu}>
			{contactInfo.businessName}
		</a>

		<button
			class="mobile-menu-btn"
			onclick={toggleMobileMenu}
			aria-label="Toggle menu"
			aria-expanded={mobileMenuOpen}
		>
			{#if mobileMenuOpen}
				✕
			{:else}
				☰
			{/if}
		</button>

		<div class="nav-links" class:open={mobileMenuOpen}>
			{#each navLinks as link}
				<a href={link.href} class="nav-link" onclick={closeMobileMenu}>
					{link.label}
				</a>
			{/each}
			<a
				href={`https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`}
				target="_blank"
				rel="noopener noreferrer"
				class="nav-link nav-cta"
				onclick={closeMobileMenu}
			>
				📱 WhatsApp
			</a>
		</div>
	</div>
</nav>

<style>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 1000;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 1.25rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-brand {
		font-family: 'Cormorant Garamond', serif;
		font-size: 1.5em;
		font-weight: 600;
		color: #8b6f47;
		text-decoration: none;
		letter-spacing: 1px;
		transition: color 0.3s ease;
	}

	.nav-brand:hover {
		color: #daa520;
	}

	.mobile-menu-btn {
		display: none;
		background: none;
		border: none;
		font-size: 1.5em;
		color: #8b6f47;
		cursor: pointer;
		padding: 0.5rem;
		transition: color 0.3s ease;
	}

	.mobile-menu-btn:hover {
		color: #daa520;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.nav-link {
		color: #6b5d52;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.3s ease;
		padding: 0.5rem 0;
		position: relative;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: #daa520;
		transition: width 0.3s ease;
	}

	.nav-link:hover {
		color: #8b6f47;
	}

	.nav-link:hover::after {
		width: 100%;
	}

	.nav-cta {
		background: linear-gradient(135deg, #daa520 0%, #b8860b 100%);
		color: white !important;
		padding: 0.625rem 1.25rem;
		border-radius: 1.25rem;
		font-weight: 500;
		box-shadow: 0 3px 10px rgba(218, 165, 32, 0.3);
	}

	.nav-cta::after {
		display: none;
	}

	.nav-cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(218, 165, 32, 0.4);
	}

	@media (max-width: 768px) {
		.mobile-menu-btn {
			display: block;
		}

		.nav-links {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: rgba(255, 255, 255, 0.98);
			flex-direction: column;
			padding: 1.25rem;
			gap: 0;
			box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
			max-height: 0;
			overflow: hidden;
			opacity: 0;
			transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
		}

		.nav-links.open {
			max-height: 500px;
			opacity: 1;
			padding: 1.25rem;
		}

		.nav-link {
			width: 100%;
			padding: 0.9375rem 0;
			border-bottom: 1px solid #f0e8d8;
		}

		.nav-link:last-child {
			border-bottom: none;
		}

		.nav-cta {
			margin-top: 0.625rem;
			text-align: center;
			display: block;
		}
	}
</style>
