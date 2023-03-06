import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from '../features/favorites/favoritesSlice';
import searchReducer from '../features/search/searchSlice'
export const store = configureStore({
  reducer: {
    searchImg: searchReducer,
    favPhotos: favoritesSlice
  },
});
