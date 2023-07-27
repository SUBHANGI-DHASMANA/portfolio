'use client'
import React, {useState} from 'react'
import {BsArrowUpRight} from "react-icons/bs"

type Props = {}

const Projects = (props: Props) => {
    const [selectedId, setSelectedId] = useState<boolean>(false)
  return (
    <div className='w-10/12 mx-auto'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold mb-10 pb-3 border-b-[1px] border-neutral-500'>Projects</h1>
        {/* <div className='w-10/12 box1 max-md:mt-[-50px] mt-0'></div> */}
        <div className='mt-20 md:w-9/12 mx-auto '>
            <img className='rounded-xl opacity-90' src="img1.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4 text-[#C9D1D8]'>Gas Concentration Time Series Prediction</h1>
                <div className='text-neutral-300'>This app predict the value of concentration based on the input you give.</div>
                <div className='mt-6 inline-block'><a href="https://github.com/SUBHANGI-DHASMANA/Gas-concentration-predictor" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>See Code <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
            <img className='rounded-xl opacity-90' src="img2.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4 text-[#1D7A7F]'>Online Transaction Website</h1>
                <div className='text-neutral-300'>The full-stack banking website built with the MERN stack enables users to access their past transactions, view detailed transaction history, and transfer money securely. It integrates MongoDB for data storage, Express for server-side logic, React for dynamic user interfaces, and Node.js for smooth functionality.</div>
                <div className='mt-6 inline-block'><a href="https://github.com/SUBHANGI-DHASMANA/PayFlow-bank-website" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>See Code <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
            <img className='rounded-xl opacity-90' src="img3.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4 text-[#DF6C27]'>E-commerce Website</h1>
                <div className='text-neutral-300'>The frontend of the e-commerce app for book sales, developed using JavaScript, offers a user-friendly interface with dynamic book listings, search filters, secure payment gateways, and interactive features to enhance the shopping experience, making it a seamless platform for book enthusiasts.</div>
                <div className='mt-6 inline-block'><a href="https://github.com/SUBHANGI-DHASMANA/Biblio-website" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>See Code <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
    </div>
  )
}

export default Projects