import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URl } from '../../utils/constant'





export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URl }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({ id }) => `/products/${id}`,
            providesTags: ['Product']
        })
    })
})

export const { useGetProductQuery } = apiSlice;