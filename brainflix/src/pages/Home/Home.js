import React from "react";
import Hero from "../../components/Hero/hero";
import About from "../../components/About/about";
import Conversation from "../../components/Converse/conversation";
import CommentList from "../../components/Comment/commentList";
import VideoList from "../../components/VideoList/videoList";
import axios from "axios";
import videoDetails from "../../Data/video-details.json";
const url = "https://project-2-api.herokuapp.com";
const apiKey = "5fb42916-1146-4e86-8046-9b41e6cb4c0f";

// video object
// const videoArray = videoDetails.map((video) => video);
// console.log(videoArray);

// const commentsArray = videoArray.map((video) => video.comments);
// console.log(commentsArray);

// const data = axios
//   .get(
//     "https://project-2-api.herokuapp.com/videos?api_key='5fb42916-1146-4e86-8046-9b41e6cb4c0f'"
//   )

class Home extends React.Component {
  // managing state
  state = {
    currentVideoObject: [], //videoArray[0],
    allVideos: [], //videoArray,
    currentComment: [], //commentsArray[0],
    allComments: [], //commentsArray,
    numberComments: [], //commentsArray[0].length,
  };

  //function to change state based on id
  // handleClick = (videoId) => {
  //   const { allVideos } = this.state;
  //   const foundVideo = allVideos.find((video) => video.id === videoId);

  //   this.setState({ currentVideoObject: foundVideo });
  //   this.setState({ currentComment: foundVideo.comments });
  //   this.setState({ numberComments: foundVideo.comments.length });
  // };

  componentDidMount() {
    this.getVideos();
  }

  getVideos() {
    axios
      .get(`${url}/videos?api_key=${apiKey}`)
      .then((res) => {
        this.setState({
          currentVideoObject: res.data[0],
          allVideos: res.data,
        });
        return this.getAllvideos(res.data[0].id);
      })
      .then((response) => {
        // setting state using the getALlVideos functions
        this.setState({
          currentComment: response.data.comments,
          numberComments: response.data.comments.length,
          currentVideoObject: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  // function to get all details of current object
  getAllvideos(id) {
    return axios.get(
      `https://project-2-api.herokuapp.com/videos/${id}?api_key='5fb42916-1146-4e86-8046-9b41e6cb4c0f'`
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const videoId = this.props.match.params.id;
    console.log(videoId);
    if (videoId) {
      if (videoId !== prevProps.match.params.id) {
        const foundVideo = this.state.allVideos.find(
          (video) => video.id === videoId
        );

        this.setState({
          currentVideoObject: foundVideo,
        });
      }
    }
  }

  render() {
    const { currentVideoObject, allVideos, currentComment, numberComments } =
      this.state;
    // console.log(this.state);
    // console.log(currentVideoObject);
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
            <VideoList currentvideo={currentVideoObject} videoArr={allVideos} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
