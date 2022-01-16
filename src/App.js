import './App.css';

import Header from './components/Header'
import Home from './components/Home'

import ThemeContext from './ThemeContext';

import {useState} from 'react'

function App() {
  const [themeState, setThemeState]= useState('light');

  function toggleTheme(){
    setThemeState(prev => prev==='light'?'dark':'light')
  }

  return (
    <ThemeContext.Provider value={{theme: themeState, themeToggler: toggleTheme}}>
      <Header />
      <Home />

    </ThemeContext.Provider>
  );
}

export default App;
