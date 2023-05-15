import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ICharactersState } from "./ICharacter";

const initialCharactersState: ICharactersState = {
  characters: [],
  total: 0,
};

const charactersSlice = createSlice({
  name: "characters",
  initialState: initialCharactersState,
  reducers: {
    getAllCharacters: (state, action) => {
      state.characters = action.payload.data.results;
      state.total = action.payload.data.total;
    },
  },
});

export const { getAllCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;

export const selectAllCharacters = (state: RootState) => state.characters.characters;

export const selectAllCharactersCount = (state: RootState) => state.characters.total;
