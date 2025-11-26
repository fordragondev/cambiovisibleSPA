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
			<h3 class="font-serif text-xl md:text-2xl font-semibold text-brown mb-5">💪 Próximos Envíos</h3>
			<p class="text-text-dark text-base md:text-lg leading-relaxed m-0">
				<strong class="text-brown font-semibold">CAGRI, LIPO-C y 5-AMINO</strong><br />
				📦 Llegará nuevo stock próximamente.<br />
				<span class="text-brown-light font-medium text-base">¡Consulta disponibilidad actualizada!</span>
			</p>
		</div>

		<h2 class="section-title">💬 Preguntas Frecuentes</h2>

		<div class="faq-list">
			{#each faqs as faq, index}
				<div class="faq-item" class:open={openIndex === index}>
					<button class="w-full px-5 py-6 bg-transparent border-0 text-left cursor-pointer flex justify-between items-center gap-4 font-semibold text-brown text-base md:text-lg leading-normal min-h-[56px] transition-colors hover:bg-beige-light/50" onclick={() => toggleFAQ(index)}>
						<span>{faq.question}</span>
						<span class="text-2xl text-primary font-normal min-w-[30px] text-center">{openIndex === index ? '−' : '+'}</span>
					</button>
					<div class="faq-answer" class:open={openIndex === index}>
						<p class="text-text-dark text-base md:text-lg leading-relaxed">{faq.answer}</p>
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

	.faq-answer {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease, padding 0.3s ease;
	}

	.faq-answer.open {
		max-height: 500px;
		padding: 0 1.25rem 1.25rem 1.25rem;
	}

	@media (max-width: 768px) {
		.faq-answer.open {
			padding: 0 1rem 1rem 1rem;
		}
	}
</style>
