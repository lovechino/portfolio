import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Skill from '../Components/Skill'
import Experience from '../Components/Experience'
import Project from '../Components/Project'

const PortFolio = () => {
  return (
    <div className='overflow-x-hidden text-black-300 antialiased selection:bg-cyan-300 selection:text-cyan-9002'>
        <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar/>
        <About />
        <Skill/>
        <Experience/>
        <Project/>
      </div>
    </div>
  )
}

export default PortFolio