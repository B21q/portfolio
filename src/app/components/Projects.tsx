'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import { FaAngleRight } from 'react-icons/fa'

function Projects() {
  return (
    <section
      id="Projects"
      className="h-max flex flex-col mx-4 md:mx-8 lg:mx-40 xl:mx-40 xl:py-8"
    >
      <p className="text-2xl font-semibold dark:text-gray-50">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 py-12 hover:gap-6 transition-all duration-300">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0 }}
          className="hover:bg-bg/5 dark:hover:bg-white/5 transition-transform duration-300"
        >
          <div className="flex flex-col p-4 border border-gray-400 dark:border-igray-10 rounded-sm">
            <p
              translate="no"
              className="text-2xl font-sora font-bold text-bg dark:text-gray-100"
            >
              Corvus
            </p>
            <h1 className="py-4 font-sora text-bg-alt dark:text-gray-200">
              Corvus is my GTK themed project, aiming to deliver a highly
              customizable and aesthetically pleasing visual experience on Linux
              systems. It is based on valuing versatility and style, with a
              commitment to providing a unique and elegant interface.
            </h1>

            <div className="flex gap-4">
              <a
                className="bg-bg text-white dark:bg-white dark:text-black flex items-center justify-center p-2 rounded-sm w-20"
                href="Corvus"
              >
                <FaAngleRight />
                Page
              </a>

              <a
                className="bg-bg text-white dark:bg-white dark:text-black flex items-center justify-center w-20 p-2 rounded-sm"
                target="_blank"
                href="https://github.com/B21q/Corvus"
              >
                <FaAngleRight />
                Github
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0 }}
          className="hover:bg-bg/5 dark:hover:bg-white/5 transition-transform duration-300"
        >
          <div className="flex flex-col p-4 border border-gray-400 dark:border-igray-10 rounded-sm ">
            <p
              translate="no"
              className="text-2xl font-sora font-bold text-bg dark:text-gray-100"
            >
              Boo
            </p>
            <h1 className="py-4 font-sora text-bg-alt dark:text-gray-200">
              Boo is my latest project and a window manager built in Rust, the
              main goal is to provide an efficient and exceptionally
              customizable window management experience on Linux systems.
              Focused on minimalism, simplicity is at the heart of this project.
            </h1>
            <div translate="no" className="flex gap-4">
              <a
                className="bg-bg text-white dark:bg-white dark:text-black flex items-center justify-center p-2 rounded-sm w-20"
                href="Boo"
              >
                <FaAngleRight />
                Page
              </a>

              <a
                className="bg-bg text-white dark:bg-white dark:text-black flex items-center justify-center p-2 rounded-sm w-20"
                target="_blank"
                href="https://github.com/B21q/Boo"
              >
                <FaAngleRight />
                Github
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default dynamic(() => Promise.resolve(Projects), { ssr: false })
