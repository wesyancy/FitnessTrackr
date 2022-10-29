import React, { useState } from 'react';
import { createRoutine } from '../api';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MakeRoutine = ({ fetchRoutines, fetchUserRoutines, navigate, createRErrorMessage, setCreateRErrorMessage }) => {
    const token = window.localStorage.getItem('token')
    const [name, routineName] = useState('')
    const [goal, routineGoal] = useState('')
    const [isPublic, setIsPublic] = useState(false)
    const routine = { name: name, goal: goal , isPublic: isPublic }

    const handleSubmit = async () => {
        const results = await createRoutine(token, routine)
        if (results.id) {
            fetchRoutines()
            fetchUserRoutines()
            setCreateRErrorMessage('')
            navigate('/myRoutines')
            return (
                <div>
                    <h3>{name}</h3>
                    <p><strong>Goal:</strong>{goal}</p>
                </div>
            )
        }
        else {
            console.log("Error creating routine")
            setCreateRErrorMessage("Error creating routine - Please ensure at least one field is filled out and routine name is not already in use")
        }
    }

    if (token) {
        return (
            <form id="CreateRoutineContainer" onSubmit={(event) => {
                event.preventDefault()
                handleSubmit();
            }}>
                <h1>Create a Routine</h1>
                <h3>{`${createRErrorMessage}`}</h3>
                <div>
                    <input
                        className='RoutineInput'
                        type='name'
                        placeholder='Enter Routine Name'
                        onChange={(event) => routineName(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        className='RoutineInput'
                        type='text'
                        placeholder='Enter Routine Goal'
                        onChange={(event) => routineGoal(event.target.value)}
                    />
                </div>
                <div>
                    Make Public?
                    <input
                        className='RoutineInput'
                        type='checkbox'
                        onChange={(event) => setIsPublic(event.target.value)}
                    />
                </div>
                <button type='submit' onClick={() => {fetchUserRoutines()}}>Submit</button>
                <Link to='/routines'><button>Back</button></Link>
            </form>
        )
    }
    else {
        return (
            <div id='FlexContainer'>
                <h2>Please Login or Register to Begin Creating Routines</h2>
            </div>
        )
    }
}

export default MakeRoutine