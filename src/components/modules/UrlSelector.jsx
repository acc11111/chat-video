import React, { useState } from 'react'
import './UrlSelector.css'

function UrlSelector(props) {
    const baseUrl = "https://jx.xmflv.com/?url="
    const [url, setUrl] = useState('')

    const handleButtonClick = () => {
        props.setVideoUrl(baseUrl + url)
        console.log(baseUrl + url)
    }
    const handleInputChange = (e) => {
        setUrl(e.target.value)
    }

    return (<>
        <div className='u-UrlSelector-container'>
            <input type="text" className='u-UrlSelector-input' onChange={handleInputChange} />
            <button className='u-UrlSelector-button' onClick={handleButtonClick}>解析</button>
        </div>
        <div className='u-UrlSelector-link-container'>
            <a href="https://www.bilibili.com" target="_blank" rel="noopener noreferrer">B站</a>
            <a href="https://v.qq.com" target="_blank" rel="noopener noreferrer">腾讯</a>
            <a href="https://www.youku.com" target="_blank" rel="noopener noreferrer">优酷</a>
            <a href="https://www.iqiyi.com" target="_blank" rel="noopener noreferrer">爱奇艺</a>
        </div>
    </>)

};

export default UrlSelector;