import {FunctionComponent, useEffect, useState} from "react";
import "./Main.css";
import VideoCard from "../components/VideoCard";
import {useParams} from "react-router-dom";
import {Video} from "../interfaces";
import axios from "axios";
const Category: FunctionComponent = () => {
  const [videoData, setVideoData] = useState<Video[]>([])
  useEffect(()=>{
    axios.get('/api/v1/vidio/getAllVideos')
        .then(response => {
          setVideoData(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
  },[])
  const {title} = useParams()
  return (
      <div className="video-wrap">
        <h1>{title}</h1>
        {videoData.map((video) => (
            <VideoCard key={video.id} video={video}/>
        ))}
      </div>
  );
};

export default Category;
