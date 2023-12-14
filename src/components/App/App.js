import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Main />} />
        <Route path="/saved-movies" element={<Main />} />
        <Route path="/profile" element={<Main />} />
        <Route path="/signin" element={<Main />} />
        <Route path="/signup" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
