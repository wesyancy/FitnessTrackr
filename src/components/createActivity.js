import React, {useState} from 'react';
import { createActivity } from '../api';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MakeActivity = ({fetchActivities, navigate}) => {
    const token = window.localStorage.getItem('token')
    const [name, activityName] = useState('')
    const [description, activityDescription] = useState('')
    const activity = {name : name, description: description}

    const handleSubmit = async () => {
        const results = await createActivity(token, activity)
        if (results.name) {
            fetchActivities()
            navigate('/activities')
            return(
                <div>
                    <h3>{name}</h3>
                    <p><strong>Description:</strong>{description}</p>
                </div>
            )
        }
        else {
            console.log("Error creating activity")
        }
    }
    if(token){
        return(
            <form id="CreateActivityContainer" onSubmit={(event) => {
                event.preventDefault()
                handleSubmit();
            }}>
                <h1>Create an Activity</h1>
                <div>
                    <input
                    className='ActivityInput'
                    type='name'
                    placeholder='Enter Activity Name'
                    onChange={(event) => activityName(event.target.value)}
                    />
                </div>
                <div>
                    <input 
                    className='ActivityInput'
                    type='name'
                    placeholder='Enter Activity Description'
                    onChange={(event) => activityDescription(event.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
                <Link to='activities'><button>Back</button></Link>
            </form>
        )
    }
    else{
        return(
            <div id='FlexContainer'>
                <h2>Please Login or Register to Begin Creating Activities</h2>
            </div>
        )
    }
}

export default MakeActivity