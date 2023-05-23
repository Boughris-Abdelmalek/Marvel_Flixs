import { apiSlice } from "../../app/api/apiSlice";
import { APIResponse } from "./IComics";

import moment from "moment";

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
      transformResponse: (response) => {
        const comic = response?.data?.results[0];
        const description = comic.description || comic.textObjects.find((obj) => obj.type === "issue_solicit_text")?.text || "";
        const formattedDescription = description.replace(/<br\s*\/?>/gi, "\n").replace(/<\/?[^>]+(>|$)/g, ""); // remove html elements from the descriptions

        return {
          data: {
            id: comic.id,
            title: comic.title,
            thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
            publishedDate: moment(comic.dates[0].date).format("MMMM D, YYYY"),
            writer: comic.creators.items
              .filter((item) => item.role.includes("writer"))
              .map((item) => item.name)[0],
            penciler: comic.creators.items
              .filter((item) => item.role.includes("penciler"))
              .map((item) => item.name)[0],
            description: formattedDescription,
            details: {
              format: comic.format,
              price: comic.prices.price,
              upc: comic.upc,
              focDate: moment(comic.dates.find((date) => date.type === "focDate").date).format("MMMM D, YYYY"),
              creators: comic.creators.items,
            },
            variants: comic.variants.map((variant) => variant.resourceURI.split("/").pop()),
          },
        };
      },
    }),
  }),
});

export const { useGetAllComicsQuery, useGetComicsByIdQuery } = comicsApiSlice;
