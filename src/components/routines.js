import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Routines = ({ routines, navigate, fetchRoutines }) => {
    
    const token = window.localStorage.getItem('token')
    const [searchTerm, setSearchTerm] = useState('');
    let delivery = ''

    function routineMatches(routine, text) {
        if (routine.name.toLowerCase().includes(text.toLowerCase()) || routine.description.toLowerCase().includes(text.toLowerCase())) {
            return true
        }
        else {
            return false
        }
    }

    const filteredRoutines = routines.filter(routine => routineMatches(routine, searchTerm));
    const routinesToDisplay = searchTerm.length ? filteredRoutines : routines;

    if (searchTerm.length && token) {
        return (
            <Fragment>
                <span id='routineHead'>
                    <form className='top' onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        <input
                            className="searchbar"
                            type='text'
                            placeholder="Search"
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                        {
                            <Link to='/createRoutine'>
                                <button id='createRoutineButton'>
                                    Create Routine
                                </button>
                            </Link>
                        }
                    </form>
                </span>
                {
                    routinesToDisplay.map((routine) => {
                        const { name, description, id } = routine
                        return (
                            <main>
                                <div id='Routines'>
                                    <div id='Routine' key={id}>
                                        <h3 id='RoutineName'>{name}</h3>
                                        <p><strong>Description</strong>{description}</p>
                                    </div>
                                </div>
                            </main>
                        )
                    })
                }
            </Fragment>
        )
    }
    else if (token) {
        return (
            <Fragment>
                <span id='routineHead'>
                    <form className='top' onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        <input
                            className="searchbar"
                            type='text'
                            placeholder="Search"
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                        <Link to='/createRoutine'>
                            <button id='createRoutineButton'>
                                Create Routine
                            </button>
                        </Link>
                    </form>
                </span>
                {
                    routines.map((routine) => {
                        const { name, description, id } = routine
                        return (
                            <main>
                                <div id='Routines'>
                                    <div id='Routine' key={id}>
                                        <h3 id='RoutineName'>{name}</h3>
                                        <p><strong>Description</strong>{description}</p>
                                    </div>
                                </div>
                            </main>
                        )
                    })
                }
            </Fragment>
        )
    }
    else if (searchTerm.length) {
        return (
            <Fragment>
                <span id='routineHead'>
                    <form className='top' onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        <input
                            className="searchbar"
                            type='text'
                            placeholder="Search"
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                    </form>
                </span>
                {
                    routinesToDisplay.map((routine) => {
                        const { name, description, id } = routine
                        return (
                            <main>
                                <div id='Routines'>
                                    <div id='Routine' key={id}>
                                        <h3 id='RoutineName'>{name}</h3>
                                        <p><strong>Description</strong>{description}</p>
                                    </div>
                                </div>
                            </main>
                        )
                    })
                }
            </Fragment>
        )
    }
    else {
        return (
            <Fragment>
                <span id='routineHead'>
                    <form className='top' onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        <input
                            className="searchbar"
                            type='text'
                            placeholder="Search"
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                    </form>
                </span>
                {
                    routinesToDisplay.map((routine) => {
                        const { name, description, id } = routine
                        return (
                            <main>
                                <div id='Routines'>
                                    <div id='Routine' key={id}>
                                        <h3 id='RoutineName'>{name}</h3>
                                        <p><strong>Description</strong>{description}</p>
                                    </div>
                                </div>
                            </main>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default Routines