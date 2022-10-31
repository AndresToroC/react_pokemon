import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pokemonAll, pokemonGet } from '../../actions/pokemonActions';

export const PokemonScreen = () => {
  const dispatch = useDispatch();

  const { pokemons } = useSelector(state => state.pokemon);
  
  useEffect(() => {
    dispatch(pokemonAll());
  }, [dispatch])
  
  return (
    <>
      <div className="mx-auto max-w-2xl py-10 px-4 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pokemons</h2>
        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8">
          {
            pokemons.results.map(({ name, url }) => (
              <div key={ url } className="group relative">
                <div className="h-60 rounded-lg bg-yellow-50 group-hover:opacity-70">
                  <img
                    src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ url.split('/')[6] }.svg` }
                    alt="-"
                    className="w-44 h-56 object-center py-10"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <b className='text-md uppercase '>
                        { name }
                      </b>
                    </h3>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
