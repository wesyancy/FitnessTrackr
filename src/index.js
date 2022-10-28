import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import { Register, Login, Home, Navbar, Activities, Routines, MakeActivity, MakeRoutine, MyRoutines } from './components';
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
  const [actErrorMessage, setActErrorMessage] = useState('');

  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('username')
    setActErrorMessage('');
    setRegErrorMessage('');
    setLoginErrorMessage('')
    setToken('');
    setUser({});
  }

  async function fetchActivities() {
    const results = await getActivities()
    // console.log(results)
    setActvities(results)
  }

  async function fetchRoutines() {
    const results = await getRoutines()
    setRoutines(results)
  }

  useEffect(() => {
    fetchActivities();
  }, [])

  useEffect(() => {
    fetchRoutines();
  }, [])

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
            setRegErrorMessage={setRegErrorMessage}
            regErrorMessage={regErrorMessage}
          />}
        />
        <Route
          path='/login'
          element={<Login
            setToken={setToken}
            navigate={navigate}
            isLoggedIn={isLoggedIn}
            setLoginErrorMessage={setLoginErrorMessage}
            loginErrorMessage={loginErrorMessage}
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
            actErrorMessage={actErrorMessage}
            setActErrorMessage={setActErrorMessage}
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
        <Route
          path='/createRoutine'
          element={<MakeRoutine
            setToken={setToken}
            navigate={navigate}
            routines={routines}
            fetchRoutines={fetchRoutines}
          // isLoggedIn={isLoggedIn}
          // setIsLoggedIn={setIsLoggedIn}
          />}
        />
        <Route
          path='/myRoutines'
          element={<MyRoutines
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