import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favList: JSON.parse(localStorage.getItem('favList')) || [],
}

const setInLocalStorage = (photos) => {
    localStorage.setItem('favList', JSON.stringify(photos))
}

export const favoritesSlices = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addPhotoFavorites: (state,action) => {
            if([...state.favList].some(photo => photo.id === action.payload.id)){
                state.favList = [...state.favList]
            }else{
                state.favList = [...state.favList, action.payload]
            }

            setInLocalStorage(state.favList)
        },

        removePhotoFavorite: (state,action) => {
            state.favList = state.favList.filter(
                (photo) => photo.id !== action.payload
            )
                setInLocalStorage(state.favList)
        },

        editPhotoDescription: (state,action) =>{
            state.favList = state.favList.map((photo) => {
                if(photo.id === action.payload.id){
                    photo.description = action.payload.description;
                }
                return photo;
            })
            setInLocalStorage(state.favList)
        },

        filterFavoritesDescription: (state,action) => {
            const filterDescription = action.payload;
            state.favList = JSON.parse(localStorage.getItem('favList')) || []

            if(filterDescription && filterDescription!== ''){
                state.favList = state.favList.filter(
                    (photo) => photo.description && photo.description.toLowerCase().includes(filterDescription.toLowerCase())
                )
            }
        }
    }
})

export default favoritesSlices.reducer;

export const { 
    addPhotoFavorites, 
    removePhotoFavorite, 
    editPhotoDescription, 
    filterFavoritesDescription 
} = favoritesSlices.actions