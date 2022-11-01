import { Popover } from '@headlessui/react'
import { Link } from 'react-router-dom'

import pokemonLogo from '../pokemonLogo.png'

export const Header = () => {
  return (
		<Popover className="relative bg-yellow-100">
			<div className='mx-auto max-w-7xl p-6'>
				<div className='flex justify-center'>
					<div>
						<Link to="/">
							<span className='sr-only'>Pokemon</span>
							<img className='h-28 w-auto' src={ pokemonLogo } alt="" />
						</Link>
					</div>
				</div>
			</div>
		</Popover>
  )
}
