import { configureStore } from "@reduxjs/toolkit";
import User from './UserSlice'
import Product from './ProductSlice'
import Cart from './CartSlice'


export const Store = configureStore({
    reducer:{
    User,Product,/*Cart*/
}
})