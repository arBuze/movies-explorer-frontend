import { useEffect, useState } from 'react';
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
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { auth } from '../../utils/AuthApi';
import { RESPONSE_TEXTS, ERROR_TEXTS, ERROR_CODES } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContexts';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false); /* нужен, так как редирект на "/" происходит из-за начального значения isLoggedIn и НОС */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [cards, setCards] = useState([]);
  const [foundCards, setFoundCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [foundSavedCards, setFoundSavedCards] = useState([]);
  const [showFoundCards, setShowFoundCards] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [isSearchFailed, setIsSearchFailed] = useState(false);
  const [isSavedSearchFailed, setIsSavedSearchFailed] = useState(false);
  const [message, setMessage] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [profileError, setProfileError] = useState('');
  const [isUpdateResponseLoading, setIsUpdateResponseLoading] = useState(false);
  const { width } = useWindowDimensions();

  /* загрузка данных пользователя и сохраненных фильмов */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      Promise.all([mainApi.getUserInfo(token), mainApi.getSavedFilms(token)])
        .then(([userData, cardsData]) => {
          setCurrentUser(userData);
          setSavedCards(cardsData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn])

  /* загрузка найденных фильмов */
  useEffect(() => {
    const foundFilms = JSON.parse(localStorage.getItem('found-films'));
    if (foundFilms) {
      setFoundCards(foundFilms);
    }
  }, [])

  /* проверка токена */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth.checkToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
          }
        })
        .catch((err) => {
          localStorage.removeItem('jwt');
          console.log(err);
        })
        .finally(() => {
          setIsPageLoaded(true);
        });
    } else {
      setIsPageLoaded(true);
    }
  }, [])

  /* поиск по фильмам */
  function handleSearch(request, cardsToFilter = cards, searchInSaved = false) {
    const name = request.toLowerCase();

    const found = cardsToFilter.filter((item) => {
      const nameRU = item.nameRU.toLowerCase();
      const nameEN = item.nameEN.toLowerCase();

      return (nameRU.includes(name) || nameEN.includes(name));
    });

    if (searchInSaved) {
      if (found.length === 0) {
        setIsSavedSearchFailed(true);
      } else {
        setIsSavedSearchFailed(false);
      }
      setFoundSavedCards(found);
    } else {
      if (found.length === 0) {
        setIsSearchFailed(true);
      } else {
        setIsSearchFailed(false);
      }
      setFoundCards(found);
      localStorage.setItem('found-films', JSON.stringify(found));
      localStorage.setItem('request', request);
    }
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
          setMessage(ERROR_TEXTS.searchError);
          setIsSuccessful(false);
          setIsInfoToolTipOpen(true);
          console.log(err);
        })
        .finally(() => {
          setIsSearchLoading(false);
        })
    } else {
      handleSearch(request);
      setIsSearchLoading(false);
    }
  }

  function handleSavedSearchClick(request) {
    handleSearch(request, savedCards, true);
    setShowFoundCards(true);
  }

  function handleResetShowCards() {
    setShowFoundCards(false);
    setIsSavedSearchFailed(false);
  }

  /* сохранение фильма */
  function handleSaveClick(card) {
    const token = localStorage.getItem('jwt');
    mainApi.addSavedFilm(card, token)
      .then((newCard) => {
        setSavedCards([...savedCards, newCard]);
      })
      .catch((err) => {
        handleFailure(ERROR_TEXTS.saveError);
        console.log(err);
      });
  }

  /* удаление фильма из сохраненных */
  function handleDeleteClick(cardId) {
    const token = localStorage.getItem('jwt');
    mainApi.deleteSavedFilm(cardId, token)
      .then(() => {
        setSavedCards(savedCards.filter((item) => !(item._id === cardId)));
        setFoundSavedCards(foundSavedCards.filter((item) => !(item._id === cardId)));
        (savedCards.length === 1 || foundSavedCards.length === 1) && setIsSavedSearchFailed(true);
      })
      .catch((err) => {
        if (err === ERROR_CODES.notFound) {
          handleFailure(ERROR_TEXTS.findError);
        } else {
          handleFailure(ERROR_TEXTS.deleteError);
        }
        console.log(err);
      })
  }

  function handleEditClick() {
    setIsEdit(true);
  }

  /* обновление профиля */
  function handleUserUpdate(name, email) {
    setProfileError('');
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsUpdateResponseLoading(true);
      mainApi.updateUserData(name, email, token)
        .then((res) => {
          setCurrentUser(res);
          setIsEdit(false);
          handleSuccess(RESPONSE_TEXTS.saveData);
        })
        .catch((err) => {
          if (err === ERROR_CODES.conflict) {
            setProfileError(ERROR_TEXTS.sameEmailError);
          } else {
            setProfileError(ERROR_TEXTS.upadateProfileError);
          }
        })
        .finally(() => {
          setIsUpdateResponseLoading(false);
        })
    }
  }

  /* вывод сообщения */
  function handleFailure(text) {
    setMessage(text);
    setIsSuccessful(false);
    setIsInfoToolTipOpen(true);
  }

  function handleSuccess(text) {
    setMessage(text);
    setIsSuccessful(true);
    setIsInfoToolTipOpen(true);
  }

  /* авторизация */
  function handleRegister() {
    setIsLoggedIn(true);
    handleSuccess(RESPONSE_TEXTS.register);
  }

  function handleLogin() {
    setIsLoggedIn(true);
    handleSuccess(RESPONSE_TEXTS.auth);
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    setCurrentUser({});
    setFoundCards([]);
    setSavedCards([]);
    localStorage.removeItem('jwt');
    localStorage.removeItem('found-films');
    localStorage.removeItem('request');
    localStorage.removeItem('filter');
  }

  /* управление попапами */
  function handleMenuPopupOpen() {
    setIsMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setIsMenuPopupOpen(false);
    setMessage('');
    setIsInfoToolTipOpen(false);
  }

  return (
    <div className="page">
      <Header isLoggedIn={isLoggedIn} onMenuButtonClick={handleMenuPopupOpen} width={width} />
      <main className="content">
        <CurrentUserContext.Provider value={currentUser}>
        { isPageLoaded &&
          (<Routes>
            <Route path="/" element={<Main width={width} />} />
              <Route path="/movies" element={<ProtectedRoute element={Movies} loggedIn={isLoggedIn}
                cards={foundCards} onSearchClick={handleSearchClick}
                isLoading={isSearchLoading} isFailed={isSearchFailed}
                savedCards={savedCards} onSaveClick={handleSaveClick}
                onDeleteClick={handleDeleteClick} width={width} />} />
              <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} loggedIn={isLoggedIn}
                cards={showFoundCards ? foundSavedCards : savedCards}
                onSearchClick={handleSavedSearchClick} isLoading={isSearchLoading}
                isFailed={isSavedSearchFailed} onDeleteClick={handleDeleteClick}
                resetShowCards={handleResetShowCards} width={width} />} />
              <Route path="/profile" element={<ProtectedRoute element={Profile} loggedIn={isLoggedIn}
                isEdit={isEdit} onEditClick={handleEditClick}
                onDataUpdate={handleUserUpdate} onSignOut={handleSignOut}
                error={profileError} isLoading={isUpdateResponseLoading} />} />
              <Route path="/signup" element={<Register onRegister={handleRegister} onFailure={handleFailure} />} />
              <Route path="/signin" element={<Login onLogin={handleLogin} onFailure={handleFailure} />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>)
        }
        </CurrentUserContext.Provider>
      </main>
      <Footer width={width} />
      <MenuPopup isOpen={isMenuPopupOpen} onClose={closeAllPopups} width={width} />
      <InfoToolTip isOpen={isInfoToolTipOpen} isSuccessful={isSuccessful} message={message} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
