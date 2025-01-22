import React, { useState } from 'react'
import UrlSelectior from './modules/UrlSelector'
import VideoPlayer from './modules/VideoPlayer'
import './Video.css'

//TODO:add 虾米解析URL
const baseUrl = ""

function Video() {
    const [videoUrl, setVideoUrl] = useState("");


    return (<div className='u-Video-container' >
        <UrlSelectior setVideoUrl={setVideoUrl} />
        <VideoPlayer videoUrl={videoUrl} />
    </div >)
};

export default Video;