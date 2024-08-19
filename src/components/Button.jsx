import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-cnter items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full border-coral-red'>
        {label}
        <img src={iconURL}
        className='ml-2 rounde-full w-5 h-5'/>
    </button>
  )
}

export default Button