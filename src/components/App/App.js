import { useState } from 'react';
import './App.css';
import Header from './Header/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <Header isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
