import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { tmdbApi } from "../../api/tmdbApi";

export const VideoList = (props) => {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await tmdbApi.getVideos(category, props.id);
      setVideos(response.results.slice(0, 3));
    };
    getVideos();
  }, [category, props.id]);

  return (
    <>
      {videos.map((video, i) => (
        <Video key={i} video={video} />
      ))}
    </>
  );
};

const Video = (props) => {
  const video = props.video;

  const iframeRef = useRef(null);

  useEffect(() => {
    const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{video.name}</h2>
      </div>
      <iframe
       src={`https://www.youtube.com/embed/${video.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};
