import { ProjectInterface } from './ProjectInterface';

import weatherApp from './Assets/Img/Projects/weatherAPP.png';
import FS01 from './Assets/Img/Projects/FullStackMEAR01.png';
import FS02 from './Assets/Img/Projects/FullStackMEAR02.png';
import FS03 from './Assets/Img/Projects/FullStackMEAR03.png';

import STLT01 from './Assets/Img/Projects/STLT01.png';
import STLT02 from './Assets/Img/Projects/STLT02.png';
import STLT03 from './Assets/Img/Projects/STLT03.png';

import FO01 from "./Assets/Img/Projects/FO01.png";
import FO02 from "./Assets/Img/Projects/FO02.png";
import FO03 from "./Assets/Img/Projects/FO03.png";
import FO04 from "./Assets/Img/Projects/FO04.png";
import FO05 from "./Assets/Img/Projects/FO05.png";
import FO06 from "./Assets/Img/Projects/FO06.png";
import FO07 from "./Assets/Img/Projects/FO07.png";

import GA01 from "./Assets/Img/Projects/GA01.png";
import GA02 from "./Assets/Img/Projects/GA02.png";
import GA03 from "./Assets/Img/Projects/GA03.png";
import GA04 from "./Assets/Img/Projects/GA04.png";
import GA05 from "./Assets/Img/Projects/GA05.png";

import PWR01 from "./Assets/Img/Projects/PWR01.png";
import PWR02 from "./Assets/Img/Projects/PWR02.png";
import PWR03 from "./Assets/Img/Projects/PWR03.png";
import PWR04 from "./Assets/Img/Projects/PWR04.png";

import htmlI from './Assets/Img/Skills/html5.png';
import cssI from './Assets/Img/Skills/css.png';
import jsI from './Assets/Img/Skills/JSicon.png';

import mongoI from './Assets/Img/Skills/mongodbIcon.png';
import exI from './Assets/Img/Skills/ExIcon.png';
import reactI from './Assets/Img/Skills/ReactIcon.png';
import nodeI from './Assets/Img/Skills/NodeIcon.png';
import tsI from './Assets/Img/Skills/TSIcon.png';

import gitI from './Assets/Img/Skills/GITicon.png';
import npmI from './Assets/Img/Skills/npmicon.png';
import bootI from './Assets/Img/Skills/BootstrapIcon.png';

const gitHubSVG =
	'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-github-1.png&r=0&g=0&b=0';

const gitHubSVG2 =
	'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-github-1.png&r=150&g=150&b=150';



const handlebarsI = 'https://cdn.iconscout.com/icon/free/png-256/handlebars-3-1175025.png';

const p5I = 'https://images.squarespace-cdn.com/content/v1/54ac6918e4b0867c63ce849d/1495161369392-C38EFPO0N428M1ZVGA2O/-oslcYof.png?format=1500w'

const projectsData: ProjectInterface[] = [
	{
		_id: 1,
		name: 'FOODIE',
		img: [FO01, FO02, FO03, FO04, FO05, FO06, FO07],
		technologies: [mongoI, exI, reactI, nodeI, bootI, npmI, gitI],
		repository: 'https://github.com/jpta24/Foodie-Client',
		description:
			'SPA for e-commerce, where users can create business account and sell products to clients',
		icon: gitHubSVG,
		url:'https://foodie-de.netlify.app/IronFood'
	},{
		_id: 2,
		name: 'PWR Playlists',
		img: [PWR01, PWR02, PWR03, PWR04],
		technologies: [mongoI, exI, handlebarsI, nodeI, npmI, gitI],
		repository: 'https://github.com/jpta24/PlaylistApp',
		description:
			'Web App to create YouTube videos playlists, and create notes with Timestamps',
		icon: gitHubSVG,
		url:'https://pwr-playlists.cyclic.app/'
	},{
		_id: 3,
		name: 'Guard Asteroid',
		img: [GA01, GA02, GA03, GA04, GA05],
		technologies: [htmlI, cssI, jsI, p5I, gitI],
		repository: 'https://github.com/jpta24/Guard-Asteroid',
		description:
			'Game of a Spaceship that has to shoot and destroy Asteroids as they come',
		icon: gitHubSVG,
		url:'https://jpta24.github.io/Guard-Asteroid/'
	},{
		_id: 4,
		name: 'FullStack MEAR - My Learning Videos',
		img: [FS01, FS02, FS03],
		technologies: [mongoI, exI, reactI, nodeI, tsI, bootI, npmI],
		repository: 'https://github.com/jpta24/FullStack-MERN-My-Fav-Videos',
		description:
			'React App to practice CRUD with database and using all FullStack technologies',
		icon: gitHubSVG,
	},
	{
		_id: 5,
		name: 'WeatherApp',
		img: [weatherApp],
		technologies: [reactI, nodeI, bootI, gitI],
		repository: 'https://github.com/jpta24/weather-time-app',
		description:
			'React App to practice external API usage and get weather for 3 cities, also managing date and date converts',
		icon: gitHubSVG2,
	},

	{
		_id: 6,
		name: 'SITELOTRAIGO Google Chrome Extension',
		img: [STLT01, STLT02, STLT03],
		technologies: [htmlI, cssI, jsI],
		repository: 'https://github.com/jpta24/Sitelotraigo_ChromeExtension',
		description:
			'Chrome Extension, for a Client to get Shipping Price to Colombia on every Amazon Product Website',
		icon: gitHubSVG,
	},
];

export default projectsData;
