import { Popover } from '@headlessui/react'

import pokemonLogo from '../pokemonLogo.png'

export const Header = () => {
  return (
		<Popover className="relative bg-yellow-100">
			<div className='mx-auto max-w-7xl p-6'>
				<div className='flex justify-center'>
					<div>
						<span className='sr-only'>Pokemon</span>
						<img className='h-28 w-auto' src={ pokemonLogo } alt="" />
					</div>
				</div>
			</div>
		</Popover>
  )
}
