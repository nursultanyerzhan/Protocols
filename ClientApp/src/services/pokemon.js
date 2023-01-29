import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  tagTypes: ['ProtocolDocuments', 'ProtocolGroup', 'ProtocolMission', 'ProtocolExecutor'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:44465/' }),
  endpoints: (builder) => ({
    hasRole: builder.query({
      query: () => `hasRole`,
      // providesTags: (result) => result ?
      //   [
      //     ...result.map(({ id }) => ({ type: 'ProtocolDocuments', id })),
      //     { type: 'ProtocolDocuments', id: 'List' }
      //   ] :
      //   [{ type: 'ProtocolDocuments', id: 'List' }]
    }),
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
    }),
    getProtocolGroups: builder.query({
      query: (documentId) => `getProtocolGroup?documentId=${documentId}`,
      providesTags: (result) => result ?
        [
          ...result.map(({ id }) => ({ type: 'ProtocolGroup', id })),
          { type: 'ProtocolGroup', id: 'List' }
        ] :
        [{ type: 'ProtocolGroup', id: 'List' }]
    }),
    addProtocolGroup: builder.mutation({
      query: (body) => ({
        url: 'postProtocolGroup',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'ProtocolGroup', id: 'List' }]
    }),
    getProtocolMissions: builder.query({
      query: (groupId) => `getProtocolMissions?groupId=${groupId}`,
      providesTags: (result) => result ?
        [
          ...result.map(({ id }) => ({ type: 'ProtocolMission', id })),
          { type: 'ProtocolMission', id: 'List' }
        ] :
        [{ type: 'ProtocolMission', id: 'List' }]
    }),
    addProtocolMission: builder.mutation({
      query: (body) => ({
        url: 'postProtocolMission',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'ProtocolMission', id: 'List' }]
    }),
    getProtocolExecutors: builder.query({
      query: (missionId) => `getProtocolExecutors?missionId=${missionId}`,
      providesTags: (result) => result ?
        [
          ...result.map(({ id }) => ({ type: 'ProtocolExecutor', id })),
          { type: 'ProtocolExecutor', id: 'List' }
        ] :
        [{ type: 'ProtocolExecutor', id: 'List' }]
    }),
    addProtocolExecutors: builder.mutation({
      query: (body) => ({
        url: 'postProtocolExecutors',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'ProtocolExecutor', id: 'List' }]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetPokemonByNameQuery, 
  useAddProtocolDocumentMutation, 
  useGetProtocolGroupsQuery,
  useAddProtocolGroupMutation, 
  useGetProtocolMissionsQuery, 
  useAddProtocolMissionMutation, 
  useGetProtocolExecutorsQuery,
  useAddProtocolExecutorsMutation,
  useHasRoleQuery } = pokemonApi;