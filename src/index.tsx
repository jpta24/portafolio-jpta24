import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Body from './Components/Body/Body';
import NavbarModern from './Components/Navbar/NavbarModern';

import 'bootswatch/dist/cyborg/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<NavbarModern />
			<div className=''>
				<Switch>
					<Route exact path='/' component={Body} />
				</Switch>
			</div>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
