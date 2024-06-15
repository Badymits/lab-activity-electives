import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [component, setComponent] = useState(1)
  const [username, setUsername] = useState('') // to be used for homepage

  // when user logs in, set the following states
  const loginFunc = (number, user) => {
    setComponent(number)
    setLoggedIn(true)
    setUsername(user)
  }

  // state tracking function to render compponent based on respective number (based on UL element for component to number match)
  const handleComponent = (num) => {
    if (num === 1) {
      setComponent(1)
      setLoggedIn(false)
    } else if (num === 2){
      setComponent(2)
    } else if (num === 3) {
      setComponent(3)
    } else if (num === 4) {
      setComponent(4)
    }
    
  }

  return (
    <div className="bg-gray-200 h-screen">
      <header className={loggedIn ? 'w-full h-[70px] bg-gray-400' : 'hidden'}>
        {
          component === 1 ? null :
          <ul className='flex items-center justify-end gap-4 mx-4 h-full text-4xl font-thin'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/login'>Logout</NavLink>
            
          </ul>
        }
      </header>
      {/* conditional rendering of components */}
      {/* <div className='p-10'>
        {!loggedIn && component === 1 ? <Login loginFunc={loginFunc}/> : null}
        {component === 2 && <Home username={username}/>}
        {component === 3 && <About />}
        {component === 4 && <Contact/>}
      </div> */}

      <div className='p-10'>
        <BrowserRouter >

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Routes>
            {/* elements inside can only be accessed if user is logged in  */}
            <Route path='/' element={<PrivateRoute loggedIn={loggedIn}/>}>
              <Route path='/' index element={<Home username={username}/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Route>
            
            <Route path='/login' element={<Login loginFunc={loginFunc}/>}/>
          
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
