import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  success: null,
  bids: [],
  getLoading:false,
  getError:null
};

export const bidSlice = createSlice({
  name: "bids",
  initialState,
  reducers: {
    clearState: (state) => {
      state.error = null;
      state.success = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createBids.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBids.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createBids.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProductBids.pending, (state) => {
        state.getLoading = true;
      })
      .addCase(getProductBids.fulfilled, (state,action) => {
        state.getLoading = false;
        state.bids = action.payload
      })
      .addCase(getProductBids.rejected, (state,action) => {
        state.getLoading = false;
        state.getError = action.payload
      })
  },
});

export const createBids = createAsyncThunk(
  "bids",
  async (apiData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3036/api/v1/bid",
        apiData.data,
        {
          headers: {
            Authorization: "Bearer " + apiData.token,
          },
        }
      );
      return data;
    } catch (error) {
      if(error?.response?.data?.message){
        return rejectWithValue(error.response.data.message)
      }else{
        return rejectWithValue("Some error occured please try again later")
      }
    }
  }
);
export const getProductBids = createAsyncThunk(
  "getProductBids",
  async (apiData, { rejectWithValue }) => {
    try {

      if(!apiData?.id){
        return rejectWithValue('Please provide id')
      }
      const { data } = await axios.get(
        `http://localhost:3036/api/v1/bid/get/${apiData.id}`);
      return data.bids;
    } catch (error) {
      if(error?.response?.data?.message){
        return rejectWithValue(error.response.data.message)
      }else{
        return rejectWithValue("Some error occured please try again later")
      }
    }
  }
);



export const { clearState } = bidSlice.actions;
export default bidSlice.reducer;
