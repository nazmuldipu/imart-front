export interface Brand {
    _id: string;
    name: string;
    slug: string;
    priority: number;
    image_urls: string[];
    createdAt: Date;
  }