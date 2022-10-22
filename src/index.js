import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import { Register, Login } from './components';
import '.public/style.css';

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

  // async function fetchPosts() {
  //   const results = await getPosts(token)
  //   setPosts(results.data.posts);
  // }

  // async function getMe() {
  //   const storedToken = window.localStorage.getItem('token');
  //   if (!token) {
  //     if (storedToken) {
  //       setToken(storedToken);
  //     }
  //     return;
  //   }

  //   const results = await getUserDetails(token)
  //   if (results.success) {
  //     setUser(results.data);
  //   } else {
  //     console.log(results.error.message);
  //   }
  // }

  useEffect(() => {
    fetchPosts();
  }, [token])

  useEffect(() => {
    getMe();
  }, [token])

  return (
    <div id="navbar">
      <h1>Fitness Trackr</h1>
      <Navbar logout={logout} token={token} user={user} />
      <Routes>
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