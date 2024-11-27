import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { signUpSlice } from "./auth/SignupSlice"
import { authSlice } from "./auth/LoginSlice";
import { contactSlice } from "./contact/contactSlice";
import { usersSlice } from "./user/userSlice";
import { productSlice } from "./product/productSlice";
import { emailSlice } from "./email/emailSlice";
import { reviewSlice } from "./review/reviewSlice";
import { bidSlice } from "./bidding/biddingSlice";

const persistConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
    reducer: {
      login: persistReducer(persistConfig, authSlice.reducer),
      signUp: signUpSlice.reducer,
      contactMessage: contactSlice.reducer,
      fetchUsers: usersSlice.reducer,
      products: productSlice.reducer,
      emails: emailSlice.reducer,  
      reviews: reviewSlice.reducer, 
      bids: bidSlice.reducer,
    },
})

export const persistor = persistStore(store)