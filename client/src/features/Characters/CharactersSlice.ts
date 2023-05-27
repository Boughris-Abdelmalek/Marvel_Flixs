import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ICharactersState } from "./ICharacter";

const initialCharactersState: ICharactersState = {
  characters: [],
  character: null,
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
    getCharacterById: (state, action) => {
      state.character = action.payload.data;
    },
  },
});

export const { getAllCharacters, getCharacterById } = charactersSlice.actions;
export default charactersSlice.reducer;

export const selectAllCharacters = (state: RootState) => state.characters.characters;

export const selectAllCharactersCount = (state: RootState) => state.characters.total;

export const selectCharacterById = (state: RootState) => state.characters.character;
