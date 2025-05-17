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

  /** Get Single Product by ID */
  public async getProduct(productId: string): Promise<Product> {
    try {
      const url = `${this.path}/product/${productId}`;
      const result = await axios.get(url, { withCredentials: true });
      console.log("getProduct", result);
      return result.data;
    } catch (err) {
      console.error("Error, getProduct:", err);
      throw err;
    }
  }

}

export default ProductService;
