import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  success: false,
  emails: null,
  total: 0,
};

export const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    clearState: (state) => {
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createEmails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createEmails.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(createEmails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getTotalEmails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalEmails.fulfilled, (state, action) => {
      state.loading = false;
      state.total = action.payload;
    });
    builder.addCase(getTotalEmails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getAllMails.pending,(state)=>{
        state.loading = true;
    });
    builder.addCase(getAllMails.fulfilled,(state,action)=>{
        state.loading = false;
        state.emails = action.payload;
    });
    builder.addCase(getAllMails.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload

    })
  },
});

// Creata Emails

export const createEmails = createAsyncThunk(
  "emails",
  async (apiData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3036/api/v1/email",
        apiData
      );
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("error occurs");
    }
  }
);


export const getAllMails = createAsyncThunk('getAllMails', async(apiData, {rejectWithValue}) => {
  try {
      const { data } = await axios.get("http://localhost:3036/api/v1/email", apiData);
      return data;
  } catch (error) {
      return rejectWithValue('Error Occured During Fetching Contact')
  }
})



export const getTotalEmails = createAsyncThunk(
  "emails/getTotalEmails",
  async () => {
    try {
      const response = await axios.get("http://localhost:3036/api/v1/email/count");
      return response.data.total; // Assuming the API returns the total count in a 'total' field
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const { clearState } = emailSlice.actions;
export default emailSlice.reducer;
