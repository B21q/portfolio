
import dynamic from 'next/dynamic';

import { FaGhost } from 'react-icons/fa'
 

function Boo() {
    return (
    <div className='bg-white'>
        <main className="font-sora h-screen  text-bg dark:text-gray-50 flex flex-col justify-center items-center mx-4">
            <p translate='no' className="flex text-7xl">Boo <span className='text-bg-alt'><FaGhost/></span></p>
            <h1 className="text-2xl py-3 text-center">Simple, fast and highly customizable.</h1>
                <ul className='flex items-center text-xl font-open justify-between gap-8'>
                    <li className='flex items-center bg-iblue rounded-sm p-2'><a href="">About</a></li>
                    <li className='flex items-center bg-iorange rounded-sm p-2'><a href="">Reddit</a></li>
                    <li className='flex items-center bg-slate-500 rounded-sm p-2'><a href="">Github</a></li>
                </ul>
        </main>
    </div>
    )
}

export default dynamic(() => Promise.resolve(Boo), { ssr: false });
