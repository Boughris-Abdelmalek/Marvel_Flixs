import { apiSlice } from "../../app/api/apiSlice";
import { APIResponse } from "./IEvents";

export const eventsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: ({ offset, limit, titleStartsWith }) => ({
        url: "/events",
        params: {
          offset,
          limit,
          titleStartsWith,
        },
      }),
      transformResponse: (response: APIResponse) => {
        // Modify the response data here
        const filteredResults = response.data.results
          .filter((event) => !event.thumbnail.path.includes("image_not_available"))
          .map((event) => ({
            id: event.id,
            title: event.title,
            thumbnail: `${event.thumbnail.path}.${event.thumbnail.extension}`,
          }));

        return {
          data: {
            results: filteredResults,
            total: response.data.total,
          },
        };
      },
    }),

    getEventsById: builder.query({
      query: (id: number) => ({
        url: `events/${id}`,
      }),
      transformResponse: (response) => {
        const event = response?.data?.results[0];

        return {
          data: {
            id: event.id,
            title: event.title,
            thumbnail: `${event.thumbnail.path}.${event.thumbnail.extension}`,
            description: event.description,
          },
        };
      },
    }),
  }),
});

export const { useGetAllEventsQuery, useGetEventsByIdQuery } = eventsApiSlice;
