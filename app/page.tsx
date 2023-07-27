import Navbar from './Navbar'
import Container from './Container'
import Skills from './Skills'
import Projects from './Projects'
import Experiences from './Experiences'
import "./globals.css"

export default function Home() {
  return (
    <div>
      <div className='w-10/12 mx-auto pt-4'>
        <Navbar/>
      </div>
      <Container/>
      <hr className="slash-1 my-20" id='skills'/>
      <Skills/>
      <hr className="slash-1 my-20" id='projects'/>
      <Projects/>
      <hr className="slash-1 my-20" id='experiences'/>
      <Experiences/>
      <div className='w-10/12 mx-auto my-10'>
        <div className='flex justify-items-center text-2xl text-neutral-300'><p className='text-5xl mr-2 mt-[2px]'>&#169;</p> Subhangi Dhasmana <small className='mt-[2px] ml-2'>2023</small> </div>
      </div>
    </div>
  )
}