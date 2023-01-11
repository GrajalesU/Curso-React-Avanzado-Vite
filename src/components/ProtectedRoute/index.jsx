import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../context/UserContext"

export default function ProtectedRoute({children}){
    const navigate = useNavigate()
    const user = useUser()
    useEffect(()=>{
     if(!user.isAuth){
       navigate('/login')
     }
    },[navigate])
    return user.isAuth ? children : null
   }