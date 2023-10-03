'use client'

import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'; // Importe os ícones desejados

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-white text-xl hover:-translate-y-2 transition-all duration-300"
    >
      {isDarkMode ? (
        <>
          <FiSun className="mr-2 text-gray-200 hover:text-yellow-200" />
        </>
      ) : (
        <>
          <FiMoon className="mr-2 text-bg hover:text-imoon" /> 
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
