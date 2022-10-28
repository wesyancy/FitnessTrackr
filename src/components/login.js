import React, {useState} from 'react';
import { loginUser } from '../api';
// import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';

// import { grabData } from '../api';

const Login = ({setToken, navigate, setLoginErrorMessage, loginErrorMessage}) => {
    const [username, checkUsername] = useState('')
    const [password, checkPassword] = useState('')
    const handleSubmit = async () => {
        const results = await loginUser(username, password);
        if (results.token) {
        setToken(results.token)
        window.localStorage.setItem('token', results.token)
        window.localStorage.setItem('username', username)
        console.log(results.message)
        // console.log(results)
        // grabData()
        navigate('/Home');
        } else {
            console.log("Login Error")
            setLoginErrorMessage(results.message)
            console.log(loginErrorMessage)
        }
    }

        

    return (
        <form id='LoginContainer' onSubmit={(event) => {
         event.preventDefault()
         handleSubmit();
        }}>
            <h1>Login</h1>
            <div>{`${loginErrorMessage}`}</div>
            <input
            className='PostInput'
             type='text'
             placeholder='Enter Username'
             onChange={(event) => checkUsername(event.target.value)}
             />
             <input
             className='PostInput'
             type='password'
             placeholder='Enter Password'
             onChange={(event) => checkPassword(event.target.value)}
             />
             <button type='submit'>Login</button>
             <div>
             {/* <Link to='/Register'>New User? Click Here to Register</Link> */}
             </div>
        </form>
        
     )
 
}

export default Login;