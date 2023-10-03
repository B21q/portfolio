'use client'

import dynamic from 'next/dynamic';
import { motion, useAnimation } from "framer-motion";
import { useState } from 'react';

import { BiMenuAltRight, BiX } from 'react-icons/bi';
import ThemeToggle from '../components/ThemeToggle';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="sticky z-10 top-0 font-sora bg-iwhite dark:bg-bg lg:mx-96">
      <div className="flex justify-center items-center dark:text-gray-100 py-4">
        <span className='flex gap-4 text-xl'>

            <motion.div
            whileHover={{ scale: 1.25 }}
            transition={{ duration: 0 }}
            className="flex py-4 gap-3 transition-transform duration-300"
            >
              <a target='_blank' href="https://www.linkedin.com/in/yan-santos-7513a1244/"><FaLinkedin/></a>

            </motion.div>

            <motion.div
            whileHover={{ scale: 1.25 }}
            transition={{ duration: 0 }}
            className="flex py-4 gap-3 transition-transform duration-300"
            >
              <a target='_blank' href="https://github.com/b21q"><FaGithub/></a>
            </motion.div>

        </span>
        <span className='text-2xl'>

          <a className='text-bg dark:text-white text-xl p-2 rounded-sm flex items-center justify-center mx-32 w-2' href="/#Home">²B¹</a>
          
        </span>
        <ThemeToggle/>
        </div>
    </nav>
  );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
