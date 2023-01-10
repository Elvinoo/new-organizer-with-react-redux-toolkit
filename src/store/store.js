import { configureStore } from "@reduxjs/toolkit";
import favoritesSliceReducer from "../feauters/FavoritesSlice/FavoritesSlice";
import searchSliceReducer from "../feauters/SearchSlice/SearchSlice";
//import idSliceReducer from "../feauters/IdSlice/IdSlice";
export const store = configureStore(
    {
        reducer: {
            movies: searchSliceReducer,
            favoriteList: favoritesSliceReducer,
            // id: idSliceReducer,

        }
    })