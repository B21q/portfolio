'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'

import { SiAlacritty, SiGtk, SiNeovim } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import { FaAngleDown, FaFirefox, FaSpotify } from 'react-icons/fa'

function Home() {
  return (
    <section className="bg-bg">
      <div className="h-max md:h-max lg:h-max xl:h-max mx-4 md:mx-8 lg:mx-40 xl:mx-40 bg-bg">
        <div className="flex flex-col items-center justify-center h-max py-8">
          <Image
            src="/Corvus.svg"
            width={150}
            height={150}
            alt="Picture of the author"
          />
          <p className="text-3xl font-sora py-4 text-gray-100">Corvus</p>
          <h1 className="text-xl font-sora text-gray-300 text-center mx-4 md:mx-8 lg:mx-56 xl:mx-56">
            Corvus is a minimalist and customizable GTK theme ideal for Linux
            systems. Its clean aesthetics and efficiency make it a perfect
            choice for a pleasant user environment, especially for dark theme
            lovers.
          </h1>
          <div className="flex gap-5 lg:gap-8 py-8 ">
            <span className="bg-iblue w-5 h-5 rounded-sm"></span>
            <span className="bg-icyan w-5 h-5 rounded-sm"></span>
            <span className="bg-igreen w-5 h-5 rounded-sm"></span>
            <span className="bg-iorange w-5 h-5 rounded-sm"></span>
            <span className="bg-ipurple w-5 h-5 rounded-sm"></span>
            <span className="bg-ipink w-5 h-5 rounded-sm"></span>
            <span className="bg-ired w-5 h-5 rounded-sm"></span>
            <span className="bg-iyellow w-5 h-5 rounded-sm"></span>
          </div>

          <div translate="no" className="bg-bg my-8 flex text-2xl">
            <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <span className="flex gap-2 justify-center items-center text-gray-50 border bg-bg-alt border-igray-10 p-2 rounded-sm">
                <FaFirefox />
                <h1 className="text-gray-50">Firefox</h1>
              </span>

              <span className="flex gap-2 justify-center items-center text-gray-50 border bg-bg-alt border-igray-10 p-2 rounded-sm">
                <SiAlacritty />
                <h1 className="text-gray-50">Alacritty</h1>
              </span>

              <span className="flex gap-2 justify-center items-center text-gray-50 border bg-bg-alt border-igray-10 p-2 rounded-sm">
                <SiGtk />
                <h1 className="text-gray-50">GTK</h1>
              </span>

              <span className="flex gap-2 justify-center items-center text-gray-50 border bg-bg-alt border-igray-10 p-2 rounded-sm">
                <SiNeovim />
                <h1 className="text-gray-50">Neovim</h1>
              </span>

              <span className="flex gap-2 justify-center items-center text-gray-50 border bg-bg-alt border-igray-10 p-2 rounded-sm">
                <TbBrandVscode />
                <h1 className="text-gray-50">VSCode</h1>
              </span>

              <span className="flex gap-2 justify-center items-center text-gray-50 border bg-bg-alt border-igray-10 p-2 rounded-sm">
                <FaSpotify />
                <h1 className="text-gray-50">Spotify</h1>
              </span>
            </div>
          </div>

          <div className='bg-bg'>
            <a
              target="_blank"
              href="https://github.com/B21q/Corvus"
              className="text-xl text-gray-50 flex flex-col items-center justify-center"
            >
              Github
              <FaAngleDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })
