import Swal from 'sweetalert2'

import { types } from "../types/types"

const base_url = process.env.REACT_APP_API_URL;

export const pokemonAll = () => {
	return async(dispatch) => {
		try {
			await fetch(base_url + 'pokemon')
				.then(res => res.json())
				.then(data => {
					dispatch({
						type: types.pokemonAll,
						payload: data
					});
				})
		} catch (error) {
			Swal.fire({
				title: 'Error!',
				text: 'Ah ocurrido un error',
				icon: 'error',
				confirmButtonText: 'Ok'
			})
		}
	}
}

export const pokemonGetId = (pokemonId) => {
	return async(dispatch) => {
		try {
			await fetch(base_url + `pokemon/${ pokemonId }`)
				.then(res => res.json())
				.then(data => {
					dispatch({
						type: types.pokemonGetId,
						payload: data
					})
				})
		} catch (error) {
			Swal.fire({
				title: 'Error!',
				text: 'Ah ocurrido un error',
				icon: 'error',
				confirmButtonText: 'Ok'
			})
		}
	}
}