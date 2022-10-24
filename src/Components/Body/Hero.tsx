import React from 'react';
import { Link } from 'react-router-dom';

import Pdf from './Assets/Icons/Pdf';
import Download from './Assets/Icons/Download';

import imgs from "../../data/images.json";

const Hero = () => {
	return (
		<div id='hero' className='row hero scrollY'>
			<div className='col-md-5 mx-auto text-center'>
				<div className='mt-5'>
					<img className='photo mx-auto' src={imgs[0].profilePhoto} alt='profilePhoto' />
				</div>
				<div className='text-center text--content '>
					<h1 className='title'>Jean-Pierre Torres</h1>
					<h2 className='description animate__animated animate__zoomIn'>
						Junior Frontend <br></br>
						Web Development
					</h2>
				</div>
				<div className='col-md-6 p-3 mt-5 mx-auto DownLoadBo animate__animated animate__pulse'>
					<Link to='CV-Jean Pierre Torres.pdf' target='_blank' className='linkBo col-10' download>
						<Pdf stroke='whitesmoke' className='col-3' />
						<span className='col-6 mx-auto'>Download CV</span>
						<Download stroke='whitesmoke' className='col-3' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
