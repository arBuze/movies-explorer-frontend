import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import ProtectedRoute from '../ProtectedRoute';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { auth } from '../../utils/AuthApi';
import { errorTexts } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContexts';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [cards, setCards] = useState([]);
  const [foundCards, setFoundCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [isSearchFailed, setIsSearchFailed] = useState(false);
  const [message, setMessage] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [profileError, setProfileError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      Promise.all([mainApi.getUserInfo(token), mainApi.getSavedFilms(token)])
        .then(([userData, cardsData]) => {
          setCurrentUser(userData);
          setSavedCards(cardsData);
        })
        .catch( err => {
          console.log(err);
        });
    }
  }, [isLoggedIn])

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if(token) {
      auth.checkToken(token)
        .then(res => {
          if(res) {
            setIsLoggedIn(true);
          }
        })
        .catch(err => {
          localStorage.removeItem('jwt');
          console.log(err);
        });
    }
  }, [navigate])

  function handleSearch(request, cardsToFilter = cards) {
    const name = request.toLowerCase();

    const found = cardsToFilter.filter((item) => {
      const nameRU = item.nameRU.toLowerCase();
      const nameEN = item.nameEN.toLowerCase();

      return (nameRU.includes(name) || nameEN.includes(name));
    });

    if (found.length === 0) {
      setIsSearchFailed(true);
    } else {
      setIsSearchFailed(false);
    }
    setFoundCards(found);
  }

  function handleSearchClick(request) {
    setIsSearchLoading(true);
    if (cards.length === 0) {
      moviesApi.getAllMovies()
        .then((res) => {
          setCards(res);
          handleSearch(request, res);
        })
        .catch((err) => {
          setMessage(errorTexts.searchError);
          setIsSuccessful(false);
          setIsInfoToolTipOpen(true);
        })
        .finally(() => {
          setIsSearchLoading(false);
        })
    } else {
      handleSearch(request);
      setIsSearchLoading(false);
    }

  }

  function handleMenuPopupOpen() {
    setIsMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setIsMenuPopupOpen(false);
    setIsInfoToolTipOpen(false);
  }

  function handleEditClick() {
    setIsEdit(true);
  }

  function handleUserUpdate(name, email) {
    setProfileError('');
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.updateUserData(name, email, token)
        .then((res) => {
          setCurrentUser(res);
          setIsEdit(false);
        })
        .catch((err) => {
          if (err === 409) {
            setProfileError('Пользователь с таким email уже существует.');
          } else {
            setProfileError('При обновлении профиля произошла ошибка.');
          }
        })
    }
  }

  function handleRegister() {
    setIsLoggedIn(true);
    setMessage('Регистрация прошла успешно!');
    setIsSuccessful(true);
    setIsInfoToolTipOpen(true);
  }

  function handleLogin() {
    setIsLoggedIn(true);
    setMessage('Вы успешно авторизировались!');
    setIsSuccessful(true);
    setIsInfoToolTipOpen(true);
  }

  function handleFailure(text) {
    setMessage(text);
    setIsSuccessful(false);
    setIsInfoToolTipOpen(true);
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
  }

  return (
    <div className="page">
      <Header isLoggedIn={isLoggedIn} onMenuButtonClick={handleMenuPopupOpen} />
      <main className="content">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<ProtectedRoute element={Movies} loggedIn={isLoggedIn}
              cards={foundCards} onSearchClick={handleSearchClick}
              isLoading={isSearchLoading} isFailed={isSearchFailed} />} />
            <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} loggedIn={isLoggedIn}
              cards={savedCards} isLoading={isSearchLoading} isFailed={isSearchFailed} />} />
            <Route path="/profile" element={<ProtectedRoute element={Profile} loggedIn={isLoggedIn}
              isEdit={isEdit} onEditClick={handleEditClick}
              onDataUpdate={handleUserUpdate} onSignOut={handleSignOut}
              error={profileError} />} />
            <Route path="/signup" element={<Register onRegister={handleRegister} onFailure={handleFailure} />} />
            <Route path="/signin" element={<Login onLogin={handleLogin} onFailure={handleFailure} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      </main>
      <Footer />
      <MenuPopup isOpen={isMenuPopupOpen} onClose={closeAllPopups} />
      <InfoToolTip isOpen={isInfoToolTipOpen} isSuccessful={isSuccessful} message={message} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
