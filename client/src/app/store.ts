import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../features/Characters/CharactersSlice";
import comicsReducer from "../features/Comics/ComicsSlice";
import creatorsReducer from "../features/Creators/CreatorsSlice";
import eventsReducer from "../features/Events/EventsSlice";
import seriesReducer from "../features/Series/SeriesSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    comics: comicsReducer,
    creators: creatorsReducer,
    events: eventsReducer,
    series: seriesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
