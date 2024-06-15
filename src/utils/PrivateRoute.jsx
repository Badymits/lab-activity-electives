import { useContext, useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { Context } from '../context/Context'


const PrivateRoute = () => {

    let { user } = useContext(Context)
    
    // If user is authorized (basically succesfully logged in), return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user ? <Outlet /> : <Navigate to='/auth/login'/>

}

export default PrivateRoute