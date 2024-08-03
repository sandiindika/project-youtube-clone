// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Feed = ({category}) => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${import.meta.env.VITE_API_KEY}`
        await fetch(videoList_url)
    }

    return (
        <div className='feed'>
            <Link to={`video/20/4521`} className='card'>
                <img src={thumbnail1} alt="thumbnail-1" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>1.5M views &bull; 2 days ago</p>
            </Link>
            <div className='card'>
                <img src={thumbnail2} alt="thumbnail-2" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>1.5M views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt="thumbnail-3" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>1.5M views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} alt="thumbnail-4" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>1.5M views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} alt="thumbnail-5" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>1.5M views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} alt="thumbnail-6" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>1.5M views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} alt="thumbnail-7" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>834K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt="thumbnail-8" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>300K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail1} alt="thumbnail-1" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>1.5M views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail2} alt="thumbnail-2" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>939K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt="thumbnail-3" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>305K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} alt="thumbnail-4" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>340K views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} alt="thumbnail-5" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>1.5M views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} alt="thumbnail-6" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>1.5M views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} alt="thumbnail-7" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>1.5M views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt="thumbnail-8" />
                <h2>Best channel to learn coding that help you to be a web developer</h2>
                <h3>Suryaeceran</h3>
                <p>1.5M views &bull; 2 days ago</p>
            </div>
        </div>
    )
}

export default Feed
