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
		background: linear-gradient(135deg, #f9f6f0 0%, #f0e8d8 100%);
		padding: 1.875rem;
		border-radius: 0.9375rem;
		margin-bottom: 2.5rem;
		text-align: center;
		border: 2px solid #daa520;
	}

	.coming-soon h3 {
		font-family: 'Cormorant Garamond', serif;
		font-size: 2em;
		color: #8b6f47;
		margin-bottom: 1.25rem;
	}

	.coming-soon p {
		color: #6b5d52;
		font-size: 1.1em;
		line-height: 1.8;
		margin: 0;
	}

	.coming-soon strong {
		color: #8b6f47;
	}

	.availability-note {
		font-size: 0.95em;
		color: #a0826d;
	}

	.section-title {
		font-family: 'Cormorant Garamond', serif;
		font-size: 2.5em;
		color: #8b6f47;
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
		background: linear-gradient(to right, transparent, #daa520, transparent);
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.faq-item {
		background: #ffffff;
		border-radius: 0.625rem;
		border-left: 3px solid #daa520;
		overflow: hidden;
		transition: box-shadow 0.3s ease;
	}

	.faq-item:hover {
		box-shadow: 0 5px 15px rgba(218, 165, 32, 0.15);
	}

	.faq-item.open {
		box-shadow: 0 5px 15px rgba(218, 165, 32, 0.2);
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
		color: #8b6f47;
		font-size: 1.1em;
		transition: background 0.3s ease;
	}

	.faq-question:hover {
		background: rgba(249, 246, 240, 0.5);
	}

	.faq-icon {
		font-size: 1.5em;
		color: #daa520;
		font-weight: normal;
		min-width: 30px;
		text-align: center;
	}

	.faq-answer {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease, padding 0.3s ease;
		color: #6b5d52;
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
