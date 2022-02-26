
import Video from "./video";


const VideoList=(props)=>{
    const videos = props.videoArr
    console.log(videos)
    const current = props.currentvideo
    console.log(current)


    return videos.filter((video) => video.id !== current.id)
    .map((video) => {
      return (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
          image={video.image}
          func={props.clickHandler}
        />
      );
    });

}

export default VideoList