import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [], 
    isLoading: false,
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
});

export default shopSlice.reducer;
