
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Spotlight from '@/components/sections/Spotlight '
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
    </>
  )
}