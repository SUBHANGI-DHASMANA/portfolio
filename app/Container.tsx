import React from 'react'
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai"
import { ImLinkedin } from "react-icons/im"
import Image from 'next/image';
import "./App.css"


type Props = {}

const Container = (props: Props) => {
    return (
        <div className="lg:pt-16 pt-4 relative w-10/12 mx-auto">
            <div className='md:flex items-center justify-between flex-row-reverse'>
                <div className=' flex justify-end items-end max-md:pt-4'>
                    <div className='relative'>
                        {/* <img className=' w-100% h-auto' width={600} src="pic1.png" alt="" />
                        <div className='w-[50%] overflow-hidden h-[90%] z-[-1] top-[0%] left-[25%] rounded-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400  absolute'></div> */}
                        <Image className=' w-100% h-auto transform -scale-x-100' width={350} src="pic2.png" alt="" />
                        <div className='w-[100%] overflow-hidden h-[70%] z-[-1] top-[20%] left-[0%] rounded-full  absolute' style={{backgroundImage: "linear-gradient(to right, #9796f0, #fbc7d4)"}}></div>
                    </div>
                </div>
                <div className='p-4 pl-0 mt-5 sm:mt-20'>
                    <p className='text-xl sm:text-2xl  md:text-xl lg:text-2xl xl:text-3xl'>Hello! I&apos;m</p>
                    <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-2 pb-3  lg:pt-6'>SUBHANGI DHASMANA</h1>
                    <section className="animation text-4xl">
                        <div className="first"><div className='w-full py-5'>DEVELOPER</div></div>
                        <div className="second"><div className='w-full py-5'>Aspiring Sata Scientist</div></div>
                        {/* <div class="third"><div className='w-full my-5'>WEB DESIGNER</div></div> */}
                    </section>
                    <p className='text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6'>The data doesn&apos;t lie, but it doesn&apos;t always <br/> tell the truth.</p>
                    <div className='flex items-center mt-6 md:mt-14'>
                        <ul className='flex items-center space-x-2 sm:space-x-5 mr-6 my-4 '>
                            <li><a href="https://twitter.com/SubhangiDhas" target='_blank' className='hover:opacity-100 opacity-75 transition ease-in duration-150'><AiOutlineTwitter size={24} /></a></li>
                            <li><a href="https://www.linkedin.com/in/subhangi-dhasmana-04a911235/" target='_blank' className='hover:opacity-100 opacity-75 transition ease-in duration-150'><ImLinkedin size={24} /></a></li>
                            {/* <li><a href="" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><FiDribbble size={24} /></a></li> */}
                            <li><a href="http://github.com/subhangi-dhasmana" target='_blank' className='hover:opacity-100 opacity-75 transition ease-in duration-150'><AiOutlineGithub size={24} /></a></li>
                        </ul>
                        <div className='flex gap-2'>
                        <a href="mailto:subhangi.dhasmana@gmail.com" className='px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]'>Email me</a>
                        <a href="https://drive.google.com/file/d/18ImzNhVYKlp4njfiz4OM9Tz_0EULALjt/view?usp=drive_link" target='_blank' className='px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]'>Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
