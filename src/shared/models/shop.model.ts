export interface Shop {
  _id: string;
  name: string;
  slug: string;
  owner_name: string;
  owner_number: string;
  address: string;
  priority: number;
  delivery_options: string[];
  contact_number: string;
  image_urls: string[];
  nid: string;
  latitude: number;
  longitude: number;
  trade_license: string;
  bank_info: string;
  approved: boolean;
  status: string;
  description: string;
  createdAt: Date;
}

export interface ShopPage {
  docs: Shop[];
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
