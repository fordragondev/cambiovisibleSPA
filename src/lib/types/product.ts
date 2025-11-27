export interface Product {
	id: string;
	name: string;
	emoji: string;
	subtitle?: string;
	description: string; // 2-3 sentence product overview
	components: string[]; // Ingredient/compound list
	benefits: string[];
	idealFor?: string;
	price?: number | 'consult'; // Some products require price consultation
	priceVariants?: { label: string; price: number }[]; // For products with multiple sizes
	currency: string;
	dosage?: string; // e.g., "20 mg", "10 mg"
	image: string; // Path to product image
	instagramUrl: string; // Instagram page/post URL for this product
	category: ProductCategory;
	featured?: boolean;
	promotion?: {
		badge: string;
		message?: string;
		limitedTo?: string;
	};
	availability?: 'available' | 'low' | 'coming-soon';
}

export type ProductCategory = 'weight-control' | 'beauty-rejuvenation' | 'metabolism-energy';

export const categoryNames: Record<ProductCategory, string> = {
	'weight-control': 'Control de Peso',
	'beauty-rejuvenation': 'Belleza & Rejuvenecimiento',
	'metabolism-energy': 'Metabolismo & Energía'
};

export interface ContactInfo {
	whatsapp: string; // Phone number for WhatsApp (for QR code)
	instagram: string; // Instagram profile URL
	email?: string;
	name: string;
	businessName: string;
}

export interface FAQItem {
	question: string;
	answer: string;
}
