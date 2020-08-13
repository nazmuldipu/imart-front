export interface ProductStock {
    _id: string;
    product: Product;
    shop: Shop;
    size: string;
    color_stock: colorStock[];
}

interface colorStock {
    _id: string,
    color: string,
    quantity: number,
    purchase_price: number,
}

interface Product {
    _id: string,
    name: string,
    slug: string
}

interface Shop {
    _id: string,
    name: string,
    slug: string
}