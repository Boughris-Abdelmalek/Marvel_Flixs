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
  }),
});

export const { useGetAllCharactersQuery } = charactersApiSlice;
