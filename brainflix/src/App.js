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

// video objects
const videoArray = videoDetails.map((video) => video);
const comments = videoArray[0].comments;

class App extends Component {
  // managing state
  state = {
    currentVideoObject: videoArray[0],
    allVideos: videoArray,
  };

  //function to change state based on id
  handleClick = (videoId) => {
    const { allVideos } = this.state;
    const foundVideo = allVideos.find((video) => video.id === videoId);
    this.setState({ currentVideoObject: foundVideo });
  };

  render() {
    const { currentVideoObject, allVideos } = this.state;
    const numberofComments = comments.length;

    return (
      <div className="App">
        <div className="wrapper">
          <Header />

          <Hero current={currentVideoObject} />
          <div className="desktop__wrapper">
            <div className="main">
              <About />

              <Conversation countComments={numberofComments} />
              <CommentList commentArray={comments} />
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
