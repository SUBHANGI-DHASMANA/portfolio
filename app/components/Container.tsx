import React from 'react'
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai"
import { BsArrowUpRight } from "react-icons/bs"
import { ImLinkedin } from "react-icons/im"
import Image from 'next/image';
import "../App.css"


type Props = {}

const Container = (props: Props) => {
    return (
        <div className="relative w-10/12 mx-auto mt-20">
            <div className='md:flex items-center justify-between flex-row-reverse'>
                <div className='flex justify-center items-center sm:justify-center md:justify-end lg:justify-end xl:justify-end 2xl:justify-end'>
                    <div className='relative my-auto'>
                        {/* <img className=' w-100% h-auto' width={600} src="pic1.png" alt="" />
                        <div className='w-[50%] overflow-hidden h-[90%] z-[-1] top-[0%] left-[25%] rounded-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400  absolute'></div> */}
                        <Image className='w-100% my-auto h-auto transform -scale-x-100' width={350} height={300} src="/pic2.png" alt="" />
                        <div className='w-[100%] overflow-hidden h-[70%] z-[-1] top-[20%] left-[0%] rounded-full  absolute' style={{ backgroundImage: "linear-gradient(to right, #9796f0, #fbc7d4)" }}></div>
                    </div>
                </div>
                <div className='p-4 pl-0'>
                    <p className='text-xl sm:text-2xl  md:text-xl lg:text-2xl xl:text-3xl'>Hello! I&apos;m</p>
                    <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-2 pb-3  lg:pt-6'>SUBHANGI DHASMANA</h1>
                    <section className="animation text-4xl">
                        <div className="first"><div className='w-full py-5'>DEVELOPER</div></div>
                        <div className="second"><div className='w-full py-5'>Aspiring Data Scientist</div></div>
                        {/* <div class="third"><div className='w-full my-5'>WEB DESIGNER</div></div> */}
                    </section>
                    <p className='text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6'>The data doesn&apos;t lie, but it doesn&apos;t always <br /> tell the truth.</p>
                    <div className='flex items-center mt-6 md:mt-14 z-10'>
                        <ul className='flex items-center space-x-2 sm:space-x-5 mr-6 my-4 '>
                            <li><a href="https://twitter.com/SubhangiDhas" target='_blank' className='hover:opacity-100 opacity-75 transition ease-in duration-150'><AiOutlineTwitter size={24} /></a></li>
                            <li><a href="https://www.linkedin.com/in/subhangi-dhasmana-04a911235/" target='_blank' className='hover:opacity-100 opacity-75 transition ease-in duration-150'><ImLinkedin size={24} /></a></li>
                            {/* <li><a href="" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><FiDribbble size={24} /></a></li> */}
                            <li><a href="http://github.com/subhangi-dhasmana" target='_blank' className='hover:opacity-100 opacity-75 transition ease-in duration-150'><AiOutlineGithub size={24} /></a></li>
                        </ul>
                        <div className='flex gap-2'>
                            <a href="mailto:subhangi.dhasmana@gmail.com" className='px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]'>Email me</a>
                            <a href="https://drive.google.com/file/d/1CoVgVlvLo3yswVtQqiIbYD8hkF4ZR1Ee/view?usp=sharing" target='_blank' className='px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]'>Resume</a>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl mt-36'>Read my articles</h1>
                <div className='flex flex-col max-md:flex-wrap gap-2 justify-between mt-5'>
                    <div className='px-10 py-5 glass'>
                        <div className="font-bold text-[#9796f0] pb-5">Azure Data Bricks For Spark-Based Analytics</div>
                        <p>Discover Microsoft Azure's vast services like virtual machines, Azure App Services, and Azure Storage. Like predicting diabetes with Logistic regression in R, Azure enables seamless app deployment, competing with AWS and GCP.</p>
                        {/* <p>Issued June 2023</p> */}
                        <div className='mt-6 inline-block'><a href="https://www.geeksforgeeks.org/azure-data-bricks-for-spark-based-analytics/" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Read <BsArrowUpRight size={14} className='ml-2' /></a></div>
                    </div>
                    <div className='px-10 py-5 mt-5 glass'>
                        <div className="font-bold text-[#9796f0] pb-5">Diabetes prediction using R</div>
                        <p>In this article, we will learn how to predict whether a person has diabetes or not using the Diabetes dataset. This is a classification problem, thus we’re utilizing a Logistic regression in R Programming Language.</p>
                        {/* <p>Issued June 2023</p> */}
                        <div className='mt-6 inline-block'><a href="https://www.geeksforgeeks.org/diabetes-prediction-using-r/" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Read <BsArrowUpRight size={14} className='ml-2' /></a></div>
                    </div>
                    <div className='px-10 py-5 mt-5 glass'>
                        <div className="font-bold text-[#9796f0] pb-5">Deep Learning with Siamese Networks</div>
                        <p>In this article, we will learn about Siamese networks, its working, architecture and applications.</p>
                        {/* <p>Issued June 2023</p> */}
                        <div className='mt-6 inline-block'><a href="https://medium.com/@subhangi.dhasmana/deep-learning-with-siamese-networks-835769b41f9c" target="_blank" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Read <BsArrowUpRight size={14} className='ml-2' /></a></div>
                    </div>
                </div>
        </div>
    )
}

export default Container
