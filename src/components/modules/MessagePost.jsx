import React, { useState } from 'react'
import { useEffect } from 'react';


function MessagePost(props) {
    const [inputValue, setInputValue] = useState("")

    const formatStandardTime = (date) => {
        const year = date.getFullYear(); // 获取年份
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 获取月份（注意月份从 0 开始）
        const day = date.getDate().toString().padStart(2, '0'); // 获取日期
        const hours = date.getHours().toString().padStart(2, '0'); // 获取小时
        const minutes = date.getMinutes().toString().padStart(2, '0'); // 获取分钟
        const seconds = date.getSeconds().toString().padStart(2, '0'); // 获取秒
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; // 返回标准时间字符串
    };

    const [ip, setIp] = useState("")

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setIp(data.ip))
            .catch(error => console.error('Error fetching IP:', error));
    }, []);

    // 示例使用
    const now = formatStandardTime(new Date()); // 当前时间



    const handleMessagePostClick = () => {
        const newMessage = {
            sender: props.username,
            content: inputValue,
            time: now,
            ip: ip
        }
        props.setMessages([...props.messages, newMessage])
        setInputValue("")
        console.log(props.messages)
    }
    return (<div>
        <input
            type="text"
            placeholder='Enter your message'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button
            onClick={handleMessagePostClick}
        >
            Post
        </button>
    </div>)
};


export default MessagePost