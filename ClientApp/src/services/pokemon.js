import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  tagTypes: ['ProtocolDocuments'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:44465/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `getProtocolDocuments`,
      providesTags: (result) => result ?
        [
          ...result.map(({ id }) => ({ type: 'ProtocolDocuments', id })),
          { type: 'ProtocolDocuments', id: 'List' }
        ] :
        [{ type: 'ProtocolDocuments', id: 'List' }]
    }),
    addProtocolDocument: builder.mutation({
      query: (body) => ({
        url: 'postDocument',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'ProtocolDocuments', id: 'List' }]
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useAddProtocolDocumentMutation } = pokemonApi;