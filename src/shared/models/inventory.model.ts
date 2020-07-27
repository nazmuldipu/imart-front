export interface InventoryPage {
    docs: Inventory[];
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

export interface Inventory {
    _id: string;
    shop: Shop;
    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;
    supplier: User;
    reference: string;
    items: ProductItem[];
}

interface ProductItem {
    product: Product;
    size: string;
    color_stock: ColorStock[];
}

interface User{
    name: string;
    phone: string;
}

interface ColorStock {
    color: string,
    quantity: number,
    price: number,
    purchase_price: number,
}

interface Product {
    name: string,
    slug: string
}

interface Shop {
    name: string,
    slug: string
}