import { types } from "../types/types";

const initialState = {
    pokemons: {
        results: []
    },
    pokemonSelected: {
        abilities: [],
        stats: [],
        species: {}
    }
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.pokemonAll:
            return {
                ...state,
                pokemons: action.payload
            }

        case types.pokemonGetId:
            return {
                ...state,
                pokemonSelected: action.payload
            }

        default:
            return state;
    }
}