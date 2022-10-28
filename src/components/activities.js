import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Activities = ({ activities, navigate, fetchActivities }) => {
    
    const token = window.localStorage.getItem('token')
    const [searchTerm, setSearchTerm] = useState('');
    let delivery = ''

    function activityMatches(activity, text) {
        if (activity.name.toLowerCase().includes(text.toLowerCase()) || activity.description.toLowerCase().includes(text.toLowerCase())) {
            return true
        }
        else {
            return false
        }
    }

    const filteredActivities = activities.filter(activity => activityMatches(activity, searchTerm));
    const activitiesToDisplay = searchTerm.length ? filteredActivities : activities;

    if (searchTerm.length && token) {
        return (
            <Fragment>
                <span id='activityHead'>
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
                            <Link to='/createActivity'>
                                <button id='createActivityButton'>
                                    Create Activity
                                </button>
                            </Link>
                        }
                    </form>
                </span>
                {
                    activitiesToDisplay.map((activity) => {
                        const { name, description, id } = activity
                        return (
                            <main>
                                <div id='Activities'>
                                    <div id='Activity' key={id}>
                                        <h3 id='ActivityName'>{name}</h3>
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
                <span id='activityHead'>
                    <form className='top' onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        <input
                            className="searchbar"
                            type='text'
                            placeholder="Search"
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                        <Link to='/createActivity'>
                            <button id='createActivityButton'>
                                Create Activity
                            </button>
                        </Link>
                    </form>
                </span>
                {
                    activities.map((activity) => {
                        const { name, description, id } = activity
                        return (
                            <main>
                                <div id='Activities'>
                                    <div id='Activity' key={id}>
                                        <h3 id='ActivityName'>{name}</h3>
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
                <span id='activityHead'>
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
                    activitiesToDisplay.map((activity) => {
                        const { name, description, id } = activity
                        return (
                            <main>
                                <div id='Activities'>
                                    <div id='Activity' key={id}>
                                        <h3 id='ActivityName'>{name}</h3>
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
                <span id='activityHead'>
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
                    activitiesToDisplay.map((activity) => {
                        const { name, description, id } = activity
                        return (
                            <main>
                                <div id='Activities'>
                                    <div id='Activity' key={id}>
                                        <h3 id='ActivityName'>{name}</h3>
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

export default Activities