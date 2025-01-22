import React, { useState } from 'react'
import { useEffect } from 'react'
import './HistoryMessageShow.css'

function HistoryMessageShow(props) {

    const [myip, setMyip] = useState('')

    useEffect(() => { }, [props.messages]) //后续删除变为socket的广播

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setMyip(data.ip))
            .catch(error => console.error('Error fetching IP:', error));
    })


    return (
        < div className='u-HistoryMessageShow-container'>
            {props.messages.map((m, i) => {
                console.log(m);
                return (
                    <div
                        className='u-HistoryMessageShow-single-container'
                        key={i}
                        style={{ backgroundColor: m.ip === myip ? '#09BB07' : 'transparent', color: m.ip === myip ? 'white' : 'black' }}
                    >
                        <p className='info-container'><b>{m.sender}</b> | <b>{m.time}</b></p>
                        <p className='content-container'>{m.content}</p>
                    </div>
                )
            })}
        </div>

    )
};


export default HistoryMessageShow