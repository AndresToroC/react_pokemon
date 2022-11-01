import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PokemonDetail } from '../components/pokemon/PokemonDetail';
import { PokemonScreen } from "../components/pokemon/PokemonScreen";

export const AppRoute = () => {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<PokemonScreen />} />
				<Route path="pokemon/:pokemonId" element={<PokemonDetail />} />
			</Routes>
		</BrowserRouter>
  )
}