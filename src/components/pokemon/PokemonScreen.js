import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { pokemonAll } from '../../actions/pokemonActions';
import { Header } from '../elements/Header';
export const PokemonScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const base_url_img = process.env.REACT_APP_API_IMG;
  
  const { pokemons } = useSelector(state => state.pokemon);
  const [searchPokemon, setSearchPokemon] = useState('');
  
  useEffect(() => {
    dispatch(pokemonAll());
  }, [dispatch])

  const handleSearchPokemon = (e) => {
    e.preventDefault();
    
    if (!searchPokemon.trim()) {
      Swal.fire('', 'Debe de ingresar el nombre del pokemon', 'error');
      return;
    }

    navigate(`pokemon/${ searchPokemon }`);
  }

  const handlePreviousPage = (url) => {
    dispatch(pokemonAll(url));
  }

  const handleNextPage = (url) => {
    dispatch(pokemonAll(url));
  }
  
  return (
    <>
      <Header />
      
      <div className="mx-auto max-w-2xl py-10 px-4 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pokemons</h2>

        <div className='pt-10'>
          <form onSubmit={ handleSearchPokemon }>
            <div className='relative'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input 
                type="search" 
                className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                placeholder='Buscar Pokemon'
                onChange={ ({ target }) => setSearchPokemon(target.value) }
                value={ searchPokemon }
                />
              <button type="submit" className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Buscar</button>
            </div>
          </form>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8">
          {
            pokemons.results.map(({ name, url }) => (
              <Link to={ `pokemon/${ name }` } key={ url }>
                <div className="group relative">
                  <div className="h-60 rounded-lg bg-yellow-50 group-hover:opacity-70">
                    <img
                      src={ `${ base_url_img }${ url.split('/')[6] }.svg` }
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
              </Link>
            ))
          }
        </div>
        <div className='py-10 text-white flex justify-evenly'>
          <button onClick={ () => handlePreviousPage(pokemons.previous) } className="px-2 py-2 bg-slate-600 rounded-lg hover:bg-gray-500">Anterior</button>
          <button onClick={ () => handleNextPage(pokemons.next) } className="px-2 py-2 bg-slate-600 rounded-lg hover:bg-gray-500">Siguiente</button>
        </div>
      </div>
    </>
  )
}
