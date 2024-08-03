// eslint-disable-next-line no-unused-vars
import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Best YouTube Channel to Learn Web Development</h3>
            <div className="play-video-info">
                <p>1.5K views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="like" /> 125</span>
                    <span><img src={dislike} alt="dislike" /> 2</span>
                    <span><img src={share} alt="share" /> Share</span>
                    <span><img src={save} alt="save" /> Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="jack" />
                <div>
                    <p>Suryaeceran</p>
                    <span>1M subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>Subscribe Suryaeceran to Watch More Tutorials on Web Development</p>

                <hr />

                <h4>130 Comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="user-profile" />
                    <div>
                        <h3>Raja Iblis <span>1 day ago</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tellus sed velit
                            sagittis facil
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>244</span>
                            <img src={dislike} alt="dislike" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user-profile" />
                    <div>
                        <h3>Raja Iblis <span>1 day ago</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tellus sed velit
                            sagittis facil
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>244</span>
                            <img src={dislike} alt="dislike" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user-profile" />
                    <div>
                        <h3>Raja Iblis <span>1 day ago</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tellus sed velit
                            sagittis facil
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>244</span>
                            <img src={dislike} alt="dislike" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user-profile" />
                    <div>
                        <h3>Raja Iblis <span>1 day ago</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tellus sed velit
                            sagittis facil
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>244</span>
                            <img src={dislike} alt="dislike" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user-profile" />
                    <div>
                        <h3>Raja Iblis <span>1 day ago</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tellus sed velit
                            sagittis facil
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>244</span>
                            <img src={dislike} alt="dislike" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo