import React,{ useEffect, useState } from 'react'
import userService from '../../services/user'
import {useParams} from  'react-router-dom'
import { Link } from 'react-router-dom'
import './userDetail.css';

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
       { !user ? (<p>Loading user acount...</p>) :(
        <div className='container'>
          <h1 className="textanime">Mi cuenta</h1>
          <div className='micuenta'>
            <p><b>Usuario:</b> {user.username}</p>
            <p><b>Nombre:</b> {user.name}</p>
            <p><b>Apellidos:</b> {user.lastname}</p>
            <p><b>Email:</b> {user.email}</p>
           
          </div>
          <div className='misbotones'>
            <Link to='/' className="boton pop">Editar</Link>
            <Link to='/' className="boton pop" id="pop">Cerrar sesión</Link>
          </div>
        </div>
       )}
    </>
  )
}

export default UserDetail