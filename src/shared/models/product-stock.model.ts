export interface ProductStock {
    _id: string;
    product: Product;
    shop: Shop;
    size: string;
    color_stock: colorStock[];
}

interface colorStock {
    color: string,
    quantity: string
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