import React, { useState } from 'react';
import { registerUser } from '../api';

const Register = ({ setToken, navigate, setRegErrorMessage, regErrorMessage }) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {

    const results = await registerUser(username, password);

    if (results.token) {
      setToken(results.token);
      window.localStorage.setItem('token', results.token);
      window.localStorage.setItem('username', username);
      console.log(results.message)
      setRegErrorMessage(results.message)
      navigate('/Home');
    }
    else {
      console.log("Registration Error")
      console.log(results.message)
      setRegErrorMessage(results.message)
    }
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}>
      <h1>Register</h1>
      <div>{`${regErrorMessage}`}</div>
      <input
        id='createTitle'
        type='text'
        placeholder='Enter Username'
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        id='createTitle'
        type='password'
        placeholder='Enter Password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Register;