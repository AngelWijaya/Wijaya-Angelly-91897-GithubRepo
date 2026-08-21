
import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { MainWeb } from './MainWeb';
import { MainWebNeuro } from './MainWebNeuro';

function App() {
	const [navigateToApp, setNavigateToApp] =useState(false);
	const [navigateToLandingPage, setNavigateToLandingPage]=useState(true);
	const[navigateToNeuroApp, setNavigateToNeuroApp]=useState(false);

	const togglePagesdefault = () => {
		setNavigateToLandingPage(!navigateToLandingPage);
		setNavigateToApp(!navigateToApp);
	};

	const toggleApp = () =>{
		setNavigateToApp(!navigateToApp);
		setNavigateToLandingPage(!navigateToLandingPage);
	};
	const toggleNeuroDiversity = () =>{
		setNavigateToLandingPage(!navigateToLandingPage);
		setNavigateToNeuroApp(!navigateToNeuroApp);
	 };
	return (
		<>
			{navigateToApp && 
				<MainWeb
					onClick={togglePagesdefault}
				/> }
			{navigateToLandingPage && 
			<LandingPage
				onClickApp={toggleApp}
				onClickNeuroDiv={toggleNeuroDiversity}
			/>
			}
			{navigateToNeuroApp && 
				<MainWebNeuro
					onClick={toggleNeuroDiversity}
				/>
			}
		</>
	);
}

export default App;
