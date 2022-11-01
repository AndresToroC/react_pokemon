import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

import { pokemonGetId } from '../../actions/pokemonActions';
import { Header } from '../../elements/Header';

export const PokemonDetail = () => {
  const base_url_img = process.env.REACT_APP_API_IMG;

  const { pokemonId } = useParams();

  const dispatch = useDispatch();
  const { pokemonSelected: pokemon } = useSelector(state => state.pokemon);
  
  useEffect(() => {
    dispatch(pokemonGetId(pokemonId))
  }, [dispatch, pokemonId])
  
  return (
    <>
      <Header />

      <div className="mx-auto max-w-2xl py-10 px-4 lg:max-w-7xl lg:px-8">
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8'>
          <div className="h-50 sm:h-96 lg:h-96 xl:gap-x-8 rounded-lg bg-yellow-50">
            <img
              src={ `${ base_url_img }${ pokemonId }.svg` }
              alt="-"
              className="mx-auto py-16 w-44 h-90"
            />
          </div>
          <div>
            <div className='flex justify-between'>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 uppercase">Pokemon: { pokemon.name }</h2>
              <Link to="/" className='px-4 py-2 rounded-md bg-slate-600 text-white hover:bg-slate-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
              </Link>
            </div>
            <h2 className="pt-10 text-1xl font-bold tracking-tight text-gray-900 uppercase">Habilidades</h2>
            {
              pokemon.abilities.map(({ ability, slot }) => (
                <ul key={ slot }>
                  <li>
                    { ability.name }
                  </li>
                </ul>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
