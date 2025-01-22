import React, { useState } from 'react'
import { useEffect } from 'react';
import './MessagePost.css'


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



    // 示例使用
    const now = formatStandardTime(new Date()); // 当前时间


    //检测用户名与信息不为空，否则弹出信息
    const handleMessagePostClick = () => {
        if (inputValue === "" && props.username === "") {
            alert("用户名与输入信息为空！")
        }
        else if (inputValue === "") {
            alert("输入信息为空！")
            return
        }
        else if (props.username === "") {
            alert("用户名为空！")
        }
        else {
            const newMessage = {
                sender: props.username,
                content: inputValue,
                time: now,
            }
            props.setMessages([...props.messages, newMessage])
            setInputValue("")
            console.log(props.messages)
        }
    }
    return (<div className='u-MessagePost-container'>
        <input className='u-MessagePost-input'
            type="text"
            placeholder='Enter your message'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='u-MessagePost-button'
            onClick={handleMessagePostClick}
        >
            发送
        </button>
    </div>)
};


export default MessagePost