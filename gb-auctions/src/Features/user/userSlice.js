import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  users: null,
  numberU: 0,
};

export const usersSlice = createSlice({
  name: "fetchUsers",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getTotalUsers.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getTotalUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.numberU = action.payload;
      });
      builder.addCase(getTotalUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Create asynchronous thunk to fetch all users
export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  const { data } = await axios.get("http://localhost:3036/api/v1/users"); // Adjust the API endpoint as per your backend
  return data;
});



// total number of users

export const getTotalUsers = createAsyncThunk(
    "emails/getTotalUsers",
    async () => {
      try {
        const response = await axios.get("http://localhost:3036/api/v1/users/count");
        return response.data.total; // Assuming the API returns the total count in a 'total' field
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );
