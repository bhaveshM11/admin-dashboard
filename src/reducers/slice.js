import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk for fetching items from the API
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data;
});

// Create a slice for managing items state
const itemsSlice = createSlice({
  name: "items",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    counter: 0,
  },
  reducers: {
    increment: (state, action) => {
    state.counter++;
    },
    decrement: (state, action) => {
      state.counter--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default itemsSlice.reducer;
export const {increment, decrement} = itemsSlice.actions;