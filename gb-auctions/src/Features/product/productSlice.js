import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  products: null,
  success: false,
  product: null,
  getError: null,
  getLoading: null,
  getSuccess: false,
  delLoading: false,
  delError: null,
  delSuccess: false,
  totalP: 0,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearState: (state) => {
      state.error = null;
      state.success = false;
      state.delSuccess = false;
      state.delError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchProductById.pending, (state) => {
      state.getLoading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.getLoading = false;
      state.product = action.payload;
      state.getSuccess = true;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.getLoading = false;
      state.getError = action.error.message;
    });

    builder.addCase(deleteProduct.pending, (state) => {
      state.delLoading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.delLoading = false;
      state.delSuccess = true;
      // state.products = state.products = state.products.filter(product => product.id !== action.payload.id)
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.delLoading = false;
      state.delError = action.payload;
    });


    builder.addCase(getTotalProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.totalP = action.payload;
    });
    builder.addCase(getTotalProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const createProduct = createAsyncThunk(
  "createProduct",
  async (apiData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3036/api/v1/product",
        apiData.data,
        {
          headers: {
            Authorization: `Bearer ${apiData.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 413) {
        return rejectWithValue("File size too large");
      }
      if (error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue("Some error occured please try again later");
      }
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get("http://localhost:3036/api/v1/product");
      return response.data.result;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export default productSlice.reducer;

// fetch single product

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (apiData, { rejectWithValue }) => {
    try {
      if (!apiData?.id) {
        return rejectWithValue("please provide id");
      }
      const response = await axios.get(
        `http://localhost:3036/api/v1/product/${apiData.id}`
      );

      return response.data.result; // Assuming the product data is in the 'result' property
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete the product

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (apiData, { rejectWithValue }) => {
    console.log(apiData)
    try {
      if (!apiData?.id) {
        return rejectWithValue("please provide id");
      }
      const response = await axios.delete(
        `http://localhost:3036/api/v1/product/${apiData.id}`
      );
      return response.data.result;
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data.message);
    }
  }
);


export const getTotalProducts = createAsyncThunk(
  "emails/getTotatProducts",
  async () => {
    try {
      const response = await axios.get("http://localhost:3036/api/v1/product/count");
      return response.data.total; // Assuming the API returns the total count in a 'total' field
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);


export const { clearState } = productSlice.actions;