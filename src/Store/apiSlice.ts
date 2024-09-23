import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  // baseQuery: fetchBaseQuery({baseUrl:"https://backend.thelanguagenetwork.co"}),
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend.thelanguagenetwork.co/",
  }),
  tagTypes: ["Promos", "News", "FAQ", "Stats", "Banner"],
  endpoints: (builder) => ({
    // -----------------------------promo queries-------------------------------

    getPromo: builder.query({
      query: () => "/api/promo/get-all",
      providesTags: ["Promos"],
    }),
    updatePromo: builder.mutation({
      query: ({ id, ...updatedPromo }) => ({
        url: `/api/promo/update/${id}`,
        method: "PATCH",
        body: updatedPromo,
      }),
      invalidatesTags: ["Promos"],
    }),
    // -----------------------------news queries-------------------------------

    getNews: builder.query({
      query: () => "/api/news/get-all",
      providesTags: ["News"],
    }),

    // -----------------------------FAQs queries-------------------------------

    getFAQs: builder.query({
      query: () => `/api/faqs/get-all`,
      providesTags: ["FAQ"],
    }),
    getFilteredFAQs: builder.query({
      query: ({ data }) => `/api/faqs/filter?${data.filter}=${data.type}`,
      providesTags: ["FAQ"],
    }),
    addFAQs: builder.mutation({
      query: (FAQ) => ({
        url: `/api/faqs/create`,
        method: "POST",
        body: FAQ,
      }),
      invalidatesTags: ["FAQ"],
    }),
    updateFAQs: builder.mutation({
      query: ({ id, ...updatedFAQ }) => ({
        url: `/api/faqs/update/${id}`,
        method: "PATCH",
        body: updatedFAQ,
      }),
      invalidatesTags: ["FAQ"],
    }),
    deleteFAQs: builder.mutation({
      query: (id) => ({
        url: `/api/faqs/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FAQ"],
    }),

    //
    getStats: builder.query({
      query: () => "/api/stats/get-all",
      providesTags: ["Stats"],
    }),

    updateStats: builder.mutation({
      query: ({ id, ...updatedStatsData }) => ({
        url: `/api/stats/update/${id}`,
        method: "PATCH",
        body: updatedStatsData,
      }),
      invalidatesTags: ["Stats"],
    }),

    // -----------------------------Banner queries-------------------------------

    getBanner: builder.query({
      query: () => "/api/banner/get-all",
      providesTags: ["Banner"],
    }),
    getBannerByContxtAndLang: builder.query({
      query: ({ context, language }) =>
        `/api/banner/get-all/?language=${language}&context=${context}`,
      providesTags: ["Banner"],
    }),
    addBanner: builder.mutation({
      query: (Banner) => ({
        url: `/api/banner/create`,
        method: "POST",
        body: Banner,
      }),
      invalidatesTags: ["Banner"],
    }),
    updateBanner: builder.mutation({
      query: ({ _id, updatedBannerData }) => ({
        url: `/api/banner/update/${_id}`,
        method: "PATCH",
        body: updatedBannerData,
      }),
      invalidatesTags: ["Banner"],
    }),
  }),
});

export const {
  useGetPromoQuery,
  useUpdatePromoMutation,
  useGetNewsQuery,
  useGetFAQsQuery,
  useGetFilteredFAQsQuery,
  useAddFAQsMutation,
  useUpdateFAQsMutation,
  useDeleteFAQsMutation,
  useGetStatsQuery,
  useUpdateStatsMutation,
  useGetBannerQuery,
  useGetBannerByContxtAndLangQuery,
  useAddBannerMutation,
  useUpdateBannerMutation,
} = api;
