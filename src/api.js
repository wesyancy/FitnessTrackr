//Wes - I got rid of the slash at the end of the baseURL
const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api'

export const getActivities = async () => {
    try{
        const response = await fetch(`${baseURL}/activities`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const results = await response.json()
        return (results);
    }
    catch (ex) {
        console.log('Error getting all activities')
    }
}

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                //store username & password within "user" object? see stranger's things
                username: username,
                password: password
            })
        })
        const result = await response.json();
        return result;
    }
    catch (ex){
        console.log('Error registering user')
    }
}

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                //store username & password within "user" object? see stranger's things
                username: username,
                password: password
            })
        })
        const result = await response.json();
        return result;
    }
    catch (ex) {
        console.log("Login Error")
    }
}

export const grabData = async (token) => {
    try{
      const response = await fetch(`${baseURL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      const result = await response.json();
      return result;
    }
    catch(ex){
      console.log("Error getting user data")
    }
  }

  //should we incorporate tokens for private routines? See API documentation.
  export const getRoutines = async (username) => {
      try{
        const response = await fetch(`${baseURL}/users/${username}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },            
        })
        const result = await response.json();
        return result;
      }
      catch(ex){
          console.log("Error getting routines")
      }
  }

  export const createActivity = async (token, activity) => {
      try {
        const response = await fetch(`${baseURL}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                //used activity object - not used in API docs.
                activity: {
                    name: activity.name,
                    description: activity.description
                }
            })  
        })
        const result = await response.json();
        return result;
      }
      catch(ex){
          console.log("Error creating activity")
      }
  }

    //Should this take a token? API says anyone should be able to update, but requires user to be logged in.
  export const editActivity = async(activity, token) => {
      try {
        const response = await fetch(`${baseURL}/activities/${activity.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: activity.name,
                description: activity.description
            })
        })
        const result = await response.json();
        console.log("Post Successfully Edited!")
        return result;
      }
      catch(ex) {
        console.log("Error editing activity")
      }
  }

  export const getRoutineActivities = async(activity) => {
      try {
        const response = await fetch(`${baseURL}/activities/${activity.id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        return result;
      }
      catch(ex){
        console.log("Error obtaining routines for this activity")
      }
  }
  // should name, goal, is Public be in an object? Do we need headers section?
  export const createRoutine = async(token, {name, goal, isPublic}) => {
      try {
        const response = await fetch(`${baseURL}/routines`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: isPublic
            })
        })
        const result = await response.json();
        return result;
      }
      catch(ex){
        console.log("Error creating routine")
      }
  }
// token?
  export const editRoutine = async(token, routine) => {
      try {
        const response = await fetch(`${baseURL}/routines/${routine.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: routine.name,
                goal: routine.goal, 
                isPublic: routine.isPublic
            })
        })
        const result = await response.json();
        return result;
      }
      catch(ex){
          console.log("Error updating routine")
      }
  }

  export const deleteRoutine = async(token, routineId) => {
      try {
        const response = await fetch(`${baseURL}/routines/${routineId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await response.json();
        return result;
      }
      catch(ex) {
        console.log("Error deleting routine")
      }
  }
  //passing in full routineActivity object, use individual parts?
  export const attachActivitytoRoutine = async(routineActivity) => {
      try {
        const response = await fetch(`${baseURL}/routines/${routineActivity.routineId}/activities`, {
            method: "POST",
            body: JSON.stringify({
                activityId: routineActivity.activityId,
                count: routineActivity.count,
                duration: routineActivity.duration
            })
        })
        const result = await response.json();
        return result;
      }
      catch(ex) {
        console.log("Error attaching to routine")
      }
  }

  export const updateRoutineActivity = async(token, routineActivity) => {
      try{
        const response = await fetch(`${baseURL}/routine_activities/${routineActivity.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                count: routineActivity.count,
                duration: routineActivity.duration
            })
        })
        const result = await response.json();
        return result;
      }
      catch(ex){
          console.log("Error updating routine activity")
      }
  }

  export const deleteRoutineActivity = async(token, routineActivity) => {
      try{
        const response = await fetch(`${baseURL}/routine_activities/${routineActivity.id}`, {
            method : "DELETE", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const result = await response.json();
        return result;
      }
      catch(ex){
          console.log("Error deleting routine activity")
      }
  }