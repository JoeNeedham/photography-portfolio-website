import GlobalStyle from './GlobalStyles'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import PictureWall from './components/PictureWall/PictureWall';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
			<GlobalStyle />
			<Navbar />
      <Routes>
        <Route exact path='/' element={<PictureWall/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/bookme' element={<PictureWall/>} />
      </Routes>
      <Footer />
		</BrowserRouter>
  );
}

export default App;
