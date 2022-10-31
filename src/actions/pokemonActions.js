import Swal from 'sweetalert2'

import { types } from "../types/types"

const base_url = process.env.REACT_APP_API_URL;

export const pokemonAll = () => {
	let pokemons = [];

	return async(dispatch) => {
		try {
			await fetch(base_url + 'pokemon')
				.then(res => res.json())
				.then(data => {
					dispatch({
						type: types.pokemonAll,
						payload: data
					});

					pokemons = data;
				})
			 
			// await pokemonGet(pokemons);
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

export const pokemonGet = () => {
	let pokemons = [];

	return async(dispatch) => {
		try {
			await fetch(base_url + 'pokemon')
				.then(res => res.json())
				.then(data => {
					dispatch({
						type: types.pokemonAll,
						payload: data
					});

					pokemons = data;
				})
			 
			await pokemons.results.map((pokemon) => {
				fetch(pokemon.url)
					.then(res => res.json())
					.then(data => {
						dispatch({
							type: types.pokemonGet,
							payload: data
						});
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

	// return async(dispatch) => {
	// 	try {
	// 		// await fetch(base_url + 'pokemon')
	// 		// 	.then(res => res.json())
	// 		// 	.then(data => {
	// 		// 		pokemons = data;
	// 		// 	})
	// 		// console.log(1111);
	// 		// await pokemons.results.map((pokemon) => {
	// 		// 	console.log(pokemon);
	// 		// 	fetch(pokemon.url)
	// 		// 		.then(res => res.json())
	// 		// 		.then(data => {
	// 		// 			dispatch({
	// 		// 				type: types.pokemonGet,
	// 		// 				payload: data
	// 		// 			});
	// 		// 		})
	// 		// 		.catch((e) => {
	// 		// 			Swal.fire({
	// 		// 				title: 'Error!',
	// 		// 				text: 'No se encontro el pokemon',
	// 		// 				icon: 'error',
	// 		// 				confirmButtonText: 'Ok'
	// 		// 			})
	// 		// 		})
	// 		// })
			
			
	// 	} catch (error) {
	// 		Swal.fire({
	// 			title: 'Error!',
	// 			text: 'Ah ocurrido un error',
	// 			icon: 'error',
	// 			confirmButtonText: 'Ok'
	// 		})
	// 	}
	// }
}