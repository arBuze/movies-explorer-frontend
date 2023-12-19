import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import MenuPopup from '../MenuPopup/MenuPopup';
import Preloader from '../Preloader/Preloader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

  function handleMenuPopupOpen() {
    setIsMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setIsMenuPopupOpen(false);
  }

  return (
    <div className="page">

      <Header isLoggedIn={isLoggedIn} onMenuButtonClick={handleMenuPopupOpen} />
      <main className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
      <MenuPopup isOpen={isMenuPopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
