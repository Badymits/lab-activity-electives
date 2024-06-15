import React from "react";

const Home = ({ username }) => {
    return (
        <div>
            <h1 className="text-4xl">Welcome {username}!</h1>
        </div>
    )
} 

export default Home;