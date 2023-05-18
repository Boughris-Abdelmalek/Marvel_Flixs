import { apiSlice } from "../../app/api/apiSlice";
import { APIResponse } from "./IComics";

export const comicsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllComics: builder.query({
      query: ({ offset, limit, titleStartsWith }) => ({
        url: "/comics",
        params: {
          offset,
          limit,
          titleStartsWith,
        },
      }),
      transformResponse: (response: APIResponse) => {
        // Modify the response data here
        const filteredResults = response.data.results
          .filter((comic) => !comic.thumbnail.path.includes("image_not_available"))
          .map((comic) => ({
            id: comic.id,
            title: comic.title,
            thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
            creators: {
              writer: comic.creators.items
                .filter((item) => item.role.includes("writer"))
                .map((item) => item.name)[0],
              penciler: comic.creators.items
                .filter((item) => item.role.includes("penciler"))
                .map((item) => item.name)[0],
            },
          }));

        return {
          data: {
            results: filteredResults,
            total: response.data.total,
          },
        };
      },
    }),

    getComicsById: builder.query({
      query: (id: number) => ({
        url: `comics/${id}`,
      }),
    }),
  }),
});

export const { useGetAllComicsQuery, useGetComicsByIdQuery } = comicsApiSlice;