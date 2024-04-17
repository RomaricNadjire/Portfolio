import React from "react"
import { Link } from "@inertiajs/inertia-react"

export default function Main({
    children,
  }: {
    children: any
  }) {
  return (
    <section className="flex justify-center items-center min-h-[100vh] lg:h-[100vh] lg:max-h-[100vh] lf:overflow-hidden linear relative text-gray-600 dark:text-gray-100 py-8">
    <div className="bg-gray-800 p-4 lg:p-8 lg:px-16 min-h-[500px] lg:h-[500px]  w-[90%] max-w-[1024px] rounded-xl shadow-2xl shadow-black flex flex-col mx-auto my-auto">
        <div className="flex justify-between  items-center">
          <h1 className='font-semibold text-lg'><Link href="/">Portfolio</Link></h1>
          <ul className='capitalize text-xs lg:flex gap-4 hidden'>
            <li className='cursor-pointer hover:text-cyan-400 '>Accueil</li>
            <li className='cursor-pointer hover:text-cyan-400 '>
              <Link href="/about">à propos</Link>
            </li>
            <li className='cursor-pointer hover:text-cyan-400 '>Niveaux</li>
            <li className='cursor-pointer hover:text-cyan-400 '>Contact</li>
          </ul>
          <div className="flex items-center justify-end lg:hidden font-bold text-xl">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
