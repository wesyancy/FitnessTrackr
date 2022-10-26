import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import { Register, Login, Home, Navbar, Activities, Routines } from './components';
import './style.css'

const App = () => {

  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  
  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem('token');
    setToken('');
    setUser({});
  }

  // useEffect(() => {
  //   fetchPosts();
  // }, [token])

  // useEffect(() => {
  //   getMe();
  // }, [token])

  return (
    <div id="navbar">
      <h1>Fitness Trackr</h1>
      <Navbar logout={logout} token={token} user={user} />
      <Routes>
        <Route
          path='/'
          element={<Home
            token={token}
          />}
        />
        <Route
          path='/register'
          element={<Register
            setToken={setToken}
            token={token}
            navigate={navigate}
          />}
        />
        <Route
          path='/login'
          element={<Login
            setToken={setToken}
            navigate={navigate}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />}
        />
        <Route
          path='/activities'
          element={<Activities
            setToken={setToken}
            navigate={navigate}
          // isLoggedIn={isLoggedIn}
          // setIsLoggedIn={setIsLoggedIn}
          />}
        />
        <Route
          path='/routines'
          element={<Routines
            setToken={setToken}
            navigate={navigate}
          // isLoggedIn={isLoggedIn}
          // setIsLoggedIn={setIsLoggedIn}
          />}
        />
      </Routes>
    </div>
  )
}

const app = document.querySelector('#app');
const root = ReactDOM.createRoot(app);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);