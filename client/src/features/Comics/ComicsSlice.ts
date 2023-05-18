import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IComicsState } from "./IComics";

const initialComicsState: IComicsState = {
  comics: [],
  comic: null,
  total: 0,
};

const comicsSlice = createSlice({
  name: "comics",
  initialState: initialComicsState,
  reducers: {
    getAllComics: (state, action) => {
      state.comics = action.payload.data.results;
      state.total = action.payload.data.total;
    },
    getComicsById: (state, action) => {
      state.comic = action.payload.data.results;
    },
  },
});

export const { getAllComics, getComicsById } = comicsSlice.actions;
export default comicsSlice.reducer;

export const selectAllComics = (state: RootState) => state.comics.comics;

export const selectAllComicsCount = (state: RootState) => state.comics.total;
