import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    success: false,
    reviews: null,
    totalR: 0,

}


export const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        clearState: (state) => {
            state.error = null;
            state.success = false;
          },
    },
    extraReducers:(builder)=>{
        builder.addCase(createReview.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(createReview.fulfilled,(state,action)=>{
            state.loading = false;
            state.success = true;
        });
        builder.addCase(createReview.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload  
        })


        builder.addCase(fetchReviews.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(fetchReviews.fulfilled,(state,action)=>{
            state.loading = false;
            state.reviews = action.payload;
        });
        builder.addCase(fetchReviews.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
            
        })


        builder.addCase(getTotalReviews.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(getTotalReviews.fulfilled, (state, action) => {
            state.loading = false;
            state.totalR = action.payload;
          });
          builder.addCase(getTotalReviews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
    }
});

export const createReview = createAsyncThunk('createReview', async(apiData, {rejectWithValue}) => {
    try {
        const { data } = await axios.post("http://localhost:3036/api/v1/review", apiData.data);
        return data;
    } catch (error) {
        console.log(error)
        return rejectWithValue('Error Occured posting review')
    }
});


export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    try {
      const response = await axios.get("http://localhost:3036/api/v1/review");
      return response.data.result;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);


export const getTotalReviews = createAsyncThunk(
    "reviews/getTotalReviews",
    async () => {
      try {
        const response = await axios.get("http://localhost:3036/api/v1/review/count");
        return response.data.total; // Assuming the API returns the total count in a 'total' field
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );


export const { clearState } = reviewSlice.actions;
export default reviewSlice.reducer;