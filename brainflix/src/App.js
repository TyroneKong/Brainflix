import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import "./assets/Font/AvenirNextLTPro-Bold.otf";
import Header from "./components/header";
import Hero from "./components/hero";
import videoDetails from "./Data/video-details.json";
import About from "./components/about";
import Comments from "./components/comments";
import Conversation from "./components/conversation";
import Video from "./components/nextVideo";

// video objects
const videoNextArray = videoDetails.map((video) => video);

// comments
const comments = [
  {
    Name: "Michael Lyons",
    Comment:
      "They BLEW the ROOF off at their lastevent, once everyone started figuringout they were going. This is still simplythe greatest opening of an event I haveEVER witnessed.",
    Date: "08/09/2021",
  },
  {
    Name: "Gary Wong",
    Comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish Ican ride like him one day so I can reallyenjoy myself!",
    Date: "07/15/2021",
  },
  {
    Name: "Theodore Duncan",
    Comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    Date: "07/11/2021",
  },
];

class App extends React.Component {
  // managing state
  state = {
    currentVideoObject: videoNextArray[0],
    allVideos: videoNextArray,
  };

  //function to change state based on id and title
  handleClick = (videoId) => {
    const { allVideos } = this.state;
    const foundVideo = allVideos.find((video) => video.id === videoId);
    this.setState({ currentVideoObject: foundVideo });
  };

  render() {
    const { currentVideo, currentVideoImage, currentVideoObject } = this.state;

    //mapping over comments 
    const allComments = comments.map((comment) => {
      return (
        <Comments
          key={uuidv4()}
          name={comment.Name}
          date={comment.Date}
          comment={comment.Comment}
        />
      );
    });

  //filter video by id and map over to render the returned array of videos    
    const videos = videoNextArray
      .filter((video) => video.id !== currentVideoObject.id)
      .map((video) => {
        return (
          <Video
            key={uuidv4()}
            id={video.id}
            title={video.title}
            channel={video.channel}
            image={video.image}
            func={this.handleClick}
          />
        );
      });

    return (
      <div className="App">
        <div className="wrapper">
          <Header />

          <Hero
            video={currentVideo}
            image={currentVideoImage}
            current={currentVideoObject}
          />

          <About />

          <Conversation />
          {allComments}
          <h3 className="next__videos-heading">NEXT VIDEOS</h3>
          {videos}
        </div>
      </div>
    );
  }
}

export default App;
