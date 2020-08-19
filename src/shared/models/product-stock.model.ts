export interface ProductStock {
    _id: string;
    product: Product;
    storehouse: Storehouse;
    quantity: number;
    purchase_price: number;
}

interface Product {
    _id: string,
    name: string,
    slug: string
}

interface Storehouse {
    _id: string,
    name: string,
    slug: string
}