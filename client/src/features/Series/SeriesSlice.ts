import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IComicsState } from "./ISeries";

const initialSeriesState: IComicsState = {
  series: [],
  serie: null,
  total: 0,
};

const seriesSlice = createSlice({
  name: "events",
  initialState: initialSeriesState,
  reducers: {
    getAllSeries: (state, action) => {
      state.series = action.payload.data.results;
      state.total = action.payload.data.total;
    },
    getSeriesById: (state, action) => {
      state.serie = action.payload.data;
    },
  },
});

export const { getAllSeries, getSeriesById } = seriesSlice.actions;
export default seriesSlice.reducer;

export const selectAllSeries = (state: RootState) => state.series.series;

export const selectAllSeriesCount = (state: RootState) => state.series.total;

export const selectSeriesById = (state: RootState) => state.series.serie;
