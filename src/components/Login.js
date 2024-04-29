import React from 'react'
import { useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { UserLogin } from '../redux/slices/userSlice'

const Login = () => {
    const email=useRef()
    const Password=useRef()
    const dispatch=useDispatch()
    const {error,loading}=useSelector(state=>state.user)
  return (
    <div>
      <input type='email' placeholder='Type your email' ref={email}></input>
      <input type='Password' placeholder='Type your Password' ref={Password}></input>
      <button onClick={()=>{dispatch(UserLogin({
        email:email.current.value,
        password:Password.current.value
    }))}}  >Login</button>
    {loading && <h3 class="loader"> </h3>}
    {error && <h3>{error}</h3>
    }
    </div>
  )
  
}

export default Login


