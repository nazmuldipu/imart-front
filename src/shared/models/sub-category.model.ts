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

export interface SubCategoryPage {
    docs: SubCategory[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number;
    page: number;
    pagingCounter: number;
    prevPage: number;
    totalDocs: number;
    totalPages: number;
}

