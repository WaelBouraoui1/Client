import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/userSlice';
const Navbar = () => {
  const { isAuth } = useSelector((state) => state.user);
const dispatch=useDispatch()
  return (
    <div>
      {
        isAuth ?(
         <>
          <Link to="/profile">Profile</Link>
          <button onClick={()=>{
            dispatch(logout())
          }}>Logout</button>
        </>
         ):(
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
      )}

<p>it's the process of effectively overseeing the entire lifecycle of tasks, from planning to execution. Implementation of task management streamlines workflows, organizes tasks efficiently, and helps the project manager make informed decisions. Task management also involves monitoring every aspect of a task, like its budget, completion time, scope, resources, recurrence, and more.

</p>
<img src="https://cdn.cookielaw.org/logos/1b21e05d-c206-4e0b-970e-2d73a23e42e8/45ca675a-89af-47ae-961e-92defd1c1a4a/12398e56-c069-4c7e-b0b6-a28e738bcb1e/WB_Logo.png" alt="" width="40px"></img>
    </div>
  )
}

export default Navbar
