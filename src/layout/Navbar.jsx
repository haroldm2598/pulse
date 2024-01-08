import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';

import { handleClick } from '../action/reducer/pulseSlicer';
import ReactLogo from '../assets/images/pulseLogo.svg?react';

function Navbar() {
	const { navLinks, isClick } = useSelector((state) => state.pulseTemplate);
	const dispatch = useDispatch();

	return (
		<header className='max-w-6xl mx-auto p-5 lg:px-0 lg:py-10 flex justify-between items-center bg-white lg:bg-transparent'>
			<ReactLogo />

			<nav className='hidden lg:flex items-center gap-12'>
				<ul className='flex gap-10'>
					{navLinks?.map((item, index) => (
						<li key={index} className='nav__link'>
							<NavLink to={item.path}>{item.name}</NavLink>
						</li>
					))}
				</ul>

				<button className='btnEffect font-semibold'>Sign up</button>
			</nav>

			<div className='flex lg:hidden'>
				<div
					onClick={() => dispatch(handleClick(isClick))}
					className='cursor-pointer'
				>
					<IoMdMenu size={50} color='00ad6a' />
				</div>
				<AnimatePresence>
					{isClick && (
						<motion.nav
							className='absolute z-50 top-[12%] left-0 bg--greenWhite w-full h-full'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.3, type: 'tween', stiffness: 120 }}
						>
							<ul className='px-4 py-6 flex flex-col'>
								{navLinks?.map((item, index) => (
									<motion.li
										key={index}
										className='nav__link mb-5 text-4xl font-bold'
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.4, type: 'tween', stiffness: 90 }}
									>
										<NavLink to={item.path}>{item.name}</NavLink>
									</motion.li>
								))}
								<motion.button
									className='mt-10 btnFooterEffect font-bold'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.6, type: 'tween', stiffness: 120 }}
								>
									Sign Up for a Free 30-days Trial
								</motion.button>
							</ul>
						</motion.nav>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
}

export default Navbar;
