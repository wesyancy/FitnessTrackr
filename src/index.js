import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import { Register, Login, Home, Navbar, Activities, Routines, MakeActivity } from './components';
import { getActivities, getRoutines } from './api';
import './style.css'

const App = () => {
  const [activities, setActvities] = useState([])
  const [routines, setRoutines] = useState([])
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [regErrorMessage, setRegErrorMessage] = useState('');

  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem('token');
    setToken('');
    setUser({});
  }

  async function fetchActivities() {
    const results = await getActivities();
    // console.log(results)
    setActvities(results)
  }

  async function fetchRoutines() {
    const results = await getRoutines();
    // console.log(results)
    setRoutines(results)
  }

  useEffect(() => {
    fetchActivities();
  }, [activities])
  
  useEffect(() => {
    fetchRoutines();
  }, [routines])

  // useEffect(() => {
  //   getMe();
  // }, [token])

  return (
    <div id="navbar">
      <h1>Fitness Trackr</h1>
      <Navbar logout={logout} token={token} user={user} />
      <Routes>
        < Route
          path='/home'
          element={<Home
          />}
        />
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
            activities={activities}
            setToken={setToken}
            navigate={navigate}
            fetchActivities={fetchActivities}
          // isLoggedIn={isLoggedIn}
          // setIsLoggedIn={setIsLoggedIn}
          />}
        />
        <Route
          path='/createActivity'
          element={<MakeActivity
            activities={activities}
            setToken={setToken}
            navigate={navigate}
            fetchActivities={fetchActivities}
          // isLoggedIn={isLoggedIn}
          // setIsLoggedIn={setIsLoggedIn}
          />}
        />
        <Route
          path='/routines'
          element={<Routines
            setToken={setToken}
            navigate={navigate}
            routines={routines}
            fetchRoutines={fetchRoutines}
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