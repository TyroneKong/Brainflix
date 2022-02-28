import Video from "./video";

const VideoList = ({ clickHandler, videoArr, currentvideo }) => {
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
          func={clickHandler}
        />
      );
    });
};

export default VideoList;
