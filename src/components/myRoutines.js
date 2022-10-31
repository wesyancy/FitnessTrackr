import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { deleteRoutine } from '../api';
import { updateRoutineActivity, deleteRoutineActivity } from '../api';

const MyRoutines = ({ navigate, userRoutines, fetchUserRoutines }) => {

    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')

    return (
        
        <div>
            <Link to='/createRoutine'>
                <button id='createRoutineButton'>Create Routine</button>
            </Link>
            <h1>{`${username}`}'s Routines:</h1>

            {userRoutines.map((userRoutine => {

                const { name, goal, creatorName, activities, isPublic, id } = userRoutine

                return (

                    <main key={id}>
                        <div id='Routines'>
                            <div id='Routine'>                                
                                <h3 id='RoutineName'>Name: {name}</h3>
                                
                                <div ><Link to={`/routines/${id}/activities`}><button class="myRoutineButtons">Attach Activity</button></Link></div>
                                <div><Link to={`/routines/${id}`}><button class="myRoutineButtons">Update Routine</button></Link></div>
                                <button class="myRoutineButtons" onClick={() => { deleteRoutine(token, id), fetchUserRoutines() }}>Delete Routine</button>
                                
                                <p><strong>Creator:</strong>{creatorName}</p>
                                <p><strong>Goal:</strong>{goal}</p>
                                <p><strong>Public:</strong>{JSON.stringify(isPublic)}</p>
                                
                                <form onSubmit={(event) => {
                                    event.preventDefault();
                                    attachActivity();
                                    fetchRoutines();
                                    fetchUserRoutines();
                                }}>{
                                        activities.map((activity) => {

                                            const { name, description, duration, count, routineActivityId, id, routineId } = activity

                                            const editObject = {}

                                            editObject.id = id
                                            editObject.name = name
                                            editObject.description = description
                                            editObject.duration = duration
                                            editObject.count = count
                                            editObject.routineActivityId = routineActivityId
                                            editObject.routineId = routineId
                                        
                                            const objString = JSON.stringify(editObject)

                                            async function updateMyActivity() {
                                                const updatedActivity = {
                                                    count: newCount,
                                                    duration: newDuration,
                                                    id: routineActivityId
                                                }
                                            
                                                let results = await updateRoutineActivity(token, updatedActivity)

                                                if (results.error) {
                                                    console.log("Error updating activity")
                                                }
                                                else {
                                                    fetchUserRoutines();
                                                }
                                            }

                                            return (
                                                <ul key={routineActivityId} id="Activities"><strong>Activity:</strong>
                                                    <li>Name: {name}</li>
                                                    <li>Description: {description}</li>
                                                    <li>Duration: {duration} minutes</li>
                                                    <li>Count: {count}</li>
                                                    <Link to='/editActivity'>
                                                        <button
                                                            id='createRoutineButton'
                                                            onClick={window.localStorage.setItem('activity', objString)}>
                                                            Edit Activity
                                                        </button>
                                                    </Link>
                                                </ul>
                                            )
                                        })
                                    }</form>
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