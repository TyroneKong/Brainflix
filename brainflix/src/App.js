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

// comments
const comments = [
  {
    Name: "Michael Lyons",
    Comment:
      "They BLEW the ROOF off at their lastevent, once everyone started figuringout they were going. This is still simplythe greatest opening of an event I have EVER witnessed.",
    Date: "08/09/2021",
  },
  {
    Name: "Gary Wong",
    Comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish Ican ride like him one day so I can really enjoy myself!",
    Date: "07/15/2021",
  },
  {
    Name: "Theodore Duncan",
    Comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    Date: "07/11/2021",
  },
];

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
    console.log(currentVideoObject);

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
