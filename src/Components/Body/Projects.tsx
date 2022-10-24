import React, { useState } from 'react';

import { ProjectInterface } from './ProjectInterface';
import ProjectItem from './ProjectItem';

import projectsData from './projects.module';

const Projects = () => {
	const [Projects] = useState<ProjectInterface[]>(projectsData);

	return (
		<div id='projects' className='row text-center projects scrollY'>
			<h2 className='titleSk'>My Projects</h2>

			<div className='row mx-auto'>
				{Projects.map((eachProject: ProjectInterface) => {
					return (
						<ProjectItem eachProject={eachProject} key={eachProject._id} />
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
