
import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { MainWeb } from './MainWeb';

function App() {
	const [navigateToApp, setNavigateToApp] =useState(false);
	const [navigateToLandingPage, setNavigateToLandingPage]=useState(true);

	const togglePopUp = () => {
		setNavigateToApp(!navigateToApp);
		setNavigateToLandingPage(!navigateToLandingPage);
	};
	return (
		<>
			{navigateToApp && <MainWeb/> }
			{navigateToLandingPage && 
			<LandingPage
				onClick={togglePopUp}/>
			}
		</>
	);
}

export default App;
