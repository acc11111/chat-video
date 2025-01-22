import React, { useState } from 'react'
import SetUsername from './modules/SetUsername'
import HistoryMessageShow from './modules/HistoryMessageShow'
import MessagePost from './modules/MessagePost'
import './Chat.css'

//数据格式
//messages = {sender:String,content:String,time:Date}

function Chat() {
    const [username, setUsername] = useState("init-user")
    const [messages, setMessages] = useState([])


    return (<div className='u-Chat-container'>
        <SetUsername username={username} setUsername={setUsername} />
        <HistoryMessageShow messages={messages} setMessages={setMessages} username={username} />
        <MessagePost username={username} setMessages={setMessages} messages={messages} />
    </div>)
};

export default Chat


