<script lang="ts">
	import { contactInfo } from '$lib/data/products';

	// Generate WhatsApp QR code URL using a QR code API
	const whatsappNumber = contactInfo.whatsapp.replace(/\+/g, '').replace(/\s/g, '');
	const whatsappUrl = `https://wa.me/${whatsappNumber}`;

	// Using a free QR code API service
	const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(whatsappUrl)}`;
</script>

<section class="contact-section" id="contacto">
	<div class="contact-container">
		<div class="closing-message">✨ "Transforma tu bienestar<br />desde adentro."</div>

		<p class="contact-description">
			📲 Contáctame directamente escaneando este código<br />
			o escríbeme a WhatsApp para más información y pedidos
		</p>

		<div class="qr-code-container">
			<img src={qrCodeUrl} alt="Código QR WhatsApp {contactInfo.name}" class="qr-code" />
			<p class="qr-label">Escanea para contactar por WhatsApp</p>
		</div>

		<div class="contact-links">
			<a
				href={whatsappUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="contact-btn whatsapp"
			>
				<svg class="btn-icon" fill="currentColor" viewBox="0 0 24 24">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
				</svg>
				Abrir WhatsApp
			</a>
			<a
				href={contactInfo.instagram}
				target="_blank"
				rel="noopener noreferrer"
				class="contact-btn instagram"
			>
				<svg class="btn-icon" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
				</svg>
				Sígueme en Instagram
			</a>
		</div>

		<div class="contact-info-grid">
			<div class="info-card">
				<div class="info-icon">👤</div>
				<div class="info-content">
					<strong>{contactInfo.name}</strong>
					<p>Especialista en Bienestar</p>
				</div>
			</div>
			<div class="info-card">
				<div class="info-icon">📱</div>
				<div class="info-content">
					<strong>WhatsApp</strong>
					<p>{contactInfo.whatsapp}</p>
				</div>
			</div>
		</div>

		<p class="footer-note">
			✨ Péptidos premium certificados 🇺🇸 con pureza del 99.9%<br />
			Asesoría personalizada para alcanzar tus objetivos
		</p>
	</div>
</section>

<style>
	.contact-section {
		background: linear-gradient(135deg, var(--color-beige-light) 0%, var(--color-beige-dark) 100%);
		padding: 5rem 1.25rem;
		text-align: center;
	}

	.contact-container {
		max-width: 900px;
		margin: 0 auto;
	}

	.closing-message {
		font-family: var(--font-serif);
		font-size: 2.8em;
		font-weight: var(--font-weight-normal);
		color: var(--color-brown);
		margin-bottom: 3.125rem;
		font-style: italic;
		line-height: var(--leading-snug);
	}

	.contact-description {
		font-size: var(--font-size-lg);
		color: var(--color-text-dark);
		margin-bottom: 2.5rem;
		line-height: var(--leading-relaxed);
		font-weight: var(--font-weight-normal);
	}

	.qr-code-container {
		margin: 2.5rem auto;
		max-width: 300px;
	}

	.qr-code {
		width: 100%;
		max-width: 280px;
		border-radius: 0.9375rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
		background: white;
		padding: 1.25rem;
	}

	.qr-label {
		margin-top: 1rem;
		color: var(--color-brown);
		font-weight: var(--font-weight-medium);
		font-size: var(--font-size-base);
		letter-spacing: var(--tracking-wide);
	}

	.contact-links {
		display: flex;
		gap: 1.25rem;
		justify-content: center;
		flex-wrap: wrap;
		margin: 2.5rem 0;
	}

	.contact-btn {
		padding: 1.125rem 2rem;
		border-radius: 1.5625rem;
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--tracking-wide);
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.625rem;
		min-height: 52px;
	}

	.btn-icon {
		width: 1.25rem;
		height: 1.25rem;
	}

	.contact-btn.whatsapp {
		background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
		color: white;
	}

	.contact-btn.instagram {
		background: linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #8134af 100%);
		color: white;
	}

	.contact-btn:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
	}

	.contact-info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.25rem;
		margin: 3.125rem 0;
	}

	.info-card {
		background: rgba(255, 255, 255, 0.9);
		padding: 1.5rem;
		border-radius: 0.9375rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	}

	.info-icon {
		font-size: 2.5em;
		opacity: 0.8;
	}

	.info-content {
		text-align: left;
		flex: 1;
	}

	.info-content strong {
		color: var(--color-brown);
		display: block;
		margin-bottom: 0.25rem;
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-semibold);
	}

	.info-content p {
		color: var(--color-text-dark);
		margin: 0;
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-normal);
	}

	.footer-note {
		margin-top: 3.125rem;
		font-size: var(--font-size-lg);
		color: var(--color-brown-light);
		line-height: var(--leading-relaxed);
		font-weight: var(--font-weight-normal);
	}

	@media (max-width: 768px) {
		.closing-message {
			font-size: var(--font-size-2xl);
		}

		.contact-description {
			font-size: var(--font-size-base);
		}

		.contact-links {
			flex-direction: column;
			align-items: stretch;
		}

		.contact-btn {
			width: 100%;
			min-height: 56px;
		}

		.contact-info-grid {
			grid-template-columns: 1fr;
		}

		.info-card {
			flex-direction: column;
			text-align: center;
		}

		.info-content {
			text-align: center;
		}
	}
</style>
