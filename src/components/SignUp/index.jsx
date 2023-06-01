import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, selectUser, toggleNoAccount } from '../../app/userSlice'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../firebase';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';




const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()  

  const user = useSelector(selectUser)

  function handleAccountAvail() {
      dispatch(toggleNoAccount())
  }

  async function handleSignUp(e){
    try {
      e.preventDefault()
      setLoading(true)
    if(!name || !email || !password ){
      setErrorMsg('complete required fields')
    }
    else{
     try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
     try {
     const updated = await updateProfile(userCredentials.user,{
        displayName: name,
        photoURL: avatar 
    })
    
      dispatch(login({
        email: userCredentials.email,
        uid: userCredentials.uid,
        name: name,
        avatar: avatar? avatar : ''
      }))
      setLoading(false);
    

     } catch (error) {
      setLoading(false);
      alert(error.message)

     }
     } catch (error) {
      setLoading(false);
      alert(error.message)
      
     }
      /* .then((userCredentials)=>{
        updateProfile(userCredentials.user, {
          displayName: name,
          photoURL: avatar
        })
        .then(()=>{
          dispatch(login({
            email: userCredentials.email,
            uid: userCredentials.uid,
            name: name,
            avatar: avatar? avatar : ''
          }))

        }).catch((error)=>alert(error.message))
      })
      .catch((error)=>alert(error.message))
       */
    }
    } catch (error) {
      alert(error)
      
    }
    
  }

  return (
    <div className='bg-white flex flex-col gap-5 w-[100vw] '>
      <div className='flex flex-row p-3 pl-[15vw] pr-[15vw] items-center justify-center lg:justify-between'>
        <img className='w-[9.9rem]' src="/assets/logo.png" alt="logo" />
      </div>
      <section className='flex flex-col p-4 lg:flex-row gap-7 md:gap-0 justify-center items-center lg:pl-[15vw] lg:pr-[2rem] lg:justify-between'>
          <div className='flex flex-col items-center lg:items-start max-w-[35rem] gap-3'>
            <h1 className='md:text-[3.5rem] text-[2.4rem] font-extralight md:leading-[4rem] leading-[2.8rem] text-center lg:text-left  text-[#8F5849]'>Welcome to your proffesional community</h1>
            <form className='flex flex-col mt-[1.5rem] gap-6 w-[100%] max-w-[26rem]'>
              {errorMsg && <div className='text-red-500 mt-[-0.7rem] mb-[-0.6rem] font-semibold italic text-[0.85rem]'>{errorMsg}</div>}
            <div>
                  <label className='text-[0.9rem] font-bold text-gray-500' htmlFor="email">Full name</label>
                  <div className='w-full p-[0.8rem] mt-[0.5rem] border-[0.1rem] border-gray-400 rounded-[0.2rem]'><input value={name} onChange={(e)=>setName(e.target.value)} className='outline-none w-full bg-transparent' type="text" id='email' /></div>
              </div>
             
              <div>
                  <label className='text-[0.9rem] font-bold text-gray-500' htmlFor="email">Email</label>
                  <div className='w-full p-[0.8rem] mt-[0.5rem] border-[0.1rem] border-gray-400 rounded-[0.2rem]'><input value={email} onChange={(e)=>setEmail(e.target.value)} className='outline-none w-full bg-transparent' type="text" id='email' /></div>
              </div>
              <div>
                  <label className='text-[0.9rem] font-bold text-gray-500' htmlFor="password">Password</label>
                  <div className='w-full p-[0.8rem] flex flex-row items-center mt-[0.5rem] border-[0.1rem] border-gray-400 rounded-[0.2rem]'>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} className='outline-none w-full bg-transparent' type={showPassword? 'text': 'password'} id='password' />
                    <div onClick={()=> setShowPassword((prev)=> !prev)} className='font-bold text-[1rem] text-[#0966C2] cursor-pointer'>{showPassword? 'Hide': 'Show'}</div>
                    </div>
              </div>
              <div className='text-gray-500 font-medium '>Already have an account?<span onClick={handleAccountAvail} className='font-bold text-[1rem] text-[#0966C2] ml-[0.6rem] hover:underline cursor-pointer'>Log in</span></div>
              <button onClick={handleSignUp} type='submit' className='w-full flex flex-row justify-center text-white font-bold cursor-pointer bg-[#0966c2] hover:bg-[#06498d] p-[0.8rem] rounded-[2rem]'>{loading? <CircularProgress className='!text-white !h-[2rem]  !w-[2rem]'/> : 'Sign up'}</button>

            </form>

          </div>
          <img className='w-[100%] max-w-[45rem]' src="/assets/illust-linkedin.png" alt="illustration" />

        </section>
    </div>
  )
}

export default SignUp