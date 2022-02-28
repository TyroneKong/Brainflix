import { Component } from "react";
import "./App.scss";
import "./assets/Font/AvenirNextLTPro-Bold.otf";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import videoDetails from "./Data/video-details.json";
import About from "./components/About/about";
import Conversation from "./components/Converse/conversation";
import VideoList from "./components/VideoList/videoList";
import CommentList from "./components/Comment/commentList";

// video object
const videoArray = videoDetails.map((video) => video);
//comments array
// const comments = videoArray[0].comments;

const commentsArray = videoArray.map((video) => video.comments);

class App extends Component {
  // managing state
  state = {
    currentVideoObject: videoArray[0],
    allVideos: videoArray,
    currentComment: commentsArray[0],
    allComments: commentsArray,
  };

  //function to change state based on id
  handleClick = (videoId) => {
    const { allVideos } = this.state;
    const foundVideo = allVideos.find((video) => video.id === videoId);
    console.log(foundVideo.comments);
    this.setState({ currentVideoObject: foundVideo });
    this.setState({ currentComment: foundVideo.comments });
  };

  render() {
    const { currentVideoObject, allVideos, currentComment, allComments } =
      this.state;
    const numberofComments = allComments.length;

    return (
      <div className="App">
        <div className="wrapper">
          <Header />

          <Hero current={currentVideoObject} />
          <div className="desktop__wrapper">
            <div className="main">
              <About />

              <Conversation countComments={numberofComments} />
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
      </div>
    );
  }
}

export default App;
