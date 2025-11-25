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
		benefits: [
			'Pérdida de peso acelerada y sostenida',
			'Control del apetito y de la ansiedad',
			'Mejora la sensibilidad a la insulina',
			'Incrementa energía y bienestar'
		],
		idealFor: 'Personas con resistencia a la insulina o dificultad para bajar de peso.',
		price: 1800000,
		currency: 'COP',
		dosage: '20 mg',
		image: '/images/products/retatrutide.jpg', // TODO: Add actual image
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
		benefits: [
			'Reduce el apetito y los antojos',
			'Regula el metabolismo y la glucosa',
			'Favorece la quema de grasa corporal'
		],
		idealFor: 'Control de peso progresivo y seguro.',
		priceVariants: [
			{ label: '📦 10 mg', price: 1100000 },
			{ label: '📦 20 mg', price: 1400000 }
		],
		currency: 'COP',
		image: '/images/products/tirzepatide.jpg',
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
		benefits: [
			'Favorece la regeneración celular',
			'Mejora el aspecto de la piel'
		],
		idealFor: 'Ideal para complementar cualquier tratamiento corporal o facial.',
		price: 700000,
		currency: 'COP',
		image: '/images/products/glow.jpg',
		instagramUrl: 'https://instagram.com/cambiovisiblec',
		category: 'beauty-rejuvenation'
	},
	{
		id: 'most',
		name: 'MOST',
		emoji: '🔥',
		subtitle: 'Activador Metabólico',
		benefits: [
			'Ayuda a acelerar el metabolismo',
			'Mantiene la energía durante el día'
		],
		idealFor: 'Mantén tu energía y vitalidad activa.',
		price: 700000,
		currency: 'COP',
		image: '/images/products/most.jpg',
		instagramUrl: 'https://instagram.com/cambiovisiblec',
		category: 'beauty-rejuvenation'
	},
	{
		id: 'ephitalon',
		name: 'EPHITALON',
		emoji: '🧬',
		subtitle: 'Contribuye a la reparación celular y al bienestar general',
		benefits: [
			'Regenera y rejuvenece las células',
			'Mejora el descanso y la vitalidad',
			'Favorece longevidad y bienestar integral'
		],
		idealFor: 'Para quienes buscan equilibrio y juventud desde adentro.',
		price: 'consult',
		currency: 'COP',
		image: '/images/products/ephitalon.jpg',
		instagramUrl: 'https://instagram.com/cambiovisiblec',
		category: 'beauty-rejuvenation'
	},

	// METABOLISMO & ENERGÍA
	{
		id: 'cagri',
		name: 'CAGRI',
		emoji: '💪',
		subtitle: 'Control del Apetito',
		benefits: [
			'Disminuye ansiedad por la comida',
			'Aumenta metabolismo y quema grasa',
			'Regula el apetito de forma natural'
		],
		price: 800000,
		currency: 'COP',
		image: '/images/products/cagri.jpg',
		instagramUrl: 'https://instagram.com/cambiovisiblec',
		category: 'metabolism-energy',
		availability: 'low'
	},
	{
		id: 'lipo-c',
		name: 'LIPO-C',
		emoji: '💉',
		subtitle: 'Detox y Metabolismo',
		benefits: [
			'Depura el hígado y acelera el metabolismo',
			'Ayuda a eliminar grasa y toxinas',
			'Mejora energía y rendimiento físico'
		],
		price: 'consult',
		currency: 'COP',
		image: '/images/products/lipo-c.jpg',
		instagramUrl: 'https://instagram.com/cambiovisiblec',
		category: 'metabolism-energy',
		availability: 'coming-soon'
	},
	{
		id: '5-amino',
		name: '5-AMINO',
		emoji: '⚡',
		subtitle: '5-Amino-1MQ',
		benefits: [
			'Favorece la pérdida de grasa celular',
			'Preserva masa muscular',
			'Aumenta energía y resistencia física'
		],
		price: 'consult',
		currency: 'COP',
		image: '/images/products/5-amino.jpg',
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
