import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"http://3.110.121.13"}),
    tagTypes:["Promos","News","FAQ","Stats","Banner"],
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

        // -----------------------------FAQs queries-------------------------------

        getFAQs: builder.query({
            query:() => `/api/faqs/get-all`,
            providesTags:["FAQ"]
        }),
        getFilteredFAQs: builder.query({
            query:({data}) => `/api/faqs/filter?${data.filter}=${data.type}`,
            providesTags:["FAQ"]
        }),
        addFAQs: builder.mutation({
            query: (FAQ) => ({
                url:`/api/faqs/create`,
                method:"POST",
                body: FAQ
            }),
            invalidatesTags:["FAQ"]
        }),
        updateFAQs: builder.mutation({
            query: ({id,...updatedPromo}) => ({
                url:`/api/faqs/update/${id}`,
                method:"PATCH",
                body: updatedPromo
            }),
            invalidatesTags:["FAQ"]
        }),

        //
        getStats: builder.query({
            query: () => "/api/stats/get-all",
            providesTags: ["Stats"],
          }),
  
        updateStats: builder.mutation({
        query: ({id,...updatedStatsData}) => ({
            url: `/api/stats/update/${id}`,
            method: "PATCH",
            body: updatedStatsData, 
        }),
        invalidatesTags: ["Stats"], 
        }),

        //
        getBanner: builder.query({
            query: () => "/api/banner/get-all",
            providesTags: ["Banner"],
        }),
        updateBanner: builder.mutation({
        query: ({ pageName, ...updatedBannerData }) => ({
            url: `/api/banner/update/${pageName}`,
            method: "PATCH",
            body: updatedBannerData,
        }),
        invalidatesTags: ["Banner"],
        }),
    })
})

export const {useGetPromoQuery,useUpdatePromoMutation,useGetNewsQuery,useGetFAQsQuery,useGetFilteredFAQsQuery,useAddFAQsMutation,useUpdateFAQsMutation, useGetStatsQuery, useUpdateStatsMutation, useGetBannerQuery, useUpdateBannerMutation} = api;