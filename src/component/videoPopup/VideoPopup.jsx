import React from 'react';
import './style.scss'
import ReactPlayer from 'react-player';

function VideoPopup({ show, setShow, videoId, setVideoId }) {

    const hidePopup = () => {
        setShow(false)
        setVideoId(null)
    };

    return (
        <div className={`videoPopup ${show ? "visible" : ''}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    height="100%"
                    width="100%"
                    playing={true}
                />
            </div>
        </div>
    )
}

export default VideoPopup;