import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialCreatorsState = {
  creators: [],
  creator: null,
  total: 0,
};

const creatorsSlice = createSlice({
  name: "creators",
  initialState: initialCreatorsState,
  reducers: {
    getAllCreators: (state, action) => {
      state.creators = action.payload.data.results;
      state.total = action.payload.data.total;
    },
    getCreatorsById: (state, action) => {
      state.creator = action.payload.data;
    },
  },
});

export const { getAllCreators, getCreatorsById } = creatorsSlice.actions;
export default creatorsSlice.reducer;

export const selectAllCreators = (state: RootState) => state.creators.creators;

export const selectAllCreatorsCount = (state: RootState) => state.creators.total;

export const selectCreatorsById = (state: RootState) => state.creators.creator;
