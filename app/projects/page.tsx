'use client'
import Image from 'next/image';
import React, {useState} from 'react'
import {BsArrowUpRight} from "react-icons/bs"
import "../App.css"

type Props = {}

const Projects = (props: Props) => {
    const [selectedId, setSelectedId] = useState<boolean>(false)
  return (
    <div className='w-10/12 mx-auto'>
        {/* <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold my-10 pb-3'>Skills and Tools</h1>
            <div className='flex flex-col max-md:flex-wrap gap-2 justify-between mt-5'>
                <h1 className='text-xl font-bold text-[#9796f0]'>Programming Languages</h1>
                <div className="skill-1 flex max-md:flex-wrap gap-3">
                    <div className="skills glass px-10 py-5">Python</div>
                    <div className="skills glass px-10 py-5">Javascript</div>
                    <div className="skills glass px-10 py-5">C++</div>
                </div>
                <h1 className='text-xl font-bold text-[#9796f0] mt-5'>Techniques</h1>
                <div className="skill-2 flex max-md:flex-wrap gap-3">
                    <div className="skills glass px-10 py-5">Machine learning</div>
                    <div className="skills glass px-10 py-5">Data analysis</div>
                    <div className="skills glass px-10 py-5">Data visualization</div>
                    <div className="skills glass px-10 py-5">Deep learning</div>
                </div>
                <h1 className='text-xl font-bold text-[#9796f0] mt-5'>Libraries and tools</h1>
                <div className="skill-3 flex max-md:flex-wrap gap-3">
                    <div className="skills glass px-10 py-5">Tensorflow</div>
                    <div className="skills glass px-10 py-5">Reactjs</div>
                    <div className="skills glass px-10 py-5">Nextjs</div>
                    <div className="skills glass px-10 py-5">Nodejs</div>
                    <div className="skills glass px-10 py-5">Express</div>
                    <div className="skills glass px-10 py-5">Git/Github</div>
                    <div className="skills glass px-10 py-5">SQL</div>
                </div>
            </div> */}
        {/* <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold mb-10 pb-3 border-b-[1px] border-neutral-500'>Projects</h1> */}
        {/* <div className='w-10/12 box1 max-md:mt-[-50px] mt-0'></div> */}
        <div className='mt-20 md:w-9/12 mx-auto '>
        <Image className='rounded-xl' width={1000} height={1000} src="/img6.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4 text-[#DCDBB9]'>MockBit</h1>
                <div className='text-neutral-300'>MockBit, the cutting-edge website that aims to revolutionize the interview preparation experience for students and professionals alike. Our project is built on the foundation of Artificial Intelligence (AI), specifically integrating Large Language Models (LLM) fine-tuned with a carefully curated dataset. The result is a platform that offers a contextualized and effective mock interview experience.</div>
                <div className='mt-6 inline-block'><a href="https://github.com/SUBHANGI-DHASMANA/Mock-bit-interview" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>See Code <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
        <Image className='rounded-xl' width={1000} height={1000} src="/img4.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4 text-[#FCD406]'>Space Missions analysis</h1>
                <div className='text-neutral-300'>It provides knowledge about all space missions from 1957. Designed and developed website using Streamlit,
Python, Matplotlib and Seaborn. It incorporates features such as comprehensive analysis, company-wise breakdown, mission and rocket status
assessment.</div>
                <div className='mt-6 inline-block'><a href="https://github.com/SUBHANGI-DHASMANA/space-missions" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>See Code <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
        <Image className='rounded-xl' width={1000} height={1000} src="/img5.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4 text-[#53C1DD]'>Road accident analysis</h1>
                <div className='text-neutral-300'>Analyze current-year road accidents and casualties, contrasting with the previous year, using Power BI for
data-driven road safety insights. Data visualization empowers stakeholders to make informed decisions, fostering road safety improvements based
on trends and patterns.</div>
                <div className='mt-6 inline-block'><a href="https://drive.google.com/drive/u/2/folders/1hlOLNuAV1MLNF-L4tiAtmybgZC8Elqc_" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>See Code <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
        <Image className='rounded-xl' width={1000} height={1000} src="/img1.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4 text-[#C9D1D8]'>Gas Concentration Time Series Prediction</h1>
                <div className='text-neutral-300'>This app predict the value of concentration based on the input you give.</div>
                <div className='mt-6 inline-block'><a href="https://github.com/SUBHANGI-DHASMANA/Gas-concentration-predictor" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>See Code <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
        <Image className='rounded-xl' width={1000} height={1000} src="/img2.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4 text-[#1D7A7F]'>Online Transaction Website</h1>
                <div className='text-neutral-300'>The full-stack banking website built with the MERN stack enables users to access their past transactions, view detailed transaction history, and transfer money securely. It integrates MongoDB for data storage, Express for server-side logic, React for dynamic user interfaces, and Node.js for smooth functionality.</div>
                <div className='mt-6 inline-block'><a href="https://github.com/SUBHANGI-DHASMANA/PayFlow-bank-website" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>See Code <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
        <Image className='rounded-xl' width={1000} height={1000} src="/img3.png" alt="" />
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