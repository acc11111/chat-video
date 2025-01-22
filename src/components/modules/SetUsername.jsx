import React from 'react'
import './SetUsername.css'

function SetUsername(props) {

    return (
        <div className='u-SetUsername-container'>
            <input
                type="text"
                value={props.username}
                onChange={e => props.setUsername(e.target.value)}
                placeholder="Enter your username"
                className='u-SetUsername-input'
            />
        </div>
    )
};

export default SetUsername