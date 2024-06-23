import React from 'react'
import Header from './Header'
import bgImage from '../assets/hero-image.jpg'
import { useState,useRef} from 'react'
import { checkValidate } from '../utils/Validate.js'
import {auth} from '../utils/Firebase.js'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/UserSlice.js'

const Login = () => {
    const [errorMessage, seterrorMessage] = useState(null)
    const [signin, setsignin] = useState(true);
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
      setsignin(!signin)
    };
    const onHandleSubmit = () =>{
      const message = checkValidate(email.current.value,password.current.value);
      seterrorMessage(message)
      if(message) return;
      if(!signin)
        {
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const {uid,email,displayName} = auth.currentUser;
            console.log(auth.currentUser); 
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            navigate('/Browse')
          }).catch((error) => {
            seterrorMessage(error.message)
          });
          
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         seterrorMessage(errorMessage);
         // ..
        });
        }
        else {
          signInWithEmailAndPassword(auth, email.current.value, password.current.value  )
          .then((userCredential) => {
           // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate('/Browse')
          // ...
          })
         .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorMessage);
          });
        }
    }
  return (
    <div>
        <Header/>
        <div className='absolute'> 
          <img className="" src={bgImage} />
        </div> 
           <form onSubmit={(e) => e.preventDefault()} className='absolute w-2/12 mx-auto my-60 right-0 left-0 bg-black text-white bg-opacity-80 rounded-md' >
           <h1 className='font-bold text-2xl my-4 mx-2 '>{signin ?"Sign in":"Sign up" }</h1>
            {!signin && <input ref={name} className='w-11/12  m-3 rounded-lg bg-gray-300 text-black p-2' type='text' placeholder='Full Name'></input>}
            <input ref={email} className='w-11/12  m-3 rounded-lg  bg-gray-300 text-black p-2' type='text' placeholder='Email'></input>
            <input ref={password} className='w-11/12  m-3 rounded-lg  bg-gray-300 text-black p-2' type='password' placeholder='Password'></input>
            <p className=' mx-3 text-red-600'>{errorMessage}</p>
            <button className='py-2 rounded-md px-4 font-bold mx-20 my-4 bg-red-700' onClick={onHandleSubmit}>{signin ?"Sign in":"Sign up" }</button>
            <h5 className='m-4 text-xs' >{signin ?"New user ?Please ":"Already a user " }<span className=' cursor-pointer underline' onClick={handleClick}>{signin ?"Sign up":"Sign in" }</span></h5>
           </form>
    </div>
  )
}

export default Login