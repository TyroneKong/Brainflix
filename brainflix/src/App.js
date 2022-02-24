import React from "react";

import "./App.scss";
import "./assets/Font/AvenirNextLTPro-Bold.otf";
import Header from "./components/header";
import Hero from "./components/hero";
import videosArray from "./Data/videos.json";
import videoDetails from "./Data/video-details.json";
import About from "./components/about";
import Comments from "./components/comments";
import Conversation from "./components/conversation";
import Video from "./components/nextVideo";

const videoArray = videosArray.map((video) => video);
console.log(videoArray);

const videoDetailsArray = videoDetails.map((video) => video);
console.log(videoDetailsArray[0].title);

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

const result = comments.map((comment) => comment);
console.log(result);













class App extends React.Component {
  state = {
    currenttitle: videoDetailsArray[0].title,
    currentVideo: videoDetailsArray[0].video,
    currentVideoImage: videoDetailsArray[0].image,
    currentVideoObject: videoDetailsArray[0],
    allVideos: videoDetailsArray
  };

  handleClick=(videoid)=>{
const foundVideo = this.state.allVideos.find(video => video.id === videoid)
this.setState({currentVideoObject:foundVideo})
console.log(foundVideo)
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />

          <Hero video={this.state.currentVideo} image={this.state.currentVideoImage} current={this.state.currentVideoObject}/>

          <About />

          <Conversation />

          {comments.map((comment) => {
            return (
              <Comments
                name={comment.Name}
                date={comment.Date}
                comment={comment.Comment}
              />
            );
          })}
          
          <h3 className="next__videos-heading">NEXT VIDEOS</h3>
          {videoArray.filter(video=> video.id !== this.state.currentVideoObject.id).map((video) => {
            return (
              video.title !== this.currenttitle && (
                <Video
                id={video.id}
                  title={video.title}
                  channel={video.channel}
                  image={video.image}
                  func={this.handleClick}

                />
              )
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
