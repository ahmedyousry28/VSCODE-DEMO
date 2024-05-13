import { configureStore } from "@reduxjs/toolkit";
import Treeslice from "./features/Treeslice";
// ...

export const store = configureStore({
  reducer: {
    Tree: Treeslice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
