import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/js/src/collapse.js';

interface Navbar {
	Home: string;
	About: string;
	Skills: string;
	Portafolio: string;
	Contact: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Navbar = () => {
	const initialState = {
		Home: 'nav-link',
		About: 'nav-link',
		Skills: 'nav-link',
		Portafolio: 'nav-link',
		Contact: 'nav-link',
	};

	const [Active, setActive] = useState<Navbar>({
		Home: 'nav-link active',
		About: 'nav-link',
		Skills: 'nav-link',
		Portafolio: 'nav-link',
		Contact: 'nav-link',
	});

	const handleClick = (id: string) => {
		setActive({ ...initialState, [id]: 'nav-link active' });
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-dark fixed-top bg-dark justify-content-end'>
			<div>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarTogglerDemo02'
					aria-controls='navbarTogglerDemo02'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
					<ul className='navbar-nav me-auto ul-navbar px-4'>
						<li className='nav-item'>
							<Link
								className={Active.Home}
								to='#hero'
								onClick={() => {
									handleClick('Home');
								}}
							>
								Home
								<span className='visually-hidden'>(current)</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className={Active.About}
								to='#about'
								onClick={() => {
									handleClick('About');
								}}
							>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className={Active.Skills}
								to='#skills'
								target='_self'
								onClick={() => {
									handleClick('Skills');
								}}
							>
								Skills
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className={Active.Portafolio}
								to='#'
								onClick={() => {
									handleClick('Portafolio');
								}}
							>
								Portafolio
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className={Active.Contact}
								to='#'
								onClick={() => {
									handleClick('Contact');
								}}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
