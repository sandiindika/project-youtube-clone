import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { value_converter } from '../../data'

const Recommended = ({ categoryId }) => {

    const [apiData, setApiData] = useState([])

    const fetchData = async () => {

        const relatedVideos_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResult=45&regionCode=ID&videoCategoryId=${categoryId}&key=${import.meta.env.VITE_API_KEY}`
        await fetch(relatedVideos_url)
            .then(response => response.json())
            .then(data => setApiData(data.items));
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='recommended'>
            {apiData.map((item, index) => {

                return (
                    <div className="side-video-list" key={index}>
                        <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_converter(item.statistics.viewCount)} views</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Recommended
