import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const config = {headers:{token:localStorage.getItem('token')}}

// Define the async thunk for adding an item to the cart
export const addItemToCart = createAsyncThunk('Cartt/addItemToCart',async (id,{rejectWithValue}) => {
   try {
       const {data} = await axios.post(`/api/Cart/${id}`,config);
       return data;
   } catch (error) {
       return rejectWithValue(error.response.data.message);
   }
 }
);

// Define the async thunk for removing an item from the cart
export const removeItemFromCart = createAsyncThunk('Cartt/removeItemFromCart',async (id,{rejectWithValue}) => {
   try {
       const {data} = await axios.delete(`/api/Cart/${id}`,config);
       return data;
   } catch (error) {
       return rejectWithValue(error.response.data.message);
   }
 }
);

// Define the cart slice
const CartSlice = createSlice({
 name: 'Cartt',
 initialState : {
   cartItems: [],
   status: 'idle',
   error: null,
 },

 reducers: {},
 extraReducers: (builder) => {
   // Add item to cart
   builder.addCase(addItemToCart.pending, (state) => {
     state.status = 'loading';
   });
   builder.addCase(addItemToCart.fulfilled, (state, action) => {
     state.status = 'succeeded';
     state.cartItems.push(action.payload);
   });
   builder.addCase(addItemToCart.rejected, (state, action) => {
     state.status = 'failed';
     state.error = action.payload;
   });

   // Remove item from cart
   builder.addCase(removeItemFromCart.pending, (state) => {
     state.status = 'loading';
   });
   builder.addCase(removeItemFromCart.fulfilled, (state, action) => {
     state.status = 'succeeded';
     state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
   });
   builder.addCase(removeItemFromCart.rejected, (state, action) => {
     state.status = 'failed';
     state.error = action.payload;
   });
 },
});


export default CartSlice.reducer;