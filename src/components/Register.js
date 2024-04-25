import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserRegister } from '../redux/slices/userSlice'
const Register = () => {
  const e = useRef()
  const p = useRef()
  const dispatch = useDispatch()
  const { error, loading } = useSelector(state => state.user)
  return (
    <div>
      <input type='email' placeholder='Type your email' ref={e}></input>
      <input type='password' placeholder='Type your password' ref={p}></input>
      <button onClick={() => {
        dispatch(UserRegister({


          email: e.current.value,
          password: p.current.value
        }))
        ///console.log(e.current.value,p.current.value)
      }}>Register</button>
      {loading && <h3>Loading....</h3>}
      {error && <h3>{error}</h3>}

    </div>
  )
}

export default Register
///23.30 16/04 (2)