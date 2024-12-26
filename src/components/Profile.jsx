import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
  const { user } = useSelector(state => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [user])
  return (
    <div className="flex flex-col items-center justify-center gap-5 my-5">
      
      <ul className='list-disc border rounded-md shadow-md py-3 px-3'>
      <li className='list-none'><img className='w-82 object-cover' src={user?.image ? `https://mustafocoder.pythonanywhere.com/api${user.image}` : "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"} alt="image" /></li>
        <li className='list-none'>Username: {user?.username}</li>
        <li className='list-none'>Gender: {user?.gender}</li>
        <li className='list-none'>Email: {user?.email}</li>
        <li className='list-none'>name: {user?.name}</li>
        <li className='list-none'>age: {user?.age}</li>
      </ul>
      <Link to="/"  className='border rounded-xl py-2 px-2 bg-blue-500'>Update Profile</Link>
    </div>
  )
}

export default Profile