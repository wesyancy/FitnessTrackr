import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { deleteRoutine, getActivities } from '../api';
import { updateRoutineActivity, deleteRoutineActivity, getRoutineActivities } from '../api';

const editActivity = ({ activities, navigate, userRoutines, fetchUserRoutines }) => {

    const token = window.localStorage.getItem('token')
    const activity = window.localStorage.getItem('activity')

    const currentActivity = JSON.parse(activity)

    const { name, description, duration, count, routineActivityId } = currentActivity
    const [newCount, setNewCount] = useState(count);
    const [newDuration, setNewDuration] = useState(duration);

    async function updateMyActivity() {

        currentActivity.count = newCount
        currentActivity.duration = newDuration

        let results = await updateRoutineActivity(token, currentActivity)

        console.log(results)

        if (results.error) {
            console.log("Error updating activity")
        }

        else {
            fetchUserRoutines();
        }
    }

    return (
        <ul>
            <strong>Activity:</strong>
            <br></br>
            <br></br>

            <li>Name: {name}</li>
            <li>Description: {description}</li>
            <br></br>

            <li>Duration: {duration} minutes</li>
            <input type="number" min="1" placeholder={duration} onChange={(event) => setNewDuration(Number(event.target.value))}></input>
            <br></br><br></br>

            <li>Count:{count}</li>
            <input type="number" min="1" placeholder={count} onChange={(event) => setNewCount(Number(event.target.value))}></input><br></br>
            <br></br>

            <button onClick={() => {updateMyActivity(), navigate('./myRoutines')}}>Update Duration and Count</button><br></br>
            <button onClick={() => {deleteRoutineActivity(token, routineActivityId), fetchUserRoutines(), navigate('./myRoutines') }}> Delete Activity </button>

        </ul>
    )
}

export default editActivity
