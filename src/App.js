import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import ThemeContext from './Context/ThemeContext';
import LanguageContext from './components/localization/LanguageContext';
import { LanguageProvider } from './components/localization/localContext/LocalContex';
import ReactCounter from './components/counter/reactCounter';

function App() {
  const themeHook = useState("light");
  return (
    <>
      <ThemeContext.Provider value={themeHook}>
        <Header />
        <Main />
      </ThemeContext.Provider>

      <LanguageProvider>
        <LanguageContext />
      </LanguageProvider>
      
      <ReactCounter/>
        
    </>
  );
}

export default App;
