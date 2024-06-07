import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"http://3.110.121.13"}),
    tagTypes:["Promos","News"],
    endpoints:(builder) => ({
        // -----------------------------promo queries-------------------------------

        getPromo: builder.query({
            query:() => "/api/promo/get-all",
            providesTags:["Promos"]
        }),
        updatePromo: builder.mutation({
            query: ({id,...updatedPromo}) => ({
                url:`/api/promo/update/${id}`,
                method:"PATCH",
                body: updatedPromo
            }),
            invalidatesTags:["Promos"]
        }),
        // -----------------------------news queries-------------------------------

        getNews: builder.query({
            query:() => "/api/news/get-all",
            providesTags:["News"]
        }),
    })
})

export const {useGetPromoQuery,useUpdatePromoMutation,useGetNewsQuery} = api;