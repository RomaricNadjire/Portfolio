// resources/js/Pages/Home.jsx
import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Img from './image/profil.png'
import Main from '../Layouts/main'
const Home = () => {
  return (
    <>
      <Main>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-8 gap-y-8 lg:gap-x-8 p-8 px-0'>
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start relative">
            <div className="w-full lg:w-72 h-80 -translate-y-5 relative cube overflow-visible">
              <div className="h-full w-full bg-gray-800 overflow-hidden z-30 absolute top-0 left-0 flex items-center justify-center rounded-md shadow-inner shadow-[#00000073]">
                <img src={Img} alt="" className=' w-64 h-84  translate-y-6'/>
              </div>
            </div>
          </div>
          <div className='lg:col-span-2 flex flex-col gap-2 p-0 lg:px-4 ml-1 lg:ml-8'>
            <div className="flex flex-col gap-4">
              <h1 className='font-bold'>Bonjour, c'est moi</h1>
              <h2 className='font-bold text-lg md:text-xl lg:text-2xl'>Yendoukoa NADJIRE</h2>
              <p className='font-bold'>Et je suis un <span className="capitalize text-cyan-400">dévéloppeur web</span></p>
            </div>
            <p className='text-xs pb-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat eos cum perspiciatis vitae nostrum quos ipsa? Eum sit impedit consectetur dolorum facere ullam, velit quos reprehenderit facilis mollitia voluptatibus.</p>
            <div className="flex gap-4">
              <span className='h-8 w-8 rounded-full border-2 border-cyan-400 text-cyan-400 flex items-center justify-center font-bold hover:shadow-sm hover:shadow-cyan-400 hover:bg-cyan-400 hover:text-gray-600 cursor-pointer'>f</span>
              <span className='h-8 w-8 rounded-full border-2 border-cyan-400 text-cyan-400 flex items-center justify-center font-bold hover:shadow-sm hover:shadow-cyan-400 hover:bg-cyan-400 hover:text-gray-600 cursor-pointer'>in</span>

              <span className='h-8 w-8 rounded-full border-2 border-cyan-400 text-cyan-400 flex items-center justify-center font-bold hover:shadow-sm hover:shadow-cyan-400 hover:bg-cyan-400 hover:text-gray-600 cursor-pointer'>f</span>
              <span className='h-8 w-8 rounded-full border-2 border-cyan-400 text-cyan-400 flex items-center justify-center font-bold hover:shadow-sm hover:shadow-cyan-400 hover:bg-cyan-400 hover:text-gray-600 cursor-pointer'>in</span>
            </div>
            <div className="py-6">
              <Link as='button' className='p-2 px-6 text-nowrap bg-cyan-500 rounded-full text-gray-600 font-semibold shadow-sm hover:shadow-lg hover:shadow-cyan-400'>Télécharger le CV</Link>
            </div>
          </div>
        </div>
      </Main>

    </>
  );
};

export default Home;