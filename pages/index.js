
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Contact from '@/components/sections/Contact'
import Courses from '@/components/sections/Courses'
import { CtA } from '@/components/sections/CtA'
import Events from '@/components/sections/Events'
import Experience from '@/components/sections/Experience'
import Hero from '@/components/sections/Hero'
import Info from '@/components/sections/Info'
import News from '@/components/sections/News'
import Quicklinks from '@/components/sections/Quicklinks'
import Research from '@/components/sections/Research'
import Schools from '@/components/sections/Schools'
import SocialMedia from '@/components/sections/SocialMedia'
import Spotlight from '@/components/sections/Spotlight '
import Team from '@/components/sections/Team'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     <Navbar />
     <Hero />
     <Spotlight />
     <Events />
     <Contact />
     <Quicklinks />
     <Schools />
     <CtA />
     <Experience />
     <News />
     <Team />
     <Courses />
     <Info />
     <Research />
     <SocialMedia />
     <Footer />
    </> 
  )
}
