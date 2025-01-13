import React from 'react'

function SetUsername(props) {

    return (
        <div>
            <input
                type="text"
                value={props.username}
                onChange={e => props.setUsername(e.target.value)}
                placeholder="Enter your username"
            />
        </div>
    )
};

export default SetUsername