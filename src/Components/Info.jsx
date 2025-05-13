import React from 'react'

export default function Info({time}) {
  return (
    <div className=' py-2 bg-[#e5e7eb] w-100 rounded-md flex justify-between items-center p-2'>
      <p>Qustion 1 of 7</p>
      <p>Time Left :{time}</p>
    </div>
  )
}
