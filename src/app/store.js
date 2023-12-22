import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";

const reducer = {
  auth: authReducer,
  message: messageReducer
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});

// store is use for create a reducer, because it states that when ever a set of usecase is changing it eplemnet all over the use hooks. 
