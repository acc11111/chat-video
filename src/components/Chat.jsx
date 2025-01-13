import React, { useState } from 'react'
import SetUsername from './modules/SetUsername'
import HistoryMessageShow from './modules/HistoryMessageShow'
import MessagePost from './modules/MessagePost'

//数据格式
//messages = {sender:String,content:String,time:Date,ip:String}

function Chat() {
    const [username, setUsername] = useState("init-user")
    const [messages, setMessages] = useState([])


    return (<>
        <SetUsername username={username} setUsername={setUsername} />
        <HistoryMessageShow messages={messages} setMessages={setMessages} />
        <MessagePost username={username} setMessages={setMessages} messages={messages} />
    </>)
};

export default Chat


