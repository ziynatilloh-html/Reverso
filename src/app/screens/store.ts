import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homePageReducer from "../screens/homePage/slice";
import productsPageReducer from "../screens/productListPage/slice"; // ✅ adjust path if needed

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    productsPage: productsPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
