export interface Brand {
  _id: string;
  name: string;
  slug: string;
  priority: number;
  image_urls: string[];
  createdAt: Date;
}

export interface BrandPage {
  docs: Brand[];
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