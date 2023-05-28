import { apiSlice } from "../../app/api/apiSlice";
import { APIResponse } from "./ICreators";

export const creatorsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCreators: builder.query({
      query: ({ offset, limit, nameStartsWith }) => ({
        url: "/creators",
        params: {
          offset,
          limit,
          nameStartsWith,
        },
      }),
      transformResponse: (response: APIResponse) => {
        // Modify the response data here
        const filteredResults = response.data.results
          .filter((comic) => !comic.thumbnail.path.includes("image_not_available"))
          .map((creator) => ({
            id: creator.id,
            name: creator.fullName,
            thumbnail: `${creator.thumbnail.path}.${creator.thumbnail.extension}`,
          }));

        return {
          data: {
            results: filteredResults,
            total: response.data.total,
          },
        };
      },
    }),

    getCreatorsById: builder.query({
      query: (id: number) => ({
        url: `creators/${id}`,
      }),
      transformResponse: (response) => {
        const creator = response?.data?.results[0];

        return {
          data: {
            id: creator.id,
            name: creator.fullName,
            thumbnail: `${creator.thumbnail.path}.${creator.thumbnail.extension}`,
            description: creator.description,
          },
        };
      },
    }),
  }),
});

export const { useGetAllCreatorsQuery, useGetCreatorsByIdQuery } = creatorsApiSlice;
