import React from "react";
import Hero from "../../components/Hero/hero";
import About from "../../components/About/about";
import Conversation from "../../components/Converse/conversation";
import CommentList from "../../components/Comment/commentList";
import VideoList from "../../components/VideoList/videoList";
import axios from "axios";
const url = "https://project-2-api.herokuapp.com";
const apiKey = "5fb42916-1146-4e86-8046-9b41e6cb4c0f";

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

  getVideos() {
    //call to retrieve all videos
    axios
      .get(`${url}/videos?api_key=${apiKey}`)
      .then((res) => {
        this.setState({
          allVideos: res.data,
        });
        //return function to retrieve video details of first element
        return this.getVideoDetails(res.data[0].id);
      })
      .then((response) => {
        // setting state with data retrieved from video details
        this.setState({
          currentVideoObject: response.data,
          currentComment: response.data.comments,
          numberComments: response.data.comments.length,
          currentId: response.data.id,
        });
      })
      .catch((err) => console.log(err));
  }

  // function to get all details of current object
  getVideoDetails(id) {
    return axios.get(
      `https://project-2-api.herokuapp.com/videos/${id}?api_key='5fb42916-1146-4e86-8046-9b41e6cb4c0f`
    );
  }

  // check if previous id doesnt match previous id using match and if true change the state
  componentDidUpdate(prevProps, prevState) {
    const videoId = this.props.match.params.id;
    // console.log(this.props.match);

    if (videoId) {
      if (videoId !== prevProps.match.params.id) {
        this.getVideoDetails(videoId).then((response) => {
          this.setState({
            currentVideoObject: response.data,
            currentComment: response.data.comments,
            numberComments: response.data.comments.length,
            currentId: response.data.id,
          });
        });
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
