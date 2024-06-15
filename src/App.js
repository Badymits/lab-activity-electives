import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

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
            <li className='cursor-pointer' onClick={() => handleComponent(2)}>Home</li>
            <li className='cursor-pointer' onClick={() => handleComponent(3)}>About</li>
            <li className='cursor-pointer' onClick={() => handleComponent(4)}>Contact</li>
            <li className='cursor-pointer' onClick={() => handleComponent(1)}>Logout</li>
          </ul>
        }
      </header>
      {/* conditional rendering of components */}
      <div className='p-10'>
        {!loggedIn && component === 1 ? <Login loginFunc={loginFunc}/> : null}
        {component === 2 && <Home username={username}/>}
        {component === 3 && <About />}
        {component === 4 && <Contact/>}
      </div>
    </div>
  );
}

export default App;
