'use client'
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './style.css';

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const pathname = usePathname();

  const isPageActive = (href: string) => pathname === href;
  return (
    <div className='flex items-center justify-between  flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500'>
      <div className='sm:text-3xl text-xl font-bold inline-block'>
        <Link href='/'>
          <h1 className='font-bold active text-3xl font text-[#CBE4DE]'>
            <code style={{ color: '#9796f0' }}>&lt;/&gt;</code>
          </h1>
        </Link>
      </div>
      <div className='sm:hidden hover:cursor-pointer' onClick={() => setShowNav(!showNav)}>
        <RxHamburgerMenu size={24} />
      </div>
      <nav
        className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-300 my-4 ${
          showNav ? 'top-16 visible' : 'max-sm:invisible top-0'
        }`}
      >
        <ul className='flex items-center max-sm:text-sm justify-between max-sm:justify-around z-10'>
          <li className={`py-1 ${isPageActive('/') ? 'onPage' : ''} hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1`}>
            <Link href='/' className='px-2'>
              <code>&lt;Home/&gt;</code>
            </Link>
          </li>
          <li className={`py-1 ${isPageActive('/about') ? 'onPage' : ''} hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1`}>
            <Link href='/about' className='px-2'>
              <code>&lt;About/&gt;</code>
            </Link>
          </li>
          <li className={`py-1 ${isPageActive('/projects') ? 'onPage' : ''} hover:bg-neutral-700 transition ease-in duration-300 delay-200 rounded mx-1`}>
            <Link href='/projects' className='px-2'>
              <code>&lt;Projects/&gt;</code>
            </Link>
          </li>
          <li className={`py-1 ${isPageActive('/experiences') ? 'onPage' : ''} hover:bg-neutral-700 transition ease-in duration-300 rounded mx-1 delay-300`}>
            <Link href='/experiences' className='whitespace-nowrap px-2'>
              <code>&lt;Experiences/&gt;</code>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
