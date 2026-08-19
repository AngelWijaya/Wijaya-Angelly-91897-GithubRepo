
import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { MainWeb } from './MainWeb';

function App() {
	const [navigateToApp, setNavigateToApp] =useState(false);
	const [navigateToLandingPage, setNavigateToLandingPage]=useState(true);

	const togglePages = () => {
		setNavigateToApp(!navigateToApp);
		setNavigateToLandingPage(!navigateToLandingPage);
	};


	return (
		<>
			{navigateToApp && 
				<MainWeb
					onClick={togglePages}
				/> }
			{navigateToLandingPage && 
			<LandingPage
				onClickApp={togglePages}
			/>
			}
		</>
	);
}

export default App;
