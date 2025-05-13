import { Product } from "./product";

/*React-App State*/
export interface AppRootState {
  homePage: HomePageState;
}
/*HomePage*/
export interface HomePageState {
  newProducts: Product[];
  popularProducts: Product[];
}
