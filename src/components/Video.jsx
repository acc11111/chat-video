import React, { useState } from 'react'
import UrlSelectior from './modules/UrlSelector'

//TODO:add 虾米解析URL
const baseUrl = ""

function Video() {
    const [videoUrl, setVideoUrl] = useState("");


    return (<div className='u-App-container' >
        <UrlSelectior setVideoUrl={setVideoUrl} />
        {/* <VideoPlayer videoUrl={videoUrl} /> */}
    </div >)
};

export default Video;