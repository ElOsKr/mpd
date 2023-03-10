import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPhotosCarousel } from './carouselPhotos';

const initialState = {
    photos: [],
    loading: false,
    error: false
};

export const carouselCall = createAsyncThunk(
    'search/getPhotosCarousel',
    async () => {
        return await getPhotosCarousel();
    }
);

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    extraReducers: {
        [carouselCall.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [carouselCall.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.photos = action.payload;
        },
        [carouselCall.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export default carouselSlice.reducer;