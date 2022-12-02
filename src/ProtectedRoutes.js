
    import useAuth from '../src/customhooks/useAuth'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    const {currentUser} = useAuth()
return currentUser ? <></>: <Navigate to="login"/>
}

export default ProtectedRoutes