import React from 'react'

type Props = {}

const Experiences = (props: Props) => {
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold mb-10 pb-3 border-b-[1px] border-neutral-500'>Experiences</h1>
            <div className='mt-20 grid lg:grid-cols-1 sm:grid-cols-1 grid-cols-1 sm:gap-10'>
                <div className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                    <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                        <h1 className='text-left mx-8'><code style={{ color: "#9796f0" }}>&lt; SDC-USS /&gt;</code></h1>
                    </div>
                    <div className='p-8 py-10'>
                        <h1 className='mb-1 font-bold text-[#fbc7d4]'>Lead Developer - SDC USS</h1>
                        <p className='text-neutral-400'>May 2022 - Present</p>
                        <br />
                        <p className='text-white'>- I have been working as a developer at the Software Development Cell - University School of Studies.</p>
                        <p className='text-white'>- I actively worked on developing new software programs for my university and continuing projects throughout this time.</p>
                        <p className='text-white'>- Projects I worked on: Attendance Management System, GGSIPU Website and Elysian Website (Techfest of USAR).</p>
                    </div>
                </div>
                <div className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                    <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                        <h1 className='text-left mx-8'><code style={{ color: "#9796f0" }}>&lt; Organize-Events /&gt;</code></h1>
                    </div>
                    <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold text-[#fbc7d4]'>- UHACK</h1>
                        <p className='text-neutral-400 mb-2'>November 2022</p>
                        <p className='text-white mb-10'>Content writer and Organizing team member at UHack Hackathon presented by Infoexpression USICT.</p>
                        <h1 className='mb-1 font-bold text-[#fbc7d4]'>- HackEDCode</h1>
                        <p className='text-neutral-400 mb-2'>March 2023</p>
                        <p className='text-white'>Web developer and Organizing team member at HackEDCode, Hackathon presented by University School of automation and robotics.</p>
                    </div>
                </div>
                <div className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                    <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                        <h1 className='text-left mx-8'><code style={{ color: "#9796f0" }}>&lt; Open-Source /&gt;</code></h1>
                    </div>
                    <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold text-[#fbc7d4]'>HacktoberFest-2022</h1>
                        <p className='text-white'>Participate in HacktoberFest 2022, anopen source event, and make contributions to various projects.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences