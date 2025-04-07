import React from 'react'


const availableSkills = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Node.js",
  "Python",
  "SQL",
];

const Skill = () => {
  return (
    <div className=' border-b border-neutral-900 pb-4'>
      <h2 className=' my-20 text-center text-4xl'>Skill</h2>
      <div className=' flex justify-center items-center gap-4'>
      {
        availableSkills.map((item,index)=>(
          <div key={index} className=' p-4 bg-gray-700 text-white rounded-2xl'>
            <div>{item}</div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Skill