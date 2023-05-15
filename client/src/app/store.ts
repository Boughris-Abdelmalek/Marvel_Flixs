import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../features/Characters/CharactersSlice";
import comicsReducer from "../features/Comics/ComicsSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    comics: comicsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
