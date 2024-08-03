// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Video.css'
import PlayVideo from "../../components/play_video/PlayVideo.jsx"
import Recommended from "../../components/recommended/Recommended.jsx"

const Video = () => {
    return (
        <div className='play-container'>
            <PlayVideo />
            <Recommended />
        </div>
    )
}

export default Video
