
import { Avatar } from 'antd'
import React from 'react'
import img from "../assets/img_avatar.png"
const About = () => {
  return (
    <div className=' mt-30 border-b border-neutral-900 pb-4'>
        <div className='text-4xl font-medium text-center'>About <span className=' font-bold'>Me</span></div>
        <div className=' flex flex-col justify-center items-center gap-3 lg:flex lg:flex-row lg:my-20'>
            <div className=' mt-5'>
               <Avatar src = {img} size={300}/>
            </div>
            <div className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit accusantium eligendi eum. Praesentium officiis ut voluptate mollitia quis libero unde aliquid! Suscipit dolorum numquam sapiente? Quasi aliquid optio sunt aperiam at doloremque saepe accusamus! Reprehenderit laboriosam at illum dolor ad commodi? Possimus voluptate quasi cum voluptatum, cupiditate neque id. Cupiditate, aperiam optio corporis quibusdam deleniti asperiores aspernatur voluptatibus beatae ex quas voluptates ab commodi, facere corrupti molestias neque nemo odit est nisi provident. Inventore porro ex saepe quos et non delectus dignissimos alias doloribus eaque maxime, qui fugiat? Recusandae, voluptatem doloremque veritatis distinctio omnis facilis placeat fugiat ducimus autem!</div>
        </div>
    </div>
  )
}

export default About