import React,{ useEffect, useState } from 'react'
import userService from '../../services/user'
import {useParams} from  'react-router-dom'


function UserDetail() {
  const [user, setUser] = useState()
  const { userId } = useParams()

  useEffect(()=> {
    async function fetchUser() {
      try {
        const user = await userService.get(userId)
        setUser(user)
      } catch (error) {
          console.error(error) 
      }  
    }
    fetchUser()
  },[userId])

  return (
    <>
       { !user ? (<p>Loading activity...</p>) :(
        <>
        <h1>{user.name}</h1>
        </>
       )}
    </>
  )
}

export default UserDetail