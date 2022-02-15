import GlobalStyle from './GlobalStyles'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import PictureWall from './components/PictureWall/PictureWall';

function App() {
  return (
    <BrowserRouter>
			<GlobalStyle />
			<Navbar />
      <PictureWall />
		</BrowserRouter>
  );
}

export default App;
