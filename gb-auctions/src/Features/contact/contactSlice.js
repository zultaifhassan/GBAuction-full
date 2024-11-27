import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    success: false,
    contacts: null,
    totalC: 0,
    delLoading: false,
    delError: null,
    delSuccess: false
}


export const contactSlice = createSlice({
    name: 'contactMessage',
    initialState,
    reducers: {
        clearState: (state) => {
            state.error = null;
            state.success = false;
            state.delError = null;
            state.delSuccess = false;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(contactMessage.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(contactMessage.fulfilled,(state,action)=>{
            state.loading = false;
            state.success = true;
        });
        builder.addCase(contactMessage.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload  
        })


        builder.addCase(getAllContact.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(getAllContact.fulfilled,(state,action)=>{
            state.loading = false;
            state.contacts = action.payload;
        });
        builder.addCase(getAllContact.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
            
        })


        builder.addCase(getTotalContacts.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(getTotalContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.totalC = action.payload;
          });
          builder.addCase(getTotalContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });


          builder.addCase(deleteContact.pending, (state) => {
            state.delLoading = true;
          });
          builder.addCase(deleteContact.fulfilled, (state, action) => {
            state.delLoading = false;
            state.delSuccess = true;
            // state.products = state.products = state.products.filter(product => product.id !== action.payload.id)
          });
          builder.addCase(deleteContact.rejected, (state, action) => {
            state.delLoading = false;
            state.delError = action.payload;
          });
    }
});

export const contactMessage = createAsyncThunk('contactMessage', async(apiData, {rejectWithValue}) => {
    try {
        const { data } = await axios.post("http://localhost:3036/api/v1/contact", apiData);
        return data;
    } catch (error) {
        console.log(error)
        return rejectWithValue('Error Occured During Signup')
    }
});

export const getAllContact = createAsyncThunk('getAllContact', async(apiData, {rejectWithValue}) => {
    try {
        const { data } = await axios.get("http://localhost:3036/api/v1/contact", apiData);
        return data;
    } catch (error) {
        return rejectWithValue('Error Occured During Fetching Contact')
    }
})




export const deleteContact = createAsyncThunk(
    "contactMessage/deleteContact",
    async (apiData, { rejectWithValue }) => {
      console.log(apiData)
      try {
        if (!apiData?.id) {
          return rejectWithValue("please provide id");
        }
        const response = await axios.delete(
          `http://localhost:3036/api/v1/contact/${apiData.id}`
        );
        return response.data.result;
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.message);
      }
    }
  );


export const getTotalContacts = createAsyncThunk(
    "emails/getTotalContacts",
    async () => {
      try {
        const response = await axios.get("http://localhost:3036/api/v1/contact/count");
        return response.data.total; // Assuming the API returns the total count in a 'total' field
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );


export const { clearState } = contactSlice.actions;
export default contactSlice.reducer;