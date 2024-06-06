// src/features/users/adminSlice.ts
import adminServices from "@/Services/adminServices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/Store/Store";

type State = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  StatsData: any;
  FaqData: any;
  Promo: any;
};

const initialState: State = {
  status: "idle",
  error: null,
  StatsData: [],
  FaqData: [],
  Promo: [],
};

export const getAllFAQsAsync = createAsyncThunk(
  "admin/getAllFAQs",
  async () => {
    const response = await adminServices.getAllFAQs();
    if (!response) {
      throw new Error("No data received from the API");
    }
    return response;
  }
);

export const getStatsAsync = createAsyncThunk("admin/getStats", async () => {
  const response = await adminServices.getStats();
  console.log(response);
  if (!response) {
    throw new Error("No data received from the API");
  }
  return response;
});

export const getFilteredFAQsAsync = createAsyncThunk(
  "admin/getFilteredFAQs",
  async (filterData: { filter: string; type: string }) => {
    const response = await adminServices.getFilteredFAQs(filterData);
    // console.log(response);
    if (!response) {
      throw new Error("No data received from the API");
    }
    return response;
  }
);

export const getPromoAsync = createAsyncThunk("admin/getPromo", async () => {
  const response = await adminServices.getPromo();
  // console.log(response);
  if (!response) {
    throw new Error("No data received from the API");
  }
  return response;
});

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFAQsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllFAQsAsync.fulfilled, (state, action) => {
        state.FaqData = action.payload;
        state.status = "succeeded";
      })
      .addCase(getAllFAQsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })
      .addCase(getStatsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getStatsAsync.fulfilled, (state, action) => {
        state.StatsData.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(getStatsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })
      .addCase(getFilteredFAQsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFilteredFAQsAsync.fulfilled, (state, action) => {
        state.FaqData = action.payload;
        state.status = "succeeded";
      })
      .addCase(getFilteredFAQsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })
      .addCase(getPromoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPromoAsync.fulfilled, (state, action) => {
        state.Promo = action.payload;
        state.status = "succeeded";
      })
      .addCase(getPromoAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const selectFAQsData = (state: RootState) => state.admin.FaqData;
export const selectPromoData = (state: RootState) => state.admin.Promo;
export const selectStats = (state: RootState) => state.admin.StatsData;
export const selectFAQStatus = (state: RootState) => state.admin.status;

export default adminSlice.reducer;
