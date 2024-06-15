import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'


const PrivateRoute = ({ loggedIn }) => {

    let user = loggedIn

    // If user is authorized (basically succesfully logged in), return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user ? <Outlet /> : <Navigate to='/login'/>
 
}

export default PrivateRoute