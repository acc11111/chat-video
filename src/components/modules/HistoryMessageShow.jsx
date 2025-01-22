import React, { useState } from 'react'
import { useEffect } from 'react'
import './HistoryMessageShow.css'

function HistoryMessageShow(props) {


    useEffect(() => { }, [props.messages]) //后续删除变为socket的广播




    return (
        < div className='u-HistoryMessageShow-container'>
            {props.messages.map((m, i) => {
                return (
                    <div
                        className='u-HistoryMessageShow-single-container'
                        key={i}
                        style={{ backgroundColor: m.sender === props.username ? '#09BB07' : 'transparent', color: m.sender === props.username ? 'white' : 'black' }}
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