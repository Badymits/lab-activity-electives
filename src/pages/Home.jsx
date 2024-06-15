import React from "react";
import { Navigate } from "react-router-dom";

const Home = ({ username, loggedIn }) => {
    return (
        <div>
            {loggedIn ? <h1 className="text-4xl">Welcome {username}!</h1> : <Navigate to='/login'/>}
            
        </div>
    )
} 

export default Home;