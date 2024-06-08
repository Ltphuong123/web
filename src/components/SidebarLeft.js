import React from 'react'
import logo from '../assets/logo.svg'

const SidebarLeft = () => {
  return (
    <div>
        <div className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center'>
            <img src={logo} alt='logo' className='w-[120px]  h-10' />
        </div>
        
    </div>
  )
}

export default SidebarLeft