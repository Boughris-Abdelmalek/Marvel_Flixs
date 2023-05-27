import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IComicsState } from "./IEvents";

const initialEventsState: IComicsState = {
  events: [],
  event: null,
  total: 0,
};

const eventsSlice = createSlice({
  name: "events",
  initialState: initialEventsState,
  reducers: {
    getAllEvents: (state, action) => {
      state.events = action.payload.data.results;
      state.total = action.payload.data.total;
    },
    getEventsById: (state, action) => {
      state.event = action.payload.data;
    },
  },
});

export const { getAllEvents, getEventsById } = eventsSlice.actions;
export default eventsSlice.reducer;

export const selectAllEvents = (state: RootState) => state.events.events;

export const selectAllEventsCount = (state: RootState) => state.events.total;

export const selectEventById = (state: RootState) => state.events.event;
