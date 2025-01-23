import React from "react";
import './VideoPlayer.css'
function VideoPlayer(props) {


    return (
        <div className='u-VideoPlayer-container' style={{ width: '100%', height: '100%' }}>
            <iframe className="u-VideoPlayer-iframe" src={props.videoUrl} allow="autoplay" allowFullScreen />
        </div>
    )
};

export default VideoPlayer