import GlobalStyle from './GlobalStyles'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
			<GlobalStyle />
			<Navbar />
		</BrowserRouter>
  );
}

export default App;
