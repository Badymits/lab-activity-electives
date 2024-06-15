import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route, NavLink, useLocation, useNavigate, Navigate } from 'react-router-dom';


function App() {


  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('') // to be used for homepage

  const navigate = useNavigate();

  const loginFunc = (user) => {
    setLoggedIn(true)
    setUsername(user)
    navigate('/')
  }

  // for header nav links
  const urlName = useLocation().pathname

  return (
    <div className="bg-gray-200 h-screen">
      <header className={loggedIn ? 'w-full h-[70px] bg-gray-400' : 'hidden'}>
        {
          urlName !== '/login' && loggedIn === true ? 
          <ul className='flex items-center justify-end gap-4 mx-4 h-full text-4xl font-thin'>
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/about'>About</NavLink>
           <NavLink to='/contact'>Contact</NavLink>
           <NavLink to='/login' onClick={() => setLoggedIn(false)}>Logout</NavLink>
           
         </ul> : null
           
          
        }
      </header>

      <div className='p-10'>
          <Routes>
              <Route path='/login' element={<Login loginFunc={loginFunc}/>}/>
              <Route path='/' element={<Home username={username} loggedIn={loggedIn}/>} />
              <Route path='/about' element={<About loggedIn={loggedIn}/>}/>
              <Route path='/contact' element={<Contact loggedIn={loggedIn}/>}/>
              <Route path='/*' element={<Navigate to='/'/>}/>
              
          </Routes>
      </div>
      
    </div>
  );
}

export default App;
