'use client'

import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 0) {
          navbarRef.current.classList.add('shadow-3xl', 'dark:border-b', 'dark:border-igray-10');
        } else {
          navbarRef.current.classList.remove('shadow-3xl', 'dark:border-b', 'dark:border-igray-10');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonClick = () => {
    buttonControls.start({
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    });

    toggleMenu();
  };

  return (
    <nav ref={navbarRef} className="sticky z-10 top-0 font-sora bg-iwhite dark:bg-bg md:mx-4 lg:mx-36">
      <div className="flex justify-between items-center dark:text-gray-100 py-4 mx-4 md:mx-4">
      <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.6 }}
      className='flex gap-4'>
          <a className='text-bg dark:text-white text-xl rounded-sm flex items-center justify-center font-medium mt-1' href="/#Home">²B¹</a>
          <span className='hidden md:flex lg:flex xl:flex'><ThemeToggle/></span>
        </motion.span>


        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.6 }}
        className='flex gap-4'
        >
        <ul className="hidden md:flex md:items-center lg:flex lg:items-center xl:flex xl:items-center gap-8 font-open font-medium text-lg">
          <li><a className='link link-underline link-underline-black text-bg dark:text-gray-100' href="About">About</a></li>
          <li><a className='link link-underline link-underline-black text-bg dark:text-gray-100' href="#Projects">Projects</a></li>
          <li><a className='link link-underline link-underline-black text-bg dark:text-gray-100' href="#Experiences">Experiences</a></li>
        </ul>

      </motion.div>

        <div className="md:hidden lg:hidden xl:hidden transition-all duration-700">
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={handleButtonClick}
            className="text-3xl transition-all duration-700"
            animate={buttonControls}
          >
            {menuOpen ? <BiX /> : <BiMenuAltRight />}
          </motion.button>
        </div>
      </div>

      {menuOpen && (
        <ul className="z-50 top-0 md:hidden lg:hidden xl:hidden gap-4 dark:text-gray-50 drop-shadow-md">
          <div className='flex justify-center items-center text-center gap-4 dark:text-gray-100 mx-4 md:mx-8 lg:mx-16 xl:mx-16 pb-4'>
            <li><a href="About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Experiences">Experiences</a></li>
            <span className='flex justify-end text-bg'><ThemeToggle/></span>
          </div>
        </ul>
      )}
    </nav>
  )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
