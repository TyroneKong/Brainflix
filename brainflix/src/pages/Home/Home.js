import React from "react";
import Hero from "../../components/Hero/hero";
import About from "../../components/About/about";
import Conversation from "../../components/Converse/conversation";
import CommentList from "../../components/Comment/commentList";
import VideoList from "../../components/VideoList/videoList";
import axios from "axios";

class Home extends React.Component {
  // managing state
  state = {
    currentVideoObject: [],
    allVideos: [],
    currentComment: [],
    allComments: [],
    numberComments: [],
    currentId: [],
  };

  componentDidMount() {
    this.getVideos();
  }

  getVideos = () => {
    //call to retrieve all videos
    axios
      .get(`http://localhost:8180/videos`)
      .then((res) => {
        this.setState({
          allVideos: res.data,
        });
        //return function to retrieve video details of first element
        this.getVideoDetails(res.data[0].id);
      })
      .catch((err) => console.log(err));
  };

  // function to get all details of current object
  async getVideoDetails(id) {
    try {
      await axios.get(`http://localhost:8180/videos/${id}`).then((response) => {
        // setting state with data retrieved from video details
        console.log(id);
        this.setState({
          currentVideoObject: response.data,
          currentComment: response.data.comments,
          numberComments: response.data.comments.length,
          currentId: response.data.id,
        });
      });
    } catch (err) {
      return console.log(err);
    }
  }

  // check if previous id !matches and if true invoke function to change state
  componentDidUpdate(prevProps, prevState) {
    const videoId = this.props.match.params.id;

    if (videoId) {
      if (videoId !== prevProps.match.params.id) {
        this.getVideoDetails(videoId);
      }
    }
  }

  render() {
    const {
      currentVideoObject,
      allVideos,
      currentComment,
      numberComments,
      currentId,
    } = this.state;

    return (
      <div className="wrapper">
        <Hero current={currentVideoObject} />
        <div className="desktop__wrapper">
          <div className="main">
            <About description={currentVideoObject.description} />

            <Conversation
              currentVideo={currentVideoObject}
              countComments={numberComments}
              id={currentId}
              videos={this.getVideos}
              previousState={currentComment}
            />
            <CommentList commentArray={currentComment} id={currentId} />
          </div>
          <div className="next__video-main">
            <h3 className="next__videos-heading">NEXT VIDEOS</h3>
            <VideoList currentvideo={currentVideoObject} videoArr={allVideos} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
