import commentIcon from "../../assets/Icons/add_comment.svg";
import "./conversation.scss";
import React from "react";
import axios from "axios";
const url = "https://project-2-api.herokuapp.com";
const apiKey = "5fb42916-1146-4e86-8046-9b41e6cb4c0f";


class Conversation extends React.Component {


  // make a post request with the new changed state, temporary reload to test post
  handleSubmit=(e)=>{
   
    e.preventDefault();
    const user = Math.floor(Math.random()* 1000)
    const commentInput = e.target.commentfield.value
    const { id, videos } = this.props;
    console.log(id)
    const body = { name: `user:${user}` , comment:commentInput};

    axios
      .post(
        `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key='5fb42916-1146-4e86-8046-9b41e6cb4c0f`,body,{
        
        }).then(response=>{
          console.log(response)
          videos()
        })
        
  }

      

    
  

  
  render() {
    
    const { countComments } = this.props;
    return (
      <section className="conversation">
        <form onSubmit={this.handleSubmit} className="conversation__form">
          <div className="comment__section">
            <div className="conversation__comment-container">
              <p className="conversation__commentCount">
                {countComments} Comments
              </p>
              <div className="conversation__avatar"></div>
              <div className="conversation__label-comment">
                <label
                  htmlFor="comment"
                  className="conversation__label-heading"
                >
                  JOIN THE CONVERSATION
                </label>
              </div>
              <textarea
                onChange={this.handleChange}
                htmlFor="comment"
                id="comment"
                className="conversation__text"
                name="commentfield"
                placeholder="Add a new comment"
                required
              ></textarea>

              <div className="conversation__btn">
                <img
                  className="comment__icon"
                  src={commentIcon}
                  alt="comment icon"
                ></img>
                <button type="submit" className="comment__btn">
                  COMMENT
                </button>
              </div>
            </div>
          </div>
        </form>

        <hr className="conversation__divide" />
      </section>
    );
  }
}

export default Conversation;
