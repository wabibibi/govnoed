import React from 'react';
import './index.css'
import HeaderComponent from './components/Header';
import Down from './components/Down';
import Complex from './components/Complex';
import Step from './components/Step';

function App() {
	return <div>
		<HeaderComponent/>
		<Down/>
		<Complex/>
		<Step/>
	</div>;
}

export default App;
