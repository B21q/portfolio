import dynamic from 'next/dynamic'

import Navbar from "../About/Navbar"
import Footer from "../components/Footer"


import { SiTailwindcss, SiNeovim, SiTypescript } from 'react-icons/si'
import { TbBrandVscode, TbBrandNextjs } from 'react-icons/tb'
import { FaGithub, FaLinux, FaReact, FaRust, FaSpotify } from 'react-icons/fa'
import { FiFramer } from "react-icons/fi"
import { BsGit } from "react-icons/bs"

function About() {
    return (
        <section>
            <Navbar/>
            <div className="h-max mx-4 md:mx-8 lg:mx-40 xl:mx-40 py-16 font-manrope">
                <div className="flex flex-col">
                <p className="text-2xl  text-bg dark:text-gray-50 font-bold drop-shadow-sm">About-me</p>
                <h1 className="text-bg-alt dark:text-gray-300 text-lg pt-4 drop-shadow-sm">I am an Information Systems student who has been passionate about programming since I started exploring the world of Linux. I have front-end experience using mainly React with TypeScript and I'm currently learning Rust to expand my knowledge in low-level programming.</h1>
                <p className="text-2xl font-bold pt-8 dark:text-gray-200 drop-shadow-sm">Tools</p>
                <h1 className="text-bg-alt dark:text-gray-300 text-lg py-4 drop-shadow-sm">I develop projects using a variety of tools and technologies. Some of the resources I often use include:</h1>
            </div>
            <div translate="no" className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
             <span className="text-2xl flex gap-2 justify-center items-center shadow-md text-bg bg-black/5 dark:text-gray-50 border dark:bg-bg-alt dark:border-igray-10 p-2 rounded-sm">
                <FaReact />
                <h1 className="text-bg dark:text-gray-50 text-lg drop-shadow-sm">React</h1>
              </span>

              <span className="text-2xl flex gap-2 justify-center items-center shadow-md text-bg bg-black/5 dark:text-gray-50 border dark:bg-bg-alt dark:border-igray-10 p-2 rounded-sm">
                <TbBrandNextjs />
                <h1 className="text-bg dark:text-gray-50 text-lg drop-shadow-sm">Nextjs</h1>
              </span>

              <span className="text-2xl flex gap-2 justify-center items-center shadow-md text-bg bg-black/5 dark:text-gray-50 border dark:bg-bg-alt dark:border-igray-10 p-2 rounded-sm">
                <SiTypescript />
                <h1 className="text-bg dark:text-gray-50 text-lg drop-shadow-sm">Typescript</h1>
              </span>

              <span className="text-2xl flex gap-2 justify-center items-center shadow-md text-bg bg-black/5 dark:text-gray-50 border dark:bg-bg-alt dark:border-igray-10 p-2 rounded-sm">
                <FiFramer />
                <h1 className="text-bg dark:text-gray-50 text-lg drop-shadow-sm">Motion</h1>
              </span>

              <span className="text-2xl flex gap-2 justify-center items-center shadow-md text-bg bg-black/5 dark:text-gray-50 border dark:bg-bg-alt dark:border-igray-10 p-2 rounded-sm">
                <SiTailwindcss />
                <h1 className="text-bg dark:text-gray-50 text-lg drop-shadow-sm">Tailwind</h1>
              </span>

              <span className="text-2xl flex gap-2 justify-center items-center shadow-md text-bg bg-black/5 dark:text-gray-50 border dark:bg-bg-alt dark:border-igray-10 p-2 rounded-sm">
                <SiNeovim />
                <h1 className="text-bg dark:text-gray-50 text-lg drop-shadow-sm">Neovim</h1>
              </span>

              <span className="text-2xl flex gap-2 justify-center items-center shadow-md text-bg bg-black/5 dark:text-gray-50 border dark:bg-bg-alt dark:border-igray-10 p-2 rounded-sm">
                <TbBrandVscode />
                <h1 className="text-bg dark:text-gray-50 text-lg drop-shadow-sm">VSCode</h1>
              </span>

              <span className="text-2xl flex gap-2 justify-center items-center shadow-md text-bg bg-black/5 dark:text-gray-50 border dark:bg-bg-alt dark:border-igray-10 p-2 rounded-sm">
                <FaLinux />
                <h1 className="text-bg dark:text-gray-50 text-lg drop-shadow-sm">Linux</h1>
              </span>

              <span className="text-2xl flex gap-2 justify-center items-center shadow-md text-bg bg-black/5 dark:text-gray-50 border dark:bg-bg-alt dark:border-igray-10 p-2 rounded-sm">
                <FaRust/>
                <h1 className="text-bg dark:text-gray-50 text-lg drop-shadow-sm">Rust</h1>
              </span>

              <span className="text-2xl flex gap-2 justify-center items-center shadow-md text-bg bg-black/5 dark:text-gray-50 border dark:bg-bg-alt dark:border-igray-10 p-2 rounded-sm">
                <BsGit/>
                <h1 className="text-bg dark:text-gray-50 text-lg drop-shadow-sm">Git</h1>
              </span>

              <span className="text-2xl flex gap-2 justify-center items-center shadow-md text-bg bg-black/5 dark:text-gray-50 border dark:bg-bg-alt dark:border-igray-10 p-2 rounded-sm">
                <FaGithub/>
                <h1 className="text-bg dark:text-gray-50 text-lg drop-shadow-sm">Github</h1>
              </span>

              <span className="text-2xl flex gap-2 justify-center items-center shadow-md text-bg bg-black/5 dark:text-gray-50 border dark:bg-bg-alt dark:border-igray-10 p-2 rounded-sm">
                <FaGithub/>
                <h1 className="text-bg dark:text-gray-50 text-lg drop-shadow-sm">Github</h1>
              </span>



            </div>
          </div>

          <Footer/>
        </section>
    )
}

export default dynamic(() => Promise.resolve(About), { ssr: false })
