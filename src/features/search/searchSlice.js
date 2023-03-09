import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPhotos } from './callPhotosApi'

const initialState = {
    photos: [],
    loading: false,
    error: false
}

export const callApi = createAsyncThunk(
    'search/getPhotos',
    async (query) => {
        return await getPhotos(query);
    }
)

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: {
        [callApi.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [callApi.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.photos = action.payload;
            console.log("Fulfilled"+ state.isLoading)
        },
        [callApi.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export default searchSlice.reducer;