import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { editRoutine } from '../api';

const EditRoutine = ({ routines, fetchRoutines, navigate }) => {
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
    await editRoutine(updatedRoutine)
  }
  
  
  return (
    <form id="MessageEditContainer" onSubmit={ (event) => {
      event.preventDefault();
      updateRoutine();
      fetchRoutines()
      navigate('./myRoutines')

      
    }}>
      <div>
      <input 
        className='PostInput'
        type='text'
        placeholder={name}
        onChange={(event) => setNewName(event.target.value)}
      />
      </div>
      <div>
      <input 
        className='PostInput'
        type='text'
        placeholder={goal}
        onChange={(event) => setNewGoal(event.target.value)}
      />
      </div>
      <div>
        Available for Public View?
      <input 
        type='checkbox'
        checked={isPublic}
        onChange={(event) => setNewisPublic(event.target.checked)}
      />
      </div>
      <button type='submit'>Edit Routine</button>
    </form>
  )
}

export default EditRoutine;