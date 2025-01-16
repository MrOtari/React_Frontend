import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import About from "./pages/About";
import PrivateRoute from "./routes/PrivateRoute";
import { MovieProvider } from "./context/MovieContext";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/favourites"
            element={
              <PrivateRoute>
                <Favourites />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;
