import React from 'react' 
import logo from "../assets/logo_transparent.png"
import avatar from "../assets/Netflix-avatar.png"
import {signOut } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Appstore from '../utils/AppStore';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((Appstore)=>Appstore.User)

  const handleClick = () =>{
    signOut(auth).then(() => {
    navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <img className='w-[120px]' src={logo} />
       {user && (<div className='flex align-middle  justify-center p-8'>
          <img className='h-8 ' src={avatar}/>
          <button onClick={handleClick} className=' font-bold text-white'>Signout</button>
        </div>)}
    </div>

  )
}

export default Header