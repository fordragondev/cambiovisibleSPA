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
		description: 'Medicamento inyectable innovador que actúa como agonista triple de los tres receptores metabólicos clave (GIP, GLP-1 y Glucagón). Esta triple acción mejora la saciedad, controla el azúcar en sangre y promueve la quema de grasa almacenada, logrando una reducción significativa de peso y mejoras metabólicas.',
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
			"Ofrece un enfoque integral para manejar la obesidad.",
			"Mejora los marcadores de salud metabólica."
		],
		idealFor: "Personas con obesidad que no han logrado resultados con otros medicamentos.",
		priceVariants: [
			{ label: '📦 20 mg', price: 1500000 }
		],
		currency: 'COP',
		dosage: '20 mg',
		image: '/images/products/retatrutide.png',
		instagramUrl: 'https://instagram.com/cambiovisiblec', // TODO: Replace with actual post
		category: 'weight-control',
		featured: true,
		/* promotion: {
			badge: '🎁 PROMOCIÓN DEL MES',
			message: 'Por la compra de Retatrutide 20 mg, recibe MOST GRATIS',
			limitedTo: '(Válido para las 3 primeras clientas)'
		} */
	},
	{
		id: 'tirzepatide',
		name: 'TIRZEPATIDE (TIRZE)',
		emoji: '💊',
		description: "Medicamento inyectable semanal que actúa como agonista dual de los receptores GIP y GLP-1. Estimula la liberación de insulina, suprime el glucagón, retrasa el vaciamiento gástrico y reduce el apetito, logrando un excelente control de azúcar en sangre y una pérdida de peso sustancial.",
		components: [
			'GIP receptor agonist',
			'GLP-1 receptor agonist',
			'Compuesto base peptídico',
			'Agentes estabilizadores'
		],
		benefits: [
			"Logra pérdida de peso promedio de 15-20% del peso corporal.",
			"Control efectivo de la glucosa en Diabetes Tipo 2.",
			"Mejora la salud metabólica global.",
			"Reduce factores de riesgo cardiovascular."
		],
		idealFor:  "Adultos con Diabetes Tipo 2 o con obesidad que buscan control integral.",
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
		description: 'El GLOW es una fórmula avanzada que combina tres péptidos regeneradores: GHK-Cu, BPC-157 y TB-500.' + 
			'Su acción conjunta estimula la producción de colágeno, acelera la reparación de tejidos y mejora la oxigenación celular, logrando una piel más firme, luminosa y saludable desde adentro.',
		components: [
		'GHK-Cu (péptido de cobre): estimula el colágeno, elastina y regeneración de la piel. Mejora la firmeza y luminosidad cutánea.',
		'BPC-157: favorece la cicatrización, reduce la inflamación y regenera músculos, articulaciones y sistema digestivo.',
		'TB-500: incrementa la oxigenación y la recuperación celular profunda, ayudando a reparar tejidos internos y mejorar la circulación.',
		],
		benefits: [
		'Rejuvenece la piel y mejora su textura.',
		'Estimula el crecimiento y la fortaleza del cabello.',
		'Regenera tejidos musculares y articulares.',
		'Favorece la hidratación y elasticidad de la piel.',
		'Aumenta la energía celular y acelera la recuperación.',
		'Reduce la inflamación y mejora el descanso.'
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
		subtitle: '"Combinación de Análogo de Amilina y GLP-1',
		description: "Combina cagrilintida (análogo de amilina) con semaglutida (agonista GLP-1) en una inyección semanal. Esta combinación sinérgica actúa sobre múltiples vías reguladoras del apetito y metabolismo, logrando una pérdida de peso superior a la de cada componente por separado.",
		components: [
			"Cagrilintida: análogo de amilina de acción prolongada que regula el apetito y balance energético.",
			"Semaglutida: agonista del receptor GLP-1 que reduce el apetito y mejora el control glucémico."
		],
		benefits: [
			"Pérdida de peso sustancial (hasta 20.4% en 68 semanas).",
			"Mejora significativa del control glucémico.",
			"Reducción del riesgo cardiovascular.",
			"Efecto sinérgico superior a monoterapias."
		],
		idealFor: "Pacientes con Diabetes Tipo 2 u obesidad que requieren abordaje intensivo.",
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
		subtitle: "Inyección Lipotrópica para Pérdida de Grasa",
		description: "Lipo-C es una fórmula lipotrópica que combina metionina, inositol y colina para estimular la descomposición y metabolización de grasas. Esta combinación apoya la función hepática, aumenta los niveles de energía y potencia los resultados de dieta y ejercicio.",
		components: [
			"Metionina: aminoácido esencial que apoya el metabolismo lipídico y aumenta energía.",
			"Inositol: mejora la función celular y acelera la reducción de grasa corporal.",
			"Colina: nutriente esencial clave en la descomposición de grasas para producción de energía.",
			'Vitaminas del complejo B'
		],
		benefits: [
			"Facilita la pérdida de peso y grasa corporal.",
			"Aumenta los niveles de energía y vitalidad.",
			"Mejora la función hepática y desintoxicación.",
			"Potencia los efectos del ejercicio y dieta."
		],
		idealFor: "Personas que buscan potenciar sus esfuerzos de pérdida de peso.",
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
		subtitle: "Activador de Músculo y Metabolismo",
		description: "5-AMINO (5-amino-1MQ) es un compuesto que bloquea la enzima NNMT, responsable de inhibir el metabolismo. Al inhibir esta enzima, activa la vía AMPK que incrementa el gasto calórico y la quema de grasa, especialmente durante el ejercicio.",
		components: [
			"5-amino-1MQ: inhibidor de la enzima NNMT que activa el metabolismo energético.",
			"Activador natural de la vía AMPK para quema de grasas.",
			'Potenciadores mitocondriales',
			'Cofactores metabólicos'
		],
		benefits: [
			"Aumenta el metabolismo basal y quema de grasas.",
			"Mejora el rendimiento deportivo y resistencia.",
			"Promueve la composición corporal magra.",
			"Potencia los efectos del ejercicio físico."
		],
		idealFor: "Deportistas y personas activas que buscan optimizar su composición corporal.",
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
