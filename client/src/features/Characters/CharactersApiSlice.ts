import { apiSlice } from "../../app/api/apiSlice";

export const charactersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: (pagination) => ({
        url: "/characters",
        params: pagination,
      }),
      transformResponse: (response) => {
        // Modify the response data here
        return response.data.results;
      },
    }),
  }),
});

export const { useGetAllCharactersQuery } = charactersApiSlice;
