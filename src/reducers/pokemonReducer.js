import { types } from "../types/types";

const initialState = {
    pokemons: {
        results: []
    }
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.pokemonAll:
            return {
                ...state,
                pokemons: action.payload
            }

        case types.pokemonGet:
            return {
                ...state,
                pokemonsDetails: [
                    ...state.pokemonsDetails,
                    action.payload
                ]
            }

        default:
            return state;
    }
}