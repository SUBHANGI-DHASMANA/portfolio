import React from 'react'
import { MdDesignServices, MdDeveloperMode } from "react-icons/md"
import { AiOutlineFieldTime } from 'react-icons/ai';

type Props = {}

const Skills = (props: Props) => {
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold mb-10 pb-3 border-b-[1px] border-neutral-500'>Skills and Tools</h1>
            <div className='flex flex-col max-md:flex-wrap gap-7 justify-between mt-5'>
                <h1 className='text-xl font-bold text-[#9796f0]'>Programming Languages</h1>
                <div className="skill-1 flex max-md:flex-wrap gap-10">
                    <div className="skills glass px-10 py-5">Python</div>
                    <div className="skills glass px-10 py-5">Javascript</div>
                    <div className="skills glass px-10 py-5">C++</div>
                </div>
                <h1 className='text-xl font-bold text-[#9796f0] mt-5'>Techniques</h1>
                <div className="skill-2 flex max-md:flex-wrap gap-10">
                    <div className="skills glass px-10 py-5">Machine learning</div>
                    <div className="skills glass px-10 py-5">Data analysis</div>
                    <div className="skills glass px-10 py-5">Data visualization</div>
                    <div className="skills glass px-10 py-5">Deep learning</div>
                </div>
                <h1 className='text-xl font-bold text-[#9796f0] mt-5'>Libraries and tools</h1>
                <div className="skill-3 flex max-md:flex-wrap gap-10">
                    <div className="skills glass px-10 py-5">Tensorflow</div>
                    <div className="skills glass px-10 py-5">Reactjs</div>
                    <div className="skills glass px-10 py-5">Nextjs</div>
                    <div className="skills glass px-10 py-5">Nodejs</div>
                    <div className="skills glass px-10 py-5">Express</div>
                    <div className="skills glass px-10 py-5">Git/Github</div>
                    <div className="skills glass px-10 py-5">SQL</div>
                </div>
            </div>
        </div>
    )
}

export default Skills