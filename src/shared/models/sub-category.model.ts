export interface SubCategory {
    _id: string;
    name: string;
    slug: string;
    priority: number;
    image_count: number;
    createdAt: Date;
    category: Category;
}

interface Category {
    _id: string;
    name: string;
    slug: string;
    image_urls: string[];
}

