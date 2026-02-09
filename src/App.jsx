import React from 'react';
import './index.css'
import HeaderComponent from './components/Header';
import Down from './components/Down';
import Complex from './components/Complex';
import Step from './components/Step';
import Port from './components/Port';

function App() {
	return <div>
		<HeaderComponent/>
		<Down/>
		<Complex/>
		<Step/>
		<Port/>
	</div>;
}

export default App;
