import { apiSlice } from "../../app/api/apiSlice";
import { APIResponse } from "./ISeries";

export const seriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSeries: builder.query({
      query: ({ offset, limit, titleStartsWith }) => ({
        url: "/series",
        params: {
          offset,
          limit,
          titleStartsWith,
        },
      }),
      transformResponse: (response: APIResponse) => {
        // Modify the response data here
        const filteredResults = response.data.results
          .filter((serie) => !serie.thumbnail.path.includes("image_not_available"))
          .map((serie) => ({
            id: serie.id,
            name: serie.title,
            thumbnail: `${serie.thumbnail.path}.${serie.thumbnail.extension}`,
          }));

        return {
          data: {
            results: filteredResults,
            total: response.data.total,
          },
        };
      },
    }),

    getSeriesById: builder.query({
      query: (id: number) => ({
        url: `series/${id}`,
      }),
      transformResponse: (response) => {
        const serie = response?.data?.results[0];

        return {
          data: {
            id: serie.id,
            name: serie.title,
            thumbnail: `${serie.thumbnail.path}.${serie.thumbnail.extension}`,
            description: serie.description,
          },
        };
      },
    }),
  }),
});

export const { useGetAllSeriesQuery, useGetSeriesByIdQuery } = seriesApiSlice;
