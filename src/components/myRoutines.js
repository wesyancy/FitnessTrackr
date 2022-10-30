import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { deleteRoutine } from '../api';
import { updateRoutineActivity, deleteRoutineActivity } from '../api';

const MyRoutines = ({ navigate, userRoutines, fetchUserRoutines, fetchRoutines }) => {
    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    // console.log(userRoutines)

    const [newCount, setNewCount] = useState('');
    const [newDuration, setNewDuration] = useState('');
    const [routActId, setRoutActId ] = useState('');

    async function updateMyCount() {
        const updatedActivity = {
            count: newCount,
            id: routActId
        }
        console.log(updatedActivity)
        let results = await updateRoutineActivity(token, updatedActivity)
        // console.log(results)
        // console.log(attachedActivity)
        if (results.error) {
            console.log("Error updating activity")
            //   setEditRErrorMessage("Error editing routine - Please ensure at least one field is filled out and routine name is not already in use")
        }
        else {
            //   navigate('./myRoutines')
            //   setEditRErrorMessage('')
            // await fetchRoutines();
            await fetchUserRoutines();
            // await fetchRoutines();
        }


    }

    async function updateMyDuration() {
        const updatedActivity = {
            duration: newDuration,
            id: routActId
        }
        console.log(updatedActivity)
        let results = await updateRoutineActivity(token, updatedActivity)
        // console.log(results)
        // console.log(attachedActivity)
        if (results.error) {
            console.log("Error updating activity")
            //   setEditRErrorMessage("Error editing routine - Please ensure at least one field is filled out and routine name is not already in use")
        }
        else {
            //   navigate('./myRoutines')
            //   setEditRErrorMessage('')
            // await fetchRoutines();
            await fetchUserRoutines();
            // await fetchRoutines();
        }


    }

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
                    const { name, goal, creatorName, activities, isPublic, id } = userRoutine
                    return (
                        <main>
                            <div id='userRoutines'>
                                <div id='userRoutine'>
                                    <h3 id='userRoutineName'>{name}</h3>
                                    <div><Link to={`/routines/${id}/activities`}><button>Attach Activity</button></Link></div>
                                    <div><Link to={`/routines/${id}`}>
                                        <button>Update Routine</button>
                                    </Link></div>
                                    <button onClick={() => { deleteRoutine(token, id), fetchUserRoutines(), fetchRoutines() }}>Delete Routine</button>
                                    <p><strong>Creator:</strong>{creatorName}</p>
                                    <p><strong>Goal:</strong>{goal}</p>
                                    <p><strong>Public:</strong>{JSON.stringify(isPublic)}</p>
                                    <form onSubmit={(event) => {
                                        event.preventDefault();
                                        fetchUserRoutines();
                                        fetchRoutines();
                                        // console.log(attachedActivity)
                                        // navigate("./myRoutines")
                                    }}>{

                                            activities.map((activity) => {
                                                const { name, description, duration, count, routineActivityId } = activity
                                                // const [newCount, setNewCount] = useState(count);
                                                // const [newDuration, setNewDuration] = useState(duration);
                                                // // const [routActId, setRoutActId ] = useState(routineActivityId);

                                                // async function updateMyActivity() {
                                                //     const updatedActivity = {
                                                //         count: newCount,
                                                //         duration: newDuration,
                                                //         id: routineActivityId
                                                //     }
                                                //     // console.log(updatedActivity)
                                                //     let results = await updateRoutineActivity(token, updatedActivity)
                                                //     // console.log(results)
                                                //     // console.log(attachedActivity)
                                                //     if (results.error) {
                                                //         console.log("Error updating activity")
                                                //         //   setEditRErrorMessage("Error editing routine - Please ensure at least one field is filled out and routine name is not already in use")
                                                //     }
                                                //     else {
                                                //         //   navigate('./myRoutines')
                                                //         //   setEditRErrorMessage('')
                                                //         // await fetchRoutines();
                                                //         await fetchUserRoutines();
                                                //         // await fetchRoutines();
                                                //     }
                                            
                                            
                                                // }

                                                // async function deleteMyActivity(token, routineActivityId){
                                                //     let results = await deleteRoutineActivity(token, routineActivityId)
                                                //     if (results.error) {
                                                //         console.log("Error Deleting Routine")
                                                //     }
                                                //     else {
                                                //         await fetchUserRoutines();
                                                //         // await fetchRoutines();
                                                //     }
                                                // }

                                                return (
                                                    <ul><strong>Activity:</strong>
                                                        <li>Name:{name}</li>
                                                        <li>Description:{description}</li>
                                                        <li>Duration:{duration} minutes</li>
                                                        <input type="number" min="1" placeholder={duration} onChange={(event) => setNewDuration(Number(event.target.value))}></input>
                                                        <button onClick={() => {setRoutActId(routineActivityId), updateMyDuration(), fetchRoutines() }}>Update Duration</button><br></br>
                                                        {console.log(routActId)}
                                                        <li>Count:{count}</li>
                                                        <input type="number" min="1" placeholder={count} onChange={(event) => {setNewCount(Number(event.target.value))}}></input><br></br>
                                                        {/* {console.log(newCount)} */}
                                                        <button onClick={() => {setRoutActId(routineActivityId), updateMyCount(), fetchRoutines() }}>Update Count</button><br></br>
                                                        <button onClick={() => { deleteRoutineActivity(token, routineActivityId), fetchUserRoutines()}}> Delete Activity </button>
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