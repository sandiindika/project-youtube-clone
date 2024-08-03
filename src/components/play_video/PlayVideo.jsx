import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { value_converter } from "../../data";
import moment from 'moment';

const PlayVideo = ({ videoId }) => {
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentsData, setCommentsData] = useState([]);

    const fetchVideoData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${import.meta.env.VITE_API_KEY}`;
        await fetch(videoDetails_url)
            .then(response => response.json())
            .then(data => setApiData(data.items[0]));
    };

    const fetchChannelData = async () => {
        if (apiData) {
            const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${import.meta.env.VITE_API_KEY}`;
            await fetch(channelDetails_url)
                .then(response => response.json())
                .then(data => setChannelData(data.items[0]));

            const comments_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${import.meta.env.VITE_API_KEY}`;
            await fetch(comments_url)
                .then(response => response.json())
                .then(data => setCommentsData(data.items));
        }
    };

    useEffect(() => {
        fetchVideoData();
    }, []);

    useEffect(() => {
        fetchChannelData();
    }, [apiData]);

    return (
        <div className='play-video'>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Hello World"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : "0"} views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "2 days ago"}</p>
                <div>
                    <span><img src={like} alt="like" /> {apiData ? value_converter(apiData.statistics.likeCount) : 0}</span>
                    <span><img src={dislike} alt="dislike" /> </span>
                    <span><img src={share} alt="share" /> Share</span>
                    <span><img src={save} alt="save" /> Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="thumbnails-channel" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : "Surya Eceran"}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : 0} subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Like this video."}</p>

                <hr />

                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : "0"} Comments</h4>
                {commentsData.map((item, index) => {
                    return (
                        <div className="comment" key={index}>
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user-profile" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={like} alt="like" />
                                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={dislike} alt="dislike" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PlayVideo;