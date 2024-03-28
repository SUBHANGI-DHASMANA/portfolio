import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import Navbar from './components/Navbar'

const space_mono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Subhangi Dhasmana - portfolio',
  description: 'A portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={space_mono.className}>
        <div className='w-10/12 mx-auto pt-4 z-10'>
          <Navbar/>
        </div>
        {children}
        <hr className="slash-1 my-20"/>
        <div className='w-10/12 mx-auto my-10'>
          <div className='flex justify-items-center text-2xl text-neutral-300'><p className='text-5xl mr-2 mt-[2px]'>&#169;</p> Subhangi Dhasmana <small className='mt-[2px] ml-2'>2023</small> </div>
        </div>
      </body>
    </html>
  )
}
