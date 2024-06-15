import React,{useContext, useState} from "react";
import { Context } from "../context/Context";

const Login = () => {
    let { loginUser } = useContext(Context)
    const users = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' }
    ]

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        // username and password must match, including the respective pair
        if (username === users[0].username && password === users[0].password){
            alert('login')
            loginUser(username)
        }
        else if (username === users[1].username && password === users[1].password){
            alert('login')
            loginUser(username)
        } else {
            alert('invalid credentials')
        }
    }
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col m-4 h-[500px] w-[700px] px-2 items-center justify-center">
            <form action="" className="flex flex-col p-[9em] items-center justify-center w-full h-full bg-blue-300 rounded-md" onSubmit={handleSubmit}>
                <h1 className="text-2xl">Login Form</h1>
                <div className="text-left py-4">
                    <label htmlFor="" className="block">Username</label>
                    <input type="text" required name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="border border-black w-[400px]" />
                </div>    
                <div className="text-left py-4">
                    <label htmlFor="" className="block">Password</label>
                    <input type="password" required name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-black w-[400px]" />
                </div>   

                <button className="block bg-green-500 p-3 px-6 rounded-full uppercase text-white">Login</button> 
            </form>
            
        </div>
    )
} 

export default Login;