import { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('') // to be used for homepage

  // when user logs in, set the following states
  const loginFunc = (number, user) => {
    setLoggedIn(true)
    setUsername(user)
  }

  const urlName = useLocation().pathname
  console.log(urlName)
  console.log(loggedIn)

  // state tracking function to render compponent based on respective number (based on UL element for component to number match)


  return (
    <div className="bg-gray-200 h-screen">
      <header className={loggedIn ? 'w-full h-[70px] bg-gray-400' : 'hidden'}>
        {
          urlName !== '/login' && loggedIn === true ? 
          null : 
           <ul className='flex items-center justify-end gap-4 mx-4 h-full text-4xl font-thin'>
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/about'>About</NavLink>
           <NavLink to='/contact'>Contact</NavLink>
           <NavLink to='/auth/login'>Logout</NavLink>
           
         </ul>
          
        }
      </header>

      <div className='p-10'>
          <Routes>
            {/* elements inside can only be accessed if user is logged in  */}
            <Route path='/' element={<PrivateRoute loggedIn={loggedIn}/>}>
              <Route index element={<Navigate to='home' replace={true}/>}/>
              <Route path='home' element={<Home username={username}/>} />
              <Route path='about' element={<About/>}/>
              <Route path='contact' element={<Contact/>}/>
            </Route>
            
            <Route path='/auth/login' element={<Login loginFunc={loginFunc}/>}/>
          
          </Routes>
        
      </div>
      
    </div>
  );
}

export default App;
