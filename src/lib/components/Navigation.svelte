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
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style="width: 1.25rem; height: 1.25rem;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
				WhatsApp
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
		font-family: var(--font-serif);
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-semibold);
		color: var(--color-brown);
		text-decoration: none;
		letter-spacing: var(--tracking-wide);
		transition: color 0.3s ease;
	}

	.nav-brand:hover {
		color: var(--color-primary);
	}

	.mobile-menu-btn {
		display: none;
		background: none;
		border: none;
		font-size: 1.5em;
		color: var(--color-brown);
		cursor: pointer;
		padding: 0.75rem;
		min-height: 44px;
		min-width: 44px;
		transition: color 0.3s ease;
	}

	.mobile-menu-btn:hover {
		color: var(--color-primary);
	}

	.nav-links {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.nav-link {
		color: var(--color-text-dark);
		text-decoration: none;
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--tracking-wide);
		transition: color 0.3s ease;
		padding: 0.5rem 0.75rem;
		position: relative;
		min-height: 44px;
		display: inline-flex;
		align-items: center;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--color-primary);
		transition: width 0.3s ease;
	}

	.nav-link:hover {
		color: var(--color-brown);
	}

	.nav-link:hover::after {
		width: 100%;
	}

	.nav-cta {
		background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
		color: white !important;
		padding: 0.75rem 1.5rem;
		border-radius: 1.25rem;
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--tracking-wide);
		min-height: 48px;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		box-shadow: 0 3px 10px color-mix(in srgb, var(--color-primary) 30%, transparent);
	}

	.nav-cta::after {
		display: none;
	}

	.nav-cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 5px 15px color-mix(in srgb, var(--color-primary) 40%, transparent);
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
			padding: 1.25rem 0.75rem;
			border-bottom: 1px solid var(--color-beige);
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
