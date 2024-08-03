// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Video.css'
import PlayVideo from "../../components/play_video/PlayVideo.jsx"
import Recommended from "../../components/recommended/Recommended.jsx"
import { useParams } from 'react-router-dom'

const Video = () => {

    const { videoId, categoryId } = useParams()

    return (
        <div className='play-container'>
            <PlayVideo videoId={videoId} />
            <Recommended categoryId={categoryId} />
        </div>
    )
}

export default Video
