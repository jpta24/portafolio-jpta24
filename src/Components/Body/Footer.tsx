import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<footer className='align-self-end text-center mb-2'>
			<p className='footer py-3'>
				Copyright © {year}. @jpta24 <br />
				All Rights Reserved
			</p>
		</footer>
	);
};

export default Footer;
