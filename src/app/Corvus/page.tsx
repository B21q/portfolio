'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'

import { motion } from 'framer-motion';

import { SiAlacritty, SiGtk, SiNeovim } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import { FaAngleDown, FaFirefox, FaSpotify } from 'react-icons/fa'

function Home() {
  return (
  <div className='bg-bg transition-all duration-300'>
    <section className="h-screen md:h-screen lg:h-screen xl:h-screen mx-4 md:mx-8 lg:mx-40 xl:mx-40 flex">
      <main className='flex flex-col justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-16'>
          <div className=''>

          <p translate='no' className='text-4xl text-gray-50 font-bold font-sora flex text-center justify-center mx-auto pb-8 lg:hidden'>Corvus</p>


          <Image
            className='block mx-auto lg:hidden'
            src="/Corvus.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />

          <div className="flex justify-center text-center gap-5 md:justify-center md:text-center lg:justify-normal lg:text-start lg:gap-4 xl:justify-start xl:text-start py-8">
                <span className="bg-iblue w-5 h-5 rounded-sm"></span>
                <span className="bg-icyan w-5 h-5 rounded-sm"></span>
                <span className="bg-igreen w-5 h-5 rounded-sm"></span>
                <span className="bg-iorange w-5 h-5 rounded-sm"></span>
                <span className="bg-ipurple w-5 h-5 rounded-sm"></span>
                <span className="bg-ipink w-5 h-5 rounded-sm"></span>
                <span className="bg-ired w-5 h-5 rounded-sm"></span>
                <span className="bg-iyellow w-5 h-5 rounded-sm"></span>
            </div>
            
            <p className='text-4xl text-gray-50 font-bold font-sora hidden text-center md:hidden lg:justify-normal lg:text-start lg:gap-4 xl:justify-start xl:text-start'>Corvus</p>
            <h1 className='text-gray-100 text-2xl py-4 font-open flex justify-center text-center gap-5 md:justify-center md:text-center lg:justify-normal lg:text-start lg:gap-4 xl:justify-start xl:text-start'>Light, clean and organized.</h1>
            <h2 className='text-gray-300 text-lg font-open text-center md:text-start lg:text-start'>Minimalist and customizable GTK theme. Its clean aesthetics and efficiency make it the perfect choice for a pleasant environment.</h2>
            

            <div className='mr-8 pt-2 flex justify-center text-center gap-5 md:justify-center md:text-center lg:justify-normal lg:text-start lg:gap-4 xl:justify-start xl:text-start py-8 '>
              <span className='flex justify-center items-center gap-8 font-semibold '>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0 }}
                className="flex py-4 gap-3 transition-transform duration-300"
              >
                <a className='bg-ired hover:bg-red-200 p-3 rounded-sm text-bg w-24 flex items-center justify-center ' target='_blank' href="https://github.com/B21q/Corvus">Install</a>
             </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0 }}
                className="flex py-4 gap-3 transition-transform duration-300"
               >
                <a className='bg-igreen hover:bg-green-200 p-3 rounded-sm text-bg w-24 flex items-center justify-center' >Contribute</a>
              </motion.div>

              </span>
            </div>

          </div>
          <div className=' flex justify-center items-center'>
          <Image
            className='hidden lg:block'
            src="/Corvus.png"
            width={350}
            height={350}
            alt="Picture of the author"
          />
          </div>


        </div>
      </main>
    </section>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })
