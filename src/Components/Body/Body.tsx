import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

const Body = () => {
	return (
		<div className='body container-fluid'>
			<Hero />
			<AboutMe />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
};

export default Body;
