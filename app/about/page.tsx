import React from 'react'
import { BsArrowUpRight } from "react-icons/bs"
import Image from 'next/image';
import "../App.css"

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <div className='md:flex items-center justify-between flex-row-reverse mt-10'>
                    <div className='pt-20 flex justify-center items-center max-md:pt-4 sm:items-center md:items-end lg:items-end xl:items-end 2xl:items-end sm:justify-center md:justify-end lg:justify-end xl:justify-end 2xl:justify-end'>
                        <div style={{ overflow: 'hidden' }} className='relative rounded w-[400px] h-[500px]'>
                            <Image className='w-100% h-auto ' objectFit="cover" width={1000} height={1000} src="/pic1.jpeg" alt="" />
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className="relative">
                            <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl'>THIS IS ME</h1>
                            <p className='pt-10'>I am a 20-year-old student at the University School of Automation and Robotics (Graduating 2025), GGSIPU East Campus, where I am pursuing a B.Tech in artificial intelligence and data science.  I have done my schooling from kendriya vidyalaya in 2021 with science and computer as my background.</p>
                            <p className='pt-3'>I have a positive view and a determined nature, and I firmly think that hard effort is the key to success. I am motivated to succeed in AI and data science because I am passionate about my studies and want to have a big effect in this sector. In my free time, I enjoy reading books and doing fine art.</p>
                            <p className='pt-3'>Few keywords which define me are -</p>
                            <div className='h-auto w-auto flex'><br />
                                <div className='flex h-auto w-fit p-1 mx-1 text-[#fbc7d4] hover:text-white hover:bg-[#9796f0] ease-linear duration-300 rounded'>Decisive</div>,
                                <div className='flex h-auto w-fit p-1 mx-1 text-[#fbc7d4] hover:text-white hover:bg-[#9796f0] ease-linear duration-300 rounded'>Hardworking</div>,
                                <div className='flex h-auto w-fit p-1 mx-1 text-[#fbc7d4] hover:text-white hover:bg-[#9796f0] ease-linear duration-300 rounded'>Good Listener</div>and
                                <div className='flex h-auto w-fit p-1 mx-1 mr-0 text-[#fbc7d4] hover:text-white hover:bg-[#9796f0] ease-linear duration-300 rounded'> Critical Thinker</div>.
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl mt-20'>My Achievements</h1>
                <div className='flex flex-col max-md:flex-wrap gap-2 justify-between mt-5'>
                    <div className='px-10 py-5 glass'>
                        <div className="font-bold text-[#9796f0] pb-5">1st runner up in Mettl Limitless hackathon.</div>
                        <p>Team name: Dev-Sentinels</p>
                        <p>Team members: Subhangi dhasmana, <a className='hover:underline-offset-2 underline underline-offset-4 decoration-wavy decoration-[#9796f0]' href='https://www.linkedin.com/in/27priyanshu/' target='_blank'>Priyanshu singh</a> and <a className='hover:underline-offset-2 underline underline-offset-4 decoration-wavy decoration-[#9796f0]' href='https://www.linkedin.com/in/udayg01/' target='_blank'>Uday gupta</a></p>
                        <div className='mt-6 inline-block'><a href="https://xathon.mettl.com/event/limitless-hackathon" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>View results<BsArrowUpRight size={14} className='ml-2' /></a></div>
                    </div>
                    <div className='px-10 py-5 mt-5 glass'>
                        <div className="font-bold text-[#9796f0] pb-5">Achieved a position in the top 20 for Azure Blogathon Phase 2</div>
                        <p>Blog topic: Exploratory data analysis on a dataset of Crimes in India using Azure Databricks</p>
                        {/* <p>Issued June 2023</p> */}
                        <div className='mt-6 inline-block'><a href="https://azureblogathon.com/winners_phase2" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>View website <BsArrowUpRight size={14} className='ml-2' /></a></div>
                    </div>
                </div>
                <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl mt-20'>My Certificates</h1>
                <div className='flex flex-col max-md:flex-wrap gap-2 justify-between mt-5'>
                    <div className='px-10 py-5 glass'>
                        <div className="font-bold text-[#9796f0] pb-5">Microsoft logo #include<code>&lt;Her&gt;</code> COHORT 2.0</div>
                        <p>Skills I learned: Artificial Intelligence</p>
                        <p>Issued June 2023</p>
                        <div className='mt-6 inline-block'><a href="https://reskilll.com/certificate/sboa/cohort2/b438b3ecda" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>View Certificate <BsArrowUpRight size={14} className='ml-2' /></a></div>
                    </div>
                    <div className='px-10 py-5 mt-5 glass'>
                        <div className="font-bold text-[#9796f0] pb-5">Complete 2023 Web development bootcamp</div>
                        <p>Skills I learned: MongoDB, Reactjs, Nodejs and Express</p>
                        <p>Issued June 2023</p>
                        <div className='mt-6 inline-block'><a href="https://www.udemy.com/certificate/UC-283235f3-d78a-41a2-b32e-0659c4ed1396/" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>View Certificate <BsArrowUpRight size={14} className='ml-2' /></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page