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
				📱 Abrir WhatsApp
			</a>
			<a
				href={contactInfo.instagram}
				target="_blank"
				rel="noopener noreferrer"
				class="contact-btn instagram"
			>
				📷 Sígueme en Instagram
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
		font-family: 'Cormorant Garamond', serif;
		font-size: 2.8em;
		color: var(--color-brown);
		margin-bottom: 3.125rem;
		font-style: italic;
		line-height: 1.4;
	}

	.contact-description {
		font-size: 1.2em;
		color: var(--color-text);
		margin-bottom: 2.5rem;
		line-height: 1.6;
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
		font-weight: 500;
		font-size: 0.95em;
	}

	.contact-links {
		display: flex;
		gap: 1.25rem;
		justify-content: center;
		flex-wrap: wrap;
		margin: 2.5rem 0;
	}

	.contact-btn {
		padding: 1rem 2rem;
		border-radius: 1.5625rem;
		font-size: 1.05em;
		font-weight: 500;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		display: inline-block;
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
		font-size: 1.05em;
	}

	.info-content p {
		color: var(--color-text);
		margin: 0;
		font-size: 0.95em;
	}

	.footer-note {
		margin-top: 3.125rem;
		font-size: 1.1em;
		color: var(--color-brown-light);
		line-height: 1.7;
	}

	@media (max-width: 768px) {
		.closing-message {
			font-size: 2em;
		}

		.contact-description {
			font-size: 1.05em;
		}

		.contact-links {
			flex-direction: column;
			align-items: stretch;
		}

		.contact-btn {
			width: 100%;
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
