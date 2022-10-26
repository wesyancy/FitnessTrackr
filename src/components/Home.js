import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ token }) => {
  return (
    <div>
      <h2>Welcome to Fitness Trackr</h2>
      <h2>Click Below to Begin!</h2>
      {/* <Link to='/posts'><button id='homeButts'>Posts</button></Link>
      { token ? <Link to='/profile'><button id='homeButts'>Profile</button></Link> : null} */}
    </div>
  )
}

export default Home;