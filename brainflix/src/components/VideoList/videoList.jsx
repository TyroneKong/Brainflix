import { Link } from "react-router-dom";
import Video from "./video";

const VideoList = ({ videoArr, currentvideo }) => {
  const videos = videoArr;
  const current = currentvideo;

  // filter the video id
  return videos
    .filter((video) => video.id !== current.id)
    .map((video) => {
      return (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
          comment={video.comment}
          image={video.image}
        />
      );
    });
};

export default VideoList;
