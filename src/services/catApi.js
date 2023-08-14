import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DEFAULT_LIMIT = 5;
const DEFAULT_BREED = 'none';

const buildBreedQuery = (breed) => (breed !== DEFAULT_BREED ? `&breed_ids=${breed}` : '');

const buildImagesQuery = ({ breed, order, limit }) =>
  `order=${order}${buildBreedQuery(breed)}&limit=${limit}`;

const getRandomImageQuery = () => 'images/search';

const transformImageResponse = (response) => ({
  image: { url: response.url },
  id: response.id,
});

const transformBreedResponse = (response) => {
  const {
    name,
    temperament,
    origin,
    weight: { metric },
    life_span,
  } = response[0].breeds[0];
  return {
    breedInfo: { name, temperament, origin, metric, life_span },
    images: response.map((item) => item.url),
  };
};

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set(
        'x-api-key',
        'live_6SswE7BwMNdqFYWFoUpChtN8htjHUjsSPsQVNp6QImJSNPfVG1cJX4UkzNO9LWVX'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBreeds: builder.query({
      query: ({ limit, page, order }) =>
        `breeds/?order=${order}&limit=${limit}&page=${page}`,
    }),
    getSelectedBreed: builder.query({
      query: (selectedBreed) =>
        `images/search?limit=${DEFAULT_LIMIT}&breed_ids=${selectedBreed}`,
      transformResponse: transformBreedResponse,
    }),
    getBreedsByName: builder.query({
      query: (queryName) => `breeds/search?q=${queryName}`,
    }),
    getRandomImage: builder.query({
      query: getRandomImageQuery,
      transformResponse: (response) => transformImageResponse(response[0]),
    }),
    getRandomImages: builder.query({
      query: ({ breed, order, limit }) =>
        `images/search?${buildImagesQuery({ breed, order, limit })}`,
      transformResponse: (response) => response.map((r) => transformImageResponse(r)),
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
