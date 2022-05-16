import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

// const configValue: string = (process.env.REACT_APP_DOGS_API_KEY as string);

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: ' https://api.thedogapi.com/v1/',
    prepareHeaders(headers) {
      headers.set('x-api-key', 'f8522023-2f6d-4896-b269-2d8870b8f2ba');

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;