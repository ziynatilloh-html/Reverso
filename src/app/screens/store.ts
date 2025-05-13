import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homePageReducer from "../screens/homePage/slice"; // ✅ Import your actual slice

export const store = configureStore({
  reducer: {
    homePage: homePageReducer, // ✅ MUST match what your selector expects
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
