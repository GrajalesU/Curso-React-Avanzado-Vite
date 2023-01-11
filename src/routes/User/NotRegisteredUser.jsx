import React from 'react'
import { useUser } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function NotRegisteredUser() {
  const {isAuth, activateAuth, logout} = useUser()
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    if(!isAuth){
      activateAuth()
      return navigate('/')
    }else
      return logout()
  }
  return (
    <form onSubmit={handleLogin}>
      {isAuth ? <button type='submit'>Cerrar sesión</button> :<button type='submit'>Iniciar sesión</button>}
    </form>
  )
}
