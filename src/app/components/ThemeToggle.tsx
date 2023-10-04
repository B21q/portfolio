'use client'

import { motion } from 'framer-motion';
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
    <motion.div
        whileHover={{ scale: 1.25 }}
        transition={{ duration: 0 }}
        className="flex items-center gap-3 transition-transform duration-300"
      >
    <button
      onClick={toggleTheme}
      className="text-white text-xl transition-all duration-1000"
    >
      {isDarkMode ? (
        <>
          <FiSun className="text-gray-200 hover:text-yellow-200" />
        </>
      ) : (
        <>
          <FiMoon className="text-bg hover:text-imoon" /> 
        </>
      )}
    </button>
    </motion.div>
  );
};

export default ThemeToggle;
