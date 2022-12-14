import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: headers => {
      headers.set(
        'x-api-key',
        'live_6SswE7BwMNdqFYWFoUpChtN8htjHUjsSPsQVNp6QImJSNPfVG1cJX4UkzNO9LWVX'
      );
      return headers;
    },
  }),
  endpoints: builder => ({
    getBreeds: builder.query({
      query: ({ limit, page, order }) =>
        `breeds/?order=${order}&limit=${limit}&page=${page}`,
    }),

    getSelectedBreed: builder.query({
      query: selectedBreed =>
        `images/search?limit=5&breed_ids=${selectedBreed}`,
      transformResponse: (response, meta, arg) => {
        const {
          name,
          temperament,
          origin,
          weight: { metric },
          life_span,
        } = response[0].breeds[0];
        return {
          breedInfo: { name, temperament, origin, metric, life_span },
          images: response.map(item => item.url),
        };
      },
    }),
    getBreedsByName: builder.query({
      query: queryName => `breeds/search?q=${queryName}`,
    }),
    getRandomImage: builder.query({
      query: () => `images/search`,
      transformResponse: (response, meta, arg) => response[0],
    }),
    getRandomImages: builder.query({
      query: ({ breed, type, order, limit }) =>
        `images/search?order=${order}&mime_types=${type}${
          breed !== 'none' ? `&breed_ids=${breed}` : ''
        }&limit=${limit}`,
      transformResponse: (response, meta, arg) =>
        response.map(r => {
          return {
            image: { url: r.url },
            id: r.id,
          };
        }),
    }),
  }),
});

export const {
  useGetBreedsQuery,
  useGetSelectedBreedQuery,
  useGetBreedsByNameQuery,
  useGetRandomImageQuery,
  useGetRandomImagesQuery,
} = catApi;
