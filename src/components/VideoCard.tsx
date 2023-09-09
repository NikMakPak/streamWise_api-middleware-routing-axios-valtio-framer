import React from 'react';
import "./VideoCard.css";

const VideoCard = (props: any) => {
    return (
        <div className="frame-container" onClick={() => console.log(`${props.video.id} opened`)}>
            <div className="frame-div">
                <div className="frame-wrapper">
                    <img className="image-icon" alt="" src={props.video.image}/>
                    <div className="rectangle-parent">
                        <div className="frame-child"/>
                        <div className="div">{props.video.timing}</div>
                    </div>
                </div>
                <div className="text">
                    <div className="csgo">{props.video.title}</div>
                    <div className="ellipse-parent">
                        <div className="frame-item"/>
                        <div className="frame-item"/>
                        <div className="frame-item"/>
                    </div>
                </div>
                <div className="group">
                    <div className="ellipse-group">
                        <img
                            className="ellipse-icon"
                            alt=""
                            src={"/ellipse-18@2x.png"}
                        />
                        <div className="impulse-group">
                            <div className="impulse">{props.video.author}</div>
                            <div className="div1">Неделю назад</div>
                        </div>
                    </div>
                    <div className="like-dislike">
                        <img src="/thumbIcon.svg" alt="like" onClick={(e) => {
                            console.log("like")
                            e.stopPropagation()
                        }}/>
                        <img src="/thumbIcon.svg" style={{transform: 'rotate(180deg)'}} alt="dislike" onClick={(e) => {
                            console.log("dislike")
                            e.stopPropagation()
                        }}/>
                    </div>
                </div>
            </div>

            <div className="category">
                <div className="div20">{props.video.category}</div>
            </div>
        </div>
    );
};

export default VideoCard;