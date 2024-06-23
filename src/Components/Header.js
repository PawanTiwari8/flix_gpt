import React, { useDebugValue, useEffect } from 'react' 
import logo from "../assets/logo_transparent.png"
import avatar from "../assets/Netflix-avatar.png"
import {onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((Appstore)=>Appstore.User)
  const dispatch =useDispatch();

  const handleClick = () =>{
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate("/error")
    });
  }
  
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          navigate("/Browse")
        } else {
          dispatch(removeUser());
          navigate("/")
      }});
      //unsubscribe when component unmount
      return () => unSubscribe(); 
   },[])

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