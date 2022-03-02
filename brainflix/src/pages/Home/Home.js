import React from "react";
import Hero from "../../components/Hero/hero";
import About from "../../components/About/about";
import Conversation from "../../components/Converse/conversation";
import CommentList from "../../components/Comment/commentList";
import VideoList from "../../components/VideoList/videoList";
import axios from "axios";
import videoDetails from "../../Data/video-details.json";
// video object
const videoArray = videoDetails.map((video) => video);
// console.log(videoArray);

const commentsArray = videoArray.map((video) => video.comments);
// console.log(commentsArray);

class Home extends React.Component {
  // managing state
  state = {
    currentVideoObject: videoArray[0],
    allVideos: videoArray,
    currentComment: commentsArray[0],
    allComments: commentsArray,
    numberComments: commentsArray[0].length,
  };

  componentDidMount() {
    const data = axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key='5fb42916-1146-4e86-8046-9b41e6cb4c0f'"
      )
      .then((response) => response.data);
  }

  //function to change state based on id
  handleClick = (videoId) => {
    const { allVideos } = this.state;
    const foundVideo = allVideos.find((video) => video.id === videoId);

    this.setState({ currentVideoObject: foundVideo });
    this.setState({ currentComment: foundVideo.comments });
    this.setState({ numberComments: foundVideo.comments.length });
  };

  render() {
    const { currentVideoObject, allVideos, currentComment, numberComments } =
      this.state;

    return (
      <div className="wrapper">
        <Hero current={currentVideoObject} />
        <div className="desktop__wrapper">
          <div className="main">
            <About />

            <Conversation countComments={numberComments} />
            <CommentList commentArray={currentComment} />
          </div>
          <div className="next__video-main">
            <h3 className="next__videos-heading">NEXT VIDEOS</h3>
            <VideoList
              currentvideo={currentVideoObject}
              videoArr={allVideos}
              clickHandler={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
