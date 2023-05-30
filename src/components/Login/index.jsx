import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login, toggleNoAccount } from '../../app/userSlice'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

const Login = () => {

  const dispatch = useDispatch()  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function handleJoin() {
      dispatch(toggleNoAccount())
     
  }
  function logUserIn(e){
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
      dispatch(login({
        email: userCredentials.user.email,
        uid: userCredentials.user.uid,
        name: userCredentials.user.displayName,
        avatar: userCredentials.user.photoURL
      }))
      console.log('done');
    })
    .catch((error)=>alert(error))
  }

  return (
    <div className='bg-white flex flex-col gap-5 w-[100vw] h-[100vh]'>
      <div className='flex flex-row p-3 pl-[15vw] pr-[15vw] items-center justify-between'>
        <img className='w-[9.9rem]' src="/assets/logo.png" alt="logo" />
        <div className='flex flex-row font-bold gap-6 items-center'>
          <div onClick={handleJoin} className='p-[0.7rem] pl-[1.5rem] pr-[1.5rem] rounded-[2rem] cursor-pointer hover:bg-gray-100 '>Join now</div>
          <div className='p-[0.7rem] pl-[1.5rem] pr-[1.5rem] text-[#0966C2] cursor-pointer border-[#0966C2] hover:bg-blue-50 rounded-[2rem] border-[0.1rem]'>Sign in</div>
        </div>
      </div>
      <section className='flex flex-row items-center pl-[15vw] pr-[2rem] justify-between'>
          <div className='flex flex-col max-w-[35rem] gap-3'>
            <h1 className='text-[3.5rem] font-extralight leading-[4rem]  text-[#8F5849]'>Welcome to your proffesional community</h1>
            <form className='flex flex-col mt-[1.5rem] gap-6 w-[100%] max-w-[26rem]'>
            
            <div>
                  <label className='text-[0.9rem] font-bold text-gray-500' htmlFor="email">Email or Phone</label>
                  <div className='w-full p-[0.8rem] mt-[0.5rem] border-[0.1rem] border-gray-400 rounded-[0.2rem]'><input value={email} onChange={(e)=>setEmail(e.target.value)} className='outline-none w-full bg-transparent' type="text" id='email' /></div>
              </div>
              <div>
                  <label className='text-[0.9rem] font-bold text-gray-500' htmlFor="password">Password</label>
                  <div className='w-full p-[0.8rem] flex flex-row items-center mt-[0.5rem] border-[0.1rem] border-gray-400 rounded-[0.2rem]'>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} className='outline-none w-full bg-transparent' type={showPassword? 'text': 'password'} id='password' />
                    <div onClick={()=> setShowPassword((prev)=> !prev)} className='font-bold text-[1rem] text-[#0966C2] cursor-pointer'>{showPassword? 'Hide': 'Show'}</div>
                    </div>
              </div>
              <div className='font-bold text-[1rem] text-[#0966C2] cursor-pointer'>Forgot password?</div>
              <button onClick={logUserIn} type='submit' className='w-full flex flex-row justify-center text-white font-bold cursor-pointer bg-[#0966c2] hover:bg-[#06498d] p-[0.8rem] rounded-[2rem]'>Sign in</button>

            </form>

          </div>
          <img className='w-[100%] max-w-[45rem]' src="/assets/illust-linkedin.png" alt="illustration" />

        </section>
    </div>
  )
}

export default Login