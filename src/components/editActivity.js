import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { deleteRoutine, getActivities } from '../api';
import { updateRoutineActivity, deleteRoutineActivity, getRoutineActivities } from '../api';

const editActivity = ({ activities, navigate, userRoutines, fetchUserRoutines }) => {

    const token = window.localStorage.getItem('token')
    const activity = window.localStorage.getItem('activity')

    console.log(activity)

    const currentActivity = JSON.parse(activity)

    // console.log (currentActivity)

    const { name, description, duration, count, routineActivityId } = currentActivity
    const [newCount, setNewCount] = useState(count);
    const [newDuration, setNewDuration] = useState(duration);

    async function updateMyActivity() {

        const updatedActivity = {
            count: newCount,
            duration: newDuration,
            id: routineActivityId
        }

        console.log(updatedActivity)

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

        <ul><strong>Activity:</strong>

            <li>Name: {name}</li>
            <li>Description: {description}</li>
            <li>Duration: {duration} minutes</li>

            <input type="number" min="1" placeholder={duration} onChange={(event) => setNewDuration(Number(event.target.value))}></input>

            {/* <button onClick={() => { updateMyActivity() }}>Update Duration</button> */}

            {console.log(newDuration)}

            <li>Count:{count}</li>

            <input type="number" min="1" placeholder={count} onChange={(event) => setNewCount(Number(event.target.value))}></input><br></br>

            {console.log(newCount)}

            <button onClick={() => { updateMyActivity() }}>Update Duration and Count</button><br></br>
            <button onClick={() => { deleteRoutineActivity(token, routineActivityId), fetchUserRoutines() }}> Delete Activity </button>

        </ul>
    )
}

export default editActivity