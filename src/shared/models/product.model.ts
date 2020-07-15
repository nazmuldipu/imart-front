export interface Product {
    _id: string;
    name: string;
    slug: string;
    max_price: number;
    min_price: number;
    category: Category;
    brand: Brand;
    priority: number;
    active: boolean;
    publish: boolean;
    image_count: number;
    image_urls: string[];
    thumb: string[];
}

interface Category {
    _id: string;
    name: string;
    image_urls: string[];
}

interface Brand {
    _id: string;
    name: string;
    slug: string;
    image_urls: string[];
}