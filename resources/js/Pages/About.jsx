import React from 'react'
import Main from '../Layouts/main'

export default function about() {
  function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6LfAzLwpAAAAAFr6L7ZL0xuMayhGzJLGknTIbH-o', {action: 'LOGIN'});
    });
  }
  return (
    <>

    <Main>
        <div className="grid grid-cols-1 md:lg:grid-cols-3 mt-8 gap-y-8 lg:gap-x-8 p-8 px-0 min-h-32">
            <div className="lg:col-span-2 bg-[#0000001c] p-4 border-[.1px] border-gray-700 rounded-lg shadow-md">
                <h1 className='capitalize text-gray-200 font-medium text-xl'>à propos de mois</h1>
                <div className='text-xs text-gray-400 py-4 mb-2'>
                  <p className="text-sm text-gray-200 mb-1">Bonjour!! Mon non c'est <strong>Yendoukoa NADJIRE </strong> développeur web</p>
                  <p>
                    J'éprouve une passion pour mon boulot, et je m'applique constamment à atteindre l'excellence dans tous les projets que j'entreprends. J'ai acquis de l'experience grâce à tous les projets scolaires, mais aussi grâce à tous les exercices personnels que j'ai eu à faire.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
                  <div className='flex flex-col gap-1 p-2 rounded-md'>
                    <span className='text-cyan-500'>Nom </span>
                    <span>NADJIRE Yendoukoa</span>
                  </div>
                  <div className='flex flex-col gap-1 p-2 rounded-md'>
                    <span className='text-cyan-500'>Email </span>
                    <span>romaricnadjire07@gmail.com</span>
                  </div>
                  <div className='flex flex-col gap-1 p-2 rounded-md'>
                    <span className='text-cyan-500'>Téléphaone </span>
                    <span>(+228) 93 05 32 18</span>
                  </div>
                </div>
            </div>
            <div className="lg:col-span-1 bg-teal-400">
              
            </div>
        </div>
    </Main>
    </>
  )
}
