import { configureStore } from "@reduxjs/toolkit"
import { pokemonReducer } from "../reducers/pokemonReducer"

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
})