import { configureStore } from '@reduxjs/toolkit';
import carouselSlice from '../features/carousel/carouselSlice';
import favoritesSlice from '../features/favorites/favoritesSlice';
import searchReducer from '../features/search/searchSlice'
export const store = configureStore({
  reducer: {
    searchImg: searchReducer,
    favPhotos: favoritesSlice,
    carouselPhotos: carouselSlice
  },
});
