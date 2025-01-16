import React from 'react'
import { useEffect } from 'react'
import './HistoryMessageShow.css'

function HistoryMessageShow(props) {

    useEffect(() => { }, [props.messages])

    return (
        < div className='u-HistoryMessageShow-container'>
            {props.messages.map((m) => {
                console.log(m);
                return (

                    <div className='u-HistoryMessageShow-single-container'>
                        <p className='info-container'><b>{m.sender}</b> | <b>{m.time}</b></p>
                        <p className='content-container'>{m.content}</p>
                    </div>

                )
            })}
        </div>

    )
};


export default HistoryMessageShow