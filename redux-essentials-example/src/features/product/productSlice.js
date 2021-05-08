import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addProduct } = productSlice.actions;

export const selectProducts = (state) => state.products.value;

export default productSlice.reducer;