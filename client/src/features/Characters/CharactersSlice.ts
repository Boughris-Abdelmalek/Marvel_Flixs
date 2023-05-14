import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const charactersSlice = createSlice({
  name: "characters",
  initialState: { characters: null },
  reducers: {
    getAllCharacters: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { getAllCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;

export const selectAllCharacters = (state: RootState) => state.characters.characters;
