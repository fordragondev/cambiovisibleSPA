<script lang="ts">
	import { faqs } from '$lib/data/products';

	let openIndex = $state<number | null>(null);

	function toggleFAQ(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="faq-section" id="faq">
	<div class="faq-container">
		<!-- Coming Soon Notice -->
		<div class="coming-soon">
			<h3>💪 Próximos Envíos</h3>
			<p>
				<strong>CAGRI, LIPO-C y 5-AMINO</strong><br />
				📦 Llegará nuevo stock próximamente.<br />
				<span class="availability-note">¡Consulta disponibilidad actualizada!</span>
			</p>
		</div>

		<h2 class="section-title">💬 Preguntas Frecuentes</h2>

		<div class="faq-list">
			{#each faqs as faq, index}
				<div class="faq-item" class:open={openIndex === index}>
					<button class="faq-question" onclick={() => toggleFAQ(index)}>
						<span>{faq.question}</span>
						<span class="faq-icon">{openIndex === index ? '−' : '+'}</span>
					</button>
					<div class="faq-answer" class:open={openIndex === index}>
						<p>{faq.answer}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.faq-section {
		background: #fefdfb;
		padding: 5rem 1.25rem;
	}

	.faq-container {
		max-width: 900px;
		margin: 0 auto;
	}

	.coming-soon {
		background: linear-gradient(135deg, var(--color-beige-light) 0%, var(--color-beige) 100%);
		padding: 1.875rem;
		border-radius: 0.9375rem;
		margin-bottom: 2.5rem;
		text-align: center;
		border: 2px solid var(--color-primary);
	}

	.coming-soon h3 {
		font-family: 'Cormorant Garamond', serif;
		font-size: 2em;
		color: var(--color-brown);
		margin-bottom: 1.25rem;
	}

	.coming-soon p {
		color: var(--color-text);
		font-size: 1.1em;
		line-height: 1.8;
		margin: 0;
	}

	.coming-soon strong {
		color: var(--color-brown);
	}

	.availability-note {
		font-size: 0.95em;
		color: var(--color-brown-light);
	}

	.section-title {
		font-family: 'Cormorant Garamond', serif;
		font-size: 2.5em;
		color: var(--color-brown);
		margin-bottom: 2.5rem;
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
		background: linear-gradient(to right, transparent, var(--color-primary), transparent);
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.faq-item {
		background: #ffffff;
		border-radius: 0.625rem;
		border-left: 3px solid var(--color-primary);
		overflow: hidden;
		transition: box-shadow 0.3s ease;
	}

	.faq-item:hover {
		box-shadow: 0 5px 15px color-mix(in srgb, var(--color-primary) 15%, transparent);
	}

	.faq-item.open {
		box-shadow: 0 5px 15px color-mix(in srgb, var(--color-primary) 20%, transparent);
	}

	.faq-question {
		width: 100%;
		padding: 1.25rem;
		background: none;
		border: none;
		text-align: left;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		font-weight: 600;
		color: var(--color-brown);
		font-size: 1.1em;
		transition: background 0.3s ease;
	}

	.faq-question:hover {
		background: color-mix(in srgb, var(--color-beige-light) 50%, transparent);
	}

	.faq-icon {
		font-size: 1.5em;
		color: var(--color-primary);
		font-weight: normal;
		min-width: 30px;
		text-align: center;
	}

	.faq-answer {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease, padding 0.3s ease;
		color: var(--color-text);
		line-height: 1.7;
	}

	.faq-answer.open {
		max-height: 500px;
		padding: 0 1.25rem 1.25rem 1.25rem;
	}

	.faq-answer p {
		margin: 0;
	}

	@media (max-width: 768px) {
		.section-title {
			font-size: 2em;
		}

		.coming-soon h3 {
			font-size: 1.5em;
		}

		.faq-question {
			font-size: 1em;
			padding: 1rem;
		}

		.faq-answer.open {
			padding: 0 1rem 1rem 1rem;
		}
	}
</style>
