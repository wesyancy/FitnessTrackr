import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { editRoutine } from '../api';
// import { deleteRoutine } from '../api';

const EditRoutine = ({ routines, fetchRoutines, editRErrorMessage, setEditRErrorMessage, navigate }) => {
  const { routineId } = useParams();
  // console.log(postID)
  // console.log(posts)
  let token = window.localStorage.getItem('token')
  const currentRoutine = routines.filter(routine => routine.id === routineId);
  
  const {name, goal, isPublic} = currentRoutine;
  console.log(currentRoutine)
  
  const [newName, setNewName] = useState(name);
  const [newGoal, setNewGoal] = useState(goal);
  const [newisPublic, setNewisPublic] = useState(isPublic);
  
  async function updateRoutine() {
    const updatedRoutine = {
      token,  
      name: newName,
      goal: newGoal,
      isPublic: newisPublic,
      id: routineId
    }
    let results = await editRoutine(updatedRoutine)
    if (results.error) {
      console.log("Error updating Routine")
      setEditRErrorMessage("Error editing routine - Please ensure at least one field is filled out and routine name is not already in use")
    }
    else{
      navigate('./myRoutines')
      setEditRErrorMessage('')
    }
  }
  
  
  return (
    <form id="MessageEditContainer" onSubmit={ (event) => {
      event.preventDefault();
      updateRoutine();
      fetchRoutines()

      
    }}>
      <h1>Edit Routine</h1>
      <h3>{`${editRErrorMessage}`}</h3>
      <div>
      <input 
        className='PostInput'
        type='text'
        placeholder="Name"
        onChange={(event) => setNewName(event.target.value)}
      />
      </div>
      <div>
      <input 
        className='PostInput'
        type='text'
        placeholder="Goal"
        onChange={(event) => setNewGoal(event.target.value)}
      />
      </div>
      <div>
        Available for Public View?
      <input 
        type='checkbox'
        checked={newisPublic}
        onChange={(event) => setNewisPublic(event.target.checked)}
      />
      </div>
      <button type='submit' >Edit Routine</button>
    </form>
  )
}

export default EditRoutine;