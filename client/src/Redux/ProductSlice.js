import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const config = {headers:{token:localStorage.getItem('token')}}

//add a Product
export const AddProduct = createAsyncThunk("Product/AddProduct", async(newProduct,{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.post('/api/Products/',newProduct,config)
        dispatch(getAllDataProducts())
        return data 
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }

})

// get all Products
export const getAllDataProducts = createAsyncThunk("Product/getAllDataProducts", async(_,{rejectWithValue})=>{
    try {
        const {data} = await axios.get('/api/Products/')
        return data;
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }
})

//Delete a Product
export const DeleteProduct = createAsyncThunk("Product/DeleteProduct", async(id,{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.delete(`/api/Products/${id}`)
        dispatch(getAllDataProducts())
        return data
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }

} )

//Update Data Product
export const UpdateDataProduct = createAsyncThunk("Product/UpdateDataProduct", async(UpdatedProduct,{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.put(`/api/Products/${UpdatedProduct._id}`,UpdatedProduct,config)
        dispatch(getAllDataProducts())
        return data
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }

} )

// get Product
export const getProductById = createAsyncThunk("Product/getProductById", async(id,{rejectWithValue})=>{
    try {
        const {data} = await axios.get(`/api/Products/${id}`,config)
        return data   
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }
})



const ProductSlice = createSlice({
    name:'Product',
    initialState:{
        isLoading:false,
        Product:{},
        Products:[],
        Errors : null
    },


reducers:{},
extraReducers:{

[AddProduct.pending] : (state)=>{
    state.isLoading = true
},
[AddProduct.fulfilled] : (state,{type,payload})=>{
    state.isLoading = false
    state.Product = payload
    
},
[AddProduct.rejected]: (state,{type,payload})=>{
    state.Errors = payload

},
[getAllDataProducts.pending] : (state)=>{
    state.isLoading = true
},
[getAllDataProducts.fulfilled] : (state,{type,payload})=>{
    state.isLoading = false
    state.Products = payload
},
[getAllDataProducts.rejected]: (state,{type,payload})=>{
    state.Errors = payload

},
[DeleteProduct.pending] : (state)=>{
    state.isLoading = true
},
[DeleteProduct.fulfilled] : (state,{type,payload})=>{
    state.isLoading = false
    state.Products= state.Products.filter(Product=> Product._id !== payload.DeleteProduct._id)
},
[DeleteProduct.rejected]: (state,{type,payload} )=>{
    state.Errors = payload

},
[UpdateDataProduct.pending] : (state)=>{
    state.isLoading = true
},
[UpdateDataProduct.fulfilled] : (state,{type,payload})=>{
    state.isLoading = false
    state.Products= state.Products.map(Product=>(Product._id == payload.UpdatedProduct)? {...Product, ...payload} : Product)
},
[UpdateDataProduct.rejected]: (state,{type,payload} )=>{
    state.Errors = payload
},

[getProductById.pending] : (state)=>{
    state.isLoading = true
},
[getProductById.fulfilled] : (state,{type,payload} )=>{
    state.isLoading = false
    state.Products = state.Products.filter(Product=> Product._id == payload.Showproduct._id)
},
[getProductById.rejected]: (state,{type,payload} )=>{
    state.Errors = payload
},
}
})


export default ProductSlice.reducer;
export const {logOut} = ProductSlice.actions