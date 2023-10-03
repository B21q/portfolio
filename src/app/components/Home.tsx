'use client'

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

import { BsArrowRightShort } from 'react-icons/bs';

import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import { BiCheckboxSquare } from 'react-icons/bi';

function Home() {
  return (
    <section className="h-screen flex flex-col justify-center -my-16 mx-4 md:mx-8 lg:mx-40 xl:mx-40 md:mb-8 lg:mb-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        <p className="flex pb-2 md:py-2 text-start font-light text-5xl md:text-5xl md:text-start lg:text-5xl lg:text-start xl:text-5xl xl:text-start dark:text-gray-100 drop-shadow-sm">
          Hello, I am
        </p>
        <h1 className="text-5xl font-medium md:py-2 text-bg dark:text-gray-50 font-manrope">
          Yan Santos
        </h1>
        <h2 className="gap-2 font-bold font-manrope text-4xl capitalize inline-flex pt-2 tracking-tighter md:pt-0 md:text-5xl md:block text-bg-alt dark:text-gray-50">
          <span className="text-iblue-10">Front-end</span> Developer
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        className="font-sora lg:w-2/3 lg:mr-4 py-8"
      >
        <h1 className="flex text-start text-lg md:text-xl md:text-start lg:text-xl lg:text-start xl:text-xl xl:text-start dark:text-gray-200">
          Combining design, front-end development and professional skills to
          highlight your product and create incredible projects with creativity
          and programming.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2 }}
      >
        <h1 className="font-sora font-medium text-lg md:text-lg lg:text-lg xl:text-lg flex items-center dark:text-white">
          <span className="flex items-center text-red-700 animate-pulse w-4 h-4">
            <BiCheckboxSquare />
          </span>
          <h2 className="flex items-center px-1 ">Latest project</h2>
          <span className="text-2xl">
            <BsArrowRightShort />
          </span>
          <a
            className="hover:-translate-y-2 transition-all duration-300 underline decoration-iblue-10 px-1"
            href="Boo"
          >
            Boo
          </a>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.6 }}
        className='flex gap-4'
      >
      <motion.div
        whileHover={{ scale: 1.25 }}
        transition={{ duration: 0 }}
        className="flex py-4 gap-3 transition-transform duration-300"
      >
        <a
          target='_blank'
          href='https://www.linkedin.com/in/yan-santos-7513a1244/'
          className="text-2xl text-bg dark:text-white font-sora font-bold rounded-sm transition-all duration-300"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.25 }}
        transition={{ duration: 0 }}
        className="flex py-4 gap-3 transition-transform duration-300"
      >
        <a
          target='_blank'
          href='https://github.com/b21q'
          className="text-2xl text-bg dark:text-white font-sora font-bold rounded-sm transition-all duration-300"
        >
          <FaGithub />
        </a>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.25 }}
        transition={{ duration: 0 }}
        className="flex py-4 gap-3 transition-transform duration-300"
      >
        <a
          target='_blank'
          href=''
          className="text-2xl text-bg dark:text-white font-sora font-bold rounded-sm transition-all duration-300"
        >
          <FaDiscord />
        </a>
      </motion.div>
      </motion.div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
