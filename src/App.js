import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import ThemeContext from './Context/ThemeContext';

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
}

export default App;
