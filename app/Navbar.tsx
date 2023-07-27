'use client'
import React, { useState } from 'react'
import {RxHamburgerMenu} from "react-icons/rx"
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
    const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <div className='flex items-center justify-between  flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500'>
        <div className='sm:text-3xl text-xl font-bold inline-block'>
            <Link href="/">
              <h1 className="font-bold active text-3xl font text-[#CBE4DE]"><code style={{color: "#9796f0"}}>&lt;/&gt;</code></h1>
            </Link>
        </div>
        <div className='sm:hidden' onClick={() => setShowNav(!showNav)}><RxHamburgerMenu size={24}/></div>
        <nav className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-300 ${showNav ? "top-16 visible": "max-sm:invisible top-0"}`}>
            <ul className='flex items-center max-sm:text-sm justify-between max-sm:justify-around'>
                <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${showNav ? "max-sm:translate-x-0":"max-sm:-translate-x-32"}`}><a href='#skills' className='px-2'><code>&lt;Skills/&gt;</code></a></li>
                <li className={`py-1 hover:bg-neutral-700  rounded mx-1 transition ease-in duration-300 delay-200 ${showNav ? "max-sm:translate-x-0":"max-sm:-translate-x-40"}`}><a href='#projects' className='px-2'><code>&lt;Projects/&gt;</code></a></li>
                <li className={`py-1 hover:bg-neutral-700  transition ease-in duration-300 rounded mx-1 delay-300 ${showNav ? "max-sm:translate-x-0":"max-sm:-translate-x-52"} rounded mx-1`}><a href='#experiences' className='whitespace-nowrap px-2'><code>&lt;Experiences/&gt;</code></a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar