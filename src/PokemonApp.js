import React from 'react'
import { Popover } from '@headlessui/react'

import { PokemonScreen } from './components/pokemon/PokemonScreen'
import { Header } from './elements/Header'

export const PokemonApp = () => {
  return (
    <>
      <Header />

      <Popover>
        <PokemonScreen />
      </Popover>
    </>
  )
}
