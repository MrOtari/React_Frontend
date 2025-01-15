import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';

import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Login from './pages/Login';
import About from './pages/About';
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App;