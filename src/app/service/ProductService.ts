import axios from "axios";
import { serverApi } from "../libs/config";
import { Product, ProductInquiry } from "../libs/types/product";

class ProductService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  /** Get New Arrivals */
  public async getNewArrivals(input: ProductInquiry): Promise<Product[]> {
    try {
      let url = `${this.path}/product/new-arrivals?order=${input.order}&page=${input.page}&limit=${input.limit}`;
      if (input.productCategory)
        url += `&productCategory=${input.productCategory}`;
      if (input.search) url += `&search=${input.search}`;

      const result = await axios.get(url, { withCredentials: true });
      console.log("getNewArrivals", result);
      return result.data;
    } catch (err) {
      console.error("Error, getNewArrivals:", err);
      throw err;
    }
  }

  /** Get Popular Products */
  /** Get Popular Product by ID and increase views */
  public async getPopularProduct(productId: string): Promise<Product> {
    try {
      const url = `${this.path}/product/popular/${productId}`;
      const result = await axios.get(url, { withCredentials: true });
      console.log("getPopularProduct", result);
      return result.data;
    } catch (err) {
      console.error("Error, getPopularProduct:", err);
      throw err;
    }
  }
}

export default ProductService;
