import React from "react";
import { Navigate } from "react-router-dom";

const About = ({ loggedIn }) => {
    return (
        <>
            { loggedIn  ? 
            <div className="bg-gray-500 text-white p-3 rounded-md shadow-2xl">
                
                <h1 className="text-4xl">About</h1>
                <p className=" py-4 text-2xl font-thin">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, odit ut. Soluta animi odit commodi explicabo nihil aut! Vero eos enim facere minima iure et velit tenetur iste ipsam itaque!</p>
                <p className=" py-4 text-2xl font-thin">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, odit ut. Soluta animi odit commodi explicabo nihil aut! Vero eos enim facere minima iure et velit tenetur iste ipsam itaque!</p>
                <p className=" py-4 text-2xl font-thin">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, odit ut. Soluta animi odit commodi explicabo nihil aut! Vero eos enim facere minima iure et velit tenetur iste ipsam itaque!</p>
                <p className=" py-4 text-2xl font-thin">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, odit ut. Soluta animi odit commodi explicabo nihil aut! Vero eos enim facere minima iure et velit tenetur iste ipsam itaque!</p>
            </div> 
            : 
            <Navigate to='/login'/>
            }
            
        </>
        
    )
} 

export default About;