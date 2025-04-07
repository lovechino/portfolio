import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between'>
        <div className=' text-xl md:text-2xl lg:text-3xl'>Username</div>
        <div className=' flex gap-4 font-medium'>
            <div className=' hover:border-b-2 hover:border-blue-500 hover:text-emerald-600'>About</div>
            <div className=' hover:border-b-2 hover:border-blue-500 hover:text-emerald-600'>Skill</div>
            <div className=' hover:border-b-2 hover:border-blue-500 hover:text-emerald-600'>Experiences</div>
            <div className=' hover:border-b-2 hover:border-blue-500 hover:text-emerald-600'>Projects</div>
        </div>
    </div>
  )
}

export default Navbar