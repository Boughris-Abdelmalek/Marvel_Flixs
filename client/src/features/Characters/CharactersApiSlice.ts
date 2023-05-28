import { apiSlice } from "../../app/api/apiSlice";
import { APIResponse } from "./ICharacter";

export const charactersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: ({ offset, limit, nameStartsWith }) => ({
        url: "/characters",
        params: {
          offset,
          limit,
          nameStartsWith,
        },
      }),
      transformResponse: (response: APIResponse) => {
        // Modify the response data here
        const filteredResults = response.data.results
          .filter((character) => !character.thumbnail.path.includes("image_not_available"))
          .map((character) => ({
            id: character.id,
            name: character.name,
            description: character.description,
            thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          }));

        return {
          data: {
            results: filteredResults,
            total: response.data.total,
          },
        };
      },
    }),

    getCharacterById: builder.query({
      query: (id: number) => ({
        url: `characters/${id}`,
      }),
      transformResponse: (response: APIResponse) => {
        const character = response?.data?.results[0];

        return {
          data: {
            id: character.id,
            name: character.name,
            thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            description: character.description,
          },
        };
      },
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } = charactersApiSlice;
