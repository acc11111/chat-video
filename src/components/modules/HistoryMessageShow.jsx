import React from 'react'
import { useEffect } from 'react'

function HistoryMessageShow(props) {

    useEffect(() => { }, [props.messages])

    return (
        props.messages.map((m) => {
            console.log(m);
            return (
                < div >
                    <p><b>{m.sender}</b> | <b>{m.time}</b></p>
                    <p>{m.content}</p>
                </div >
            )
        })

    )
};


export default HistoryMessageShow