import React, { useState } from 'react'
import SetUsername from './modules/SetUsername'
import HistoryMessageShow from './modules/HistoryMessageShow'
import MessagePost from './modules/MessagePost'
import './Chat.css'

//数据格式
//messages = {sender:String,content:String,time:Date,ip:String}

function Chat() {
    const [username, setUsername] = useState("init-user")
    const [messages, setMessages] = useState([])


    return (<div className='u-Chat-container'>
        <SetUsername username={username} setUsername={setUsername} />
        <HistoryMessageShow messages={messages} setMessages={setMessages} />
        <MessagePost username={username} setMessages={setMessages} messages={messages} />
    </div>)
};

export default Chat


