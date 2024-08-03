// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from "react-router-dom";
import { value_converter } from '../../data';
import moment from 'moment';

// eslint-disable-next-line react/prop-types
const Feed = ({ category }) => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=ID&videoCategoryId=${category}&key=${import.meta.env.VITE_API_KEY}`
        await fetch(videoList_url)
            .then(response => response.json())
            .then(data => setData(data.items))
    }

    useEffect(() => {
        fetchData()
    }, [category])

    return (
        <div className='feed'>
            {data.map((item, index) => {
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card' key={index}>
                        <img src={item.snippet.thumbnails.medium.url} alt="video-tumbnail" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default Feed
