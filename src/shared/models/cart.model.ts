export interface Cart {
    product_list: Product_list[];
    poll: number;
    sub_total: number;
    total_discount: number;
    total_tax: number;
    shipping_charge: number;
    total: number;
    updatedBy: User;
}

interface Product_list {
    product: Product;
    quantity: number;
    rate: number;
    commission: number;
    amount: number;
    discounts: Discount[];
    taxes: Tax[];
}

interface Product {
    _id: string,
    name: string,
    slug: string
}

interface Discount {
    discount_type: string;
    amount: number;
}

interface Tax {
    tax_type: string;
    amount: number;
}

interface User {
    name: string;
    phone: string;
}