import React, { useState } from 'react'
import { useEffect } from 'react'
import './HistoryMessageShow.css'

function HistoryMessageShow(props) {


    useEffect(() => { }, [props.messages]) //后续删除变为socket的广播




    return (
        <div className='max-w-3xl mx-auto space-y-8 p-4' style={{ height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
            {props.messages.map((m, i) => (
                <div
                    key={i}
                    className={`p-6 rounded-lg shadow-sm ${m.sender === props.username
                        ? 'bg-green-500 text-white'
                        : 'bg-white border border-gray-200'
                        }`}
                >
                    {/* 发送者 + 时间 */}
                    <p className={`text-sm font-semibold mb-2 ${m.sender === props.username ? 'text-white/80' : 'text-gray-500'
                        }`}>
                        {m.sender} | {m.time}
                    </p>

                    {/* 消息内容 */}
                    <p className={`text-base leading-relaxed ${m.sender === props.username ? 'text-white' : 'text-gray-900'
                        }`}>
                        {m.content}
                    </p>
                </div>
            ))}
        </div>

    )
};


export default HistoryMessageShow