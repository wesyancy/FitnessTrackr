import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { attachActivitytoRoutine } from '../api';


const AddActivity = ({ activities, navigate, fetchRoutines, fetchUserRoutines }) => {
    const [countNumber, setCount] = useState(0)
    const [durationNumber, setDuration] = useState(0)
    const [selectedActivity, setSelectedActivity] = useState(0)
    const { routineId } = useParams();
    const token = window.localStorage.getItem('token');
    console.log(routineId)

    async function attachActivity() {
        const attachedActivity = {
            activityId : selectedActivity,
            count : countNumber,
            duration : durationNumber,
        }
        // console.log(attachedActivity)
        let results = await attachActivitytoRoutine(token, attachedActivity, routineId)
        console.log(results)
        // console.log(attachedActivity)
        if (results.error) {
          console.log("Error attaching activity")
        //   setEditRErrorMessage("Error editing routine - Please ensure at least one field is filled out and routine name is not already in use")
        }
        else{
          navigate('./myRoutines')
        //   setEditRErrorMessage('')
        }
        

      }
      return (
        <form onSubmit={ (event) => {
            event.preventDefault(); 
            attachActivity(); 
            fetchRoutines();
            fetchUserRoutines();
            // console.log(attachedActivity)
            // navigate("./myRoutines")
        }}>
            <label for="activities">Choose an activity:</label>

            <select name="activities" id="activities" required onChange={(event) => setSelectedActivity(Number(event.target.value))}>
            <option disabled selected>Select your option</option>
                {activities.map((activity) => {
                    const { name, description, id } = activity
                    return (


                        
                        <option value={id}>{name}</option>

                    )
                })}
            </select>
            <input type="number" min="1" placeholder="Count" onChange={(event) => setCount(Number(event.target.value))}></input>
            {/* {console.log(countNumber)} */}
            <input type="number" min="1" placeholder="Duration" onChange={(event) => setDuration(Number(event.target.value))}></input>
            {console.log(selectedActivity, countNumber, durationNumber,)}
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddActivity