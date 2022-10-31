import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { deleteRoutine } from '../api';
import { updateRoutineActivity, deleteRoutineActivity, getRoutineActivities } from '../api';

const EditActivity = ({ userRoutines, navigate, fetchUserRoutines }) => {
    const { activityId } = useParams();
    const token = window.localStorage.getItem('token')
    console.log(userRoutines)
    // const activity = window.localStorage.getItem('activity')
    const currentActivity = userRoutines.filter(userRoutine => userRoutine.activities.routineActivityId === activityId )
    // const currentActivity = userActivities.filter(userActivity => userActivity.routineActivityId === activityId)
     
    const { name, description, duration, count, routineActivityId } = currentActivity
    console.log(currentActivity.duration)
    console.log(routineActivityId)

    const [newCount, setNewCount] = useState(count);
    const [newDuration, setNewDuration] = useState(duration);

    async function updateMyActivity() {

        const updatedActivity = {
            count: newCount,
            duration: newDuration,
            id: routineActivityId
        }

        let results = await updateRoutineActivity(token, updatedActivity)

             console.log(results)

        if (results.error) {
            console.log("Error updating activity")

        }

        else {
            fetchUserRoutines();
        }

    }
    
 return (

    <form id="MessageEditContainer" onSubmit={ (event) => {
        event.preventDefault();
        updateMyActivity();
        fetchRoutines();
        fetchUserRoutines();
        
      }}>

            <h1>Edit Duration and Count</h1>
            <h3>Duration</h3>
            <input type="number" min="1" placeholder={duration} onChange={(event) => setNewDuration(Number(event.target.value))}></input>

            {/* <button onClick={() => { updateMyActivity() }}>Update Duration</button> */}

            {console.log(newDuration)}

            <h3>Count</h3>

            <input type="number" min="1" placeholder={count} onChange={(event) => setNewCount(Number(event.target.value))}></input><br></br>

            {console.log(newCount)}

            <button onClick={() => { updateMyActivity() }}>Update Duration and Count</button><br></br>
            <button onClick={() => { deleteRoutineActivity(token, routineActivityId), fetchUserRoutines() }}> Delete Activity </button>

        </form>
    )
    
    // console.log(currentActivity)
    // // const editActivity = {}
    // // editActivity.id = activity
    
    // // console.log (editActivity)
    // // console.log (activity)
    
    // // const currentActivity = getRoutineActivities(activity);
    // // const currentActivity2 = getRoutineActivities(editActivity);

    // const { name, description, duration, count, routineActivityId } = currentActivity
    // const [newCount, setNewCount] = useState(count);
    // const [newDuration, setNewDuration] = useState(duration);

    // async function updateMyActivity() {

    //     const updatedActivity = {
    //         count: newCount,
    //         duration: newDuration,
    //         id: routineActivityId
    //     }

    //     console.log(updatedActivity)

    //     let results = await updateRoutineActivity(token, updatedActivity)

    //     console.log(results)

    //     if (results.error) {
    //         console.log("Error updating activity")

    //     }

    //     else {
    //         fetchUserRoutines();
    //     }
    // }

    // return (

    //     <ul><strong>Activity:</strong>

    //         <li>Name:{name}</li>
    //         <li>Description:{description}</li>
    //         <li>Duration:{duration} minutes</li>

    //         <input type="number" min="1" placeholder={duration} onChange={(event) => setNewDuration(Number(event.target.value))}></input>

    //         {/* <button onClick={() => { updateMyActivity() }}>Update Duration</button> */}

    //         {console.log(newDuration)}

    //         <li>Count:{count}</li>

    //         <input type="number" min="1" placeholder={count} onChange={(event) => setNewCount(Number(event.target.value))}></input><br></br>

    //         {console.log(newCount)}

    //         <button onClick={() => { updateMyActivity() }}>Update Duration and Count</button><br></br>
    //         <button onClick={() => { deleteRoutineActivity(token, routineActivityId), fetchUserRoutines() }}> Delete Activity </button>

    //     </ul>
    // )
}

export default EditActivity