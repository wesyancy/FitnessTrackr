import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { deleteRoutine } from '../api';

const MyRoutines = ({ navigate, userRoutines, fetchUserRoutines  }) => {
    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    console.log(userRoutines)
    // useEffect(() => {
    //     deleteRoutine();
    //   }, [])
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
                
                userRoutines.map((userRoutine => {
                    const {name, goal, creatorName, activities, isPublic, id } = userRoutine
                    return (
                        <main>
                            <div id='userRoutines'>
                                <div id='userRoutine'>
                                    <h3 id='userRoutineName'>{name}</h3>
                                    <div><Link to={`/routines/${id}`}>
                                            <button>Update Routine</button>
                                        </Link></div>
                                        <button onClick={() => { deleteRoutine(token, id), fetchUserRoutines()}}>Delete Routine</button>
                                    <p><strong>Creator:</strong>{creatorName}</p>
                                    <p><strong>Goal:</strong>{goal}</p>
                                    <p><strong>Public:</strong>{JSON.stringify(isPublic)}</p>
                                    <p>{
                                    activities.map((activity) => {
                                        const { name, description, duration, count } = activity
                                        return (
                                            <ul><strong>Activity:</strong>
                                            <li>Name:{name}</li>
                                            <li>Description:{description}</li>
                                            <li>Duration:{duration}</li>
                                            <li>Count:{count}</li>
                                            </ul>
                                        )
                                    })  
                                    }</p>
                                </div>
                            </div>
                        </main>
                    )
                }))
            }
        </div>
    )
}

export default MyRoutines