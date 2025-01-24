import React from 'react'
// import './SetUsername.css'

function SetUsername(props) {

    return (
        <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                用户名
            </label>
            <div className="mt-2.5">
                <input
                    id='username'
                    type="text"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    value={props.username}
                    onChange={e => props.setUsername(e.target.value)}
                />
            </div>
        </div>
        // <div className=''>
        //     <input
        //         type="text"
        //         value={props.username}
        //         onChange={e => props.setUsername(e.target.value)}
        //         placeholder="Enter your username"
        //         className='border p-2 rounded w-full'
        //     />
        // </div>
    )
};

export default SetUsername