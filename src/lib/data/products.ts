import type { Product, ContactInfo, FAQItem } from '$lib/types/product';

export const contactInfo: ContactInfo = {
	name: 'Lorena Caicedo',
	businessName: 'Cambio Visible',
	whatsapp: '+573167746996',
	instagram: 'https://instagram.com/cambiovisiblec',
};

export const products: Product[] = [
	// CONTROL DE PESO
	{
		id: 'retatrutide',
		name: 'RETATRUTIDE (RETA)',
		emoji: '💉',
		description: 'El Retatrutide es un péptido avanzado de triple acción que actúa sobre tres receptores metabólicos clave (GIP, GLP-1 y Glucagón). Desarrollado con tecnología de última generación, ofrece un control de peso superior y mejora metabólica integral con resultados sostenibles.',
		components: [
			'GIP receptor agonist',
			'GLP-1 receptor agonist',
			'Glucagon receptor agonist',
			'Excipiente estabilizador',
			'Buffer de pH controlado'
		],
		benefits: [
			'Pérdida de peso acelerada y sostenida',
			'Control del apetito y de la ansiedad',
			'Mejora la sensibilidad a la insulina',
			'Incrementa energía y bienestar'
		],
		idealFor: 'Personas con resistencia a la insulina o dificultad para bajar de peso.',
		priceVariants: [
			{ label: '📦 20 mg', price: 1500000 }
		],
		currency: 'COP',
		dosage: '20 mg',
		image: '/images/products/retatrutide.png',
		instagramUrl: 'https://instagram.com/cambiovisiblec', // TODO: Replace with actual post
		category: 'weight-control',
		featured: true,
		promotion: {
			badge: '🎁 PROMOCIÓN DEL MES',
			message: 'Por la compra de Retatrutide 20 mg, recibe MOST GRATIS',
			limitedTo: '(Válido para las 3 primeras clientas)'
		}
	},
	{
		id: 'tirzepatide',
		name: 'TIRZEPATIDE (TIRZE)',
		emoji: '💊',
		description: 'Péptido de doble acción que combina agonistas GIP y GLP-1 para un control efectivo del peso. Regula naturalmente el apetito y optimiza el metabolismo de la glucosa, ofreciendo resultados progresivos y seguros.',
		components: [
			'GIP receptor agonist',
			'GLP-1 receptor agonist',
			'Compuesto base peptídico',
			'Agentes estabilizadores'
		],
		benefits: [
			'Reduce el apetito y los antojos',
			'Regula el metabolismo y la glucosa',
			'Favorece la quema de grasa corporal'
		],
		idealFor: 'Control de peso progresivo y seguro.',
		priceVariants: [
			{ label: '📦 10 mg', price: 650000 },
			{ label: '📦 15 mg', price: 800000 },
			{ label: '📦 20 mg', price: 1150000 }
		],
		currency: 'COP',
		image: '/images/products/tirzepatide.png',
		instagramUrl: 'https://instagram.com/cambiovisiblec',
		category: 'weight-control',
		featured: true
	},

	// BELLEZA & REJUVENECIMIENTO
	{
		id: 'glow',
		name: 'GLOW',
		emoji: '💧',
		subtitle: 'Rejuvenecimiento Facial',
		description: 'Fórmula especializada para rejuvenecimiento facial que estimula la regeneración celular profunda. Actúa desde el interior para mejorar la textura, luminosidad y elasticidad de la piel de forma natural y duradera.',
		components: [
			'Péptidos regeneradores',
			'Aminoácidos esenciales',
			'Factores de crecimiento celular',
			'Antioxidantes naturales'
		],
		benefits: [
			'Favorece la regeneración celular',
			'Mejora el aspecto de la piel'
		],
		idealFor: 'Ideal para complementar cualquier tratamiento corporal o facial.',
		priceVariants: [
			{ label: '📦 70 mg', price: 600000 }
		],
		currency: 'COP',
		image: '/images/products/glow.png',
		instagramUrl: 'https://instagram.com/cambiovisiblec',
		category: 'beauty-rejuvenation'
	},
	{
		id: 'most',
		name: 'MOST',
		emoji: '🔥',
		subtitle: 'Activador Metabólico',
		description: 'Activador metabólico diseñado para impulsar la energía y optimizar el metabolismo basal. Su fórmula especializada mantiene niveles de energía constantes durante el día, favoreciendo un rendimiento físico y mental superior.',
		components: [
			'Activadores metabólicos',
			'Compuestos termogénicos naturales',
			'Vitaminas del complejo B',
			'Minerales esenciales'
		],
		benefits: [
			'Ayuda a acelerar el metabolismo',
			'Mantiene la energía durante el día'
		],
		idealFor: 'Mantén tu energía y vitalidad activa.',
		priceVariants: [
			{ label: '📦 10 mg', price: 600000 }
		],
		currency: 'COP',
		image: '/images/products/default.png',
		instagramUrl: 'https://instagram.com/cambiovisiblec',
		category: 'beauty-rejuvenation'
	},
	{
		id: 'ephitalon',
		name: 'EPHITALON',
		emoji: '🧬',
		subtitle: 'Contribuye a la reparación celular y al bienestar general',
		description: 'Péptido bioregulador con propiedades anti-envejecimiento que actúa a nivel celular profundo. Estimula la glándula pineal y promueve la reparación del ADN, contribuyendo a la longevidad y vitalidad integral.',
		components: [
			'Epitalón tetrapéptido',
			'Reguladores endocrinos',
			'Aminoácidos esenciales',
			'Base peptídica bioactiva'
		],
		benefits: [
			'Regenera y rejuvenece las células',
			'Mejora el descanso y la vitalidad',
			'Favorece longevidad y bienestar integral'
		],
		idealFor: 'Para quienes buscan equilibrio y juventud desde adentro.',
		priceVariants: [
			{ label: '📦 10 mg', price: 550000 }
		],
		currency: 'COP',
		image: '/images/products/ephitalon.png',
		instagramUrl: 'https://instagram.com/cambiovisiblec',
		category: 'beauty-rejuvenation'
	},

	// METABOLISMO & ENERGÍA
	{
		id: 'cagri',
		name: 'CAGRI',
		emoji: '💪',
		subtitle: 'Control del Apetito',
		description: 'Péptido especializado en control del apetito que actúa regulando las señales de saciedad. Reduce la ansiedad por la comida y optimiza el metabolismo, facilitando la pérdida de grasa de manera natural y sostenible.',
		components: [
			'Cagrilintida peptídica',
			'Moduladores de saciedad',
			'Reguladores metabólicos',
			'Base estabilizadora'
		],
		benefits: [
			'Disminuye ansiedad por la comida',
			'Aumenta metabolismo y quema grasa',
			'Regula el apetito de forma natural'
		],
		price: 'consult',
		currency: 'COP',
		image: '/images/products/default.png',
		instagramUrl: 'https://instagram.com/cambiovisiblec',
		category: 'metabolism-energy',
		availability: 'low'
	},
	{
		id: 'lipo-c',
		name: 'LIPO-C',
		emoji: '💉',
		subtitle: 'Detox y Metabolismo',
		description: 'Fórmula lipotrópica avanzada que combina nutrientes esenciales para la salud hepática y aceleración metabólica. Facilita la eliminación de toxinas y grasa mientras mejora los niveles de energía y rendimiento general.',
		components: [
			'L-Carnitina',
			'Metionina',
			'Inositol',
			'Colina',
			'Vitaminas del complejo B'
		],
		benefits: [
			'Depura el hígado y acelera el metabolismo',
			'Ayuda a eliminar grasa y toxinas',
			'Mejora energía y rendimiento físico'
		],
		price: 'consult',
		currency: 'COP',
		image: '/images/products/default.png',
		instagramUrl: 'https://instagram.com/cambiovisiblec',
		category: 'metabolism-energy',
		availability: 'coming-soon'
	},
	{
		id: '5-amino',
		name: '5-AMINO',
		emoji: '⚡',
		subtitle: '5-Amino-1MQ',
		description: 'Compuesto innovador que actúa a nivel mitocondrial para optimizar la quema de grasa celular. Preserva la masa muscular mientras aumenta la energía y resistencia física, ideal para composición corporal.',
		components: [
			'5-Amino-1MQ',
			'Inhibidores NNMT',
			'Potenciadores mitocondriales',
			'Cofactores metabólicos'
		],
		benefits: [
			'Favorece la pérdida de grasa celular',
			'Preserva masa muscular',
			'Aumenta energía y resistencia física'
		],
		price: 'consult',
		currency: 'COP',
		image: '/images/products/default.png',
		instagramUrl: 'https://instagram.com/cambiovisiblec',
		category: 'metabolism-energy',
		availability: 'coming-soon'
	}
];

export const faqs: FAQItem[] = [
	{
		question: '¿Cada cuánto se aplica el péptido?',
		answer:
			'Generalmente una vez por semana, ajustada a tus objetivos personales y tipo de péptido.'
	},
	{
		question: '¿Cuánto dura cada frasco?',
		answer:
			'La duración varía según el producto: desde 4 hasta 8 semanas aproximadamente.'
	},
	{
		question: '¿Cómo se conservan?',
		answer:
			'Deben mantenerse refrigerados, evitando la exposición directa al sol y cambios bruscos de temperatura.'
	},
	{
		question: '¿Puedo combinar los péptidos?',
		answer:
			'Sí, existen combinaciones seguras que potencian los resultados. Consulta conmigo para diseñar tu plan personalizado según tus objetivos.'
	},
	{
		question: '¿Los péptidos son seguros?',
		answer:
			'Todos nuestros péptidos tienen pureza del 99.9% y están respaldados por laboratorios certificados 🇺🇸. Siempre recomiendo una evaluación personalizada antes de iniciar.'
	}
];

// Helper functions
export function getProductsByCategory(category: string): Product[] {
	return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
	return products.filter((p) => p.featured);
}

export function getAvailableProducts(): Product[] {
	return products.filter((p) => p.availability !== 'coming-soon');
}

export function formatPrice(price: number | 'consult', currency: string): string {
	if (price === 'consult') {
		return '📞 Consultar precio';
	}
	return new Intl.NumberFormat('es-CO', {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: 0
	}).format(price);
}
