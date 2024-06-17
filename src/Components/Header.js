import React from 'react' 
import logo from "../assets/logo_transparent.png"
const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black z-10'>
        <img className='w-[120px]' src={logo} />
    </div>
  )
}

export default Header