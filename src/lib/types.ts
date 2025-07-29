
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    dataAiHint: string;
    details?: {
      benefits: string[];
      composition: string;
      application: string[];
      orderingGuide: string;
    }
  }
