import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthPage from './components/authPage/AuthPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AuthPage />
			</BrowserRouter>
		</div>
	);
}

export default App;
