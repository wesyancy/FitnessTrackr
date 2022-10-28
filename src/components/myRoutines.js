import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const MyRoutines = ({ navigate,  }) => {
    const username = window.localStorage.getItem('username')
    return (
        <div>
            <Link to='/createRoutine'>
                <button id='createRoutineButton'>
                    Create Routine
                </button>
            </Link>
            <h1>{`${username}`}'s Routines:</h1>
            {
                ///Need to create get username/routines in api.js
            }
        </div>
    )
}

export default MyRoutines