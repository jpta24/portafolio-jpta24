import React from 'react';

import Tooltip from 'react-tooltip-lite';

import htmlI from './Assets/Img/Skills/html5.png';
import cssI from './Assets/Img/Skills/css.png';
import jsI from './Assets/Img/Skills/JSicon.png';

import mongoI from './Assets/Img/Skills/mongodbIcon.png';
import exI from './Assets/Img/Skills/ExIcon.png';
import reactI from './Assets/Img/Skills/ReactIcon.png';
import nodeI from './Assets/Img/Skills/NodeIcon.png';
import tsI from './Assets/Img/Skills/TSIcon.png';

import gitI from './Assets/Img/Skills/GITicon.png';
import githubI from './Assets/Img/Skills/githubicon.png';
import SassI from './Assets/Img/Skills/SassIcon.png';
import npmI from './Assets/Img/Skills/npmicon.png';
import bootI from './Assets/Img/Skills/BootstrapIcon.png';

import scrumI from './Assets/Img/Skills/ScrumIcon.png';
import teamLI from './Assets/Img/Skills/TeamLeadIcon.png';
import managerI from './Assets/Img/Skills/ManagerIcon.png';

const Skills = () => {
	return (
		<div id='skills' className='row text-center skills scrollY'>
			<h2 className='titleSk'>My Skills</h2>

			<div className='card-body mx-auto col-md-4'>
				<h4>BASICS</h4>
				<div className='mx-auto skillsC'>
					<img src={htmlI} alt='HTML' className='mx-2 imgI' />
					<img src={cssI} alt='CSS' className=' mx-2 imgI' />
					<img src={jsI} alt='CSS' className='mx-2 imgI' />
				</div>
			</div>
			<div className='card-body mx-auto col-md-8'>
				<h4>ADVANCED</h4>
				<div className='mx-auto'>
					<img src={mongoI} alt='HTML' className='mx-2 imgI' />
					<img src={exI} alt='CSS' className='mx-2 imgI' />
					<img src={reactI} alt='CSS' className='mx-2 imgI' />
					<img src={nodeI} alt='CSS' className='mx-2 imgI' />
					<img src={tsI} alt='CSS' className='mx-2 imgI' />
				</div>
			</div>
			<div className='card-body mx-auto col-md-8'>
				<h4>TOOLS</h4>
				<div className='mx-auto'>
					<img src={gitI} alt='HTML' className='mx-2 imgI' />
					<img src={githubI} alt='CSS' className=' mx-2 imgI' />
					<img src={SassI} alt='CSS' className='mx-2 imgI' />
					<img src={bootI} alt='CSS' className='mx-2 imgI' />
					<img src={npmI} alt='CSS' className='mx-2 imgI' />
				</div>
			</div>
			<div className='card-body mx-auto col-md-4'>
				<h4>OTHERS</h4>
				<div className='row mx-auto'>
					<div className='col-md-4'>
						<Tooltip content='Scrum Method' direction='down'>
							<img src={scrumI} alt='HTML' className='mx-2 imgI' />
						</Tooltip>
					</div>
					<div className='col-md-4'>
						<Tooltip content='Team Working' direction='down'>
							<img src={teamLI} alt='CSS' className='mx-2 imgI' />
						</Tooltip>
					</div>
					<div className='col-md-4'>
						<Tooltip content='Team Leader' direction='down'>
							<img src={managerI} alt='CSS' className='mx-2 imgI' />
						</Tooltip>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
