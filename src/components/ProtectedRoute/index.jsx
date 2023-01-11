import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../../context/UserContext"

export default function ProtectedRoute({children}){
    const navigate = useNavigate()
    const user = useContext(UserContext)
    useEffect(()=>{
     if(!user.isAuth){
       navigate('/')
     }
    },[navigate])
    return user.isAuth ? children : null
   }