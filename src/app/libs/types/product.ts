import {
  ProductCategory,
  ProductSize,
  ProductStatus,
  ProductTag,
} from "../enums/products.enum";

// Main product model (from backend)
export interface Product {
  _id: string;
  productStatus: ProductStatus;
  productCategory: ProductCategory;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productDesc?: string;
  productImages: string[]; // full image URLs
  productViews: number;
  productVolume?: number;
  productTags?: ProductTag[]; // multiple tags supported (NEW, SALE, etc.)
  createdAt: Date;
  updatedAt: Date;
}
// Product creation input (for forms, admin panels, API calls)
export interface ProductInput {
  productStatus: ProductStatus;
  productCategory: ProductCategory;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productDesc?: string;
  productImages: string[];
  productVolume?: number;
  productTags?: ProductTag[];
}

// Product update input (for update APIs)
export interface ProductUpdateInput {
  _id: string;
  productStatus?: ProductStatus;
  productCategory?: ProductCategory;
  productName?: string;
  productPrice?: number;
  productLeftCount?: number;
  productSize?: ProductSize;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
  productVolume?: number;
  productTags?: ProductTag[];
}
