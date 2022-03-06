import commentIcon from "../../assets/Icons/add_comment.svg";
import "./conversation.scss";
import React from "react";
import axios from "axios";

class Conversation extends React.Component {
  state = {
    name: "",
    comment: "",
  
  };

  // use an onchange handler to set state to user input
  handleChange = (e) => {
    this.setState({
      name: "user:"  + Math.floor(Math.random() * 1000),
      comment: e.target.value,
    });
  };

  // make a post request with the new changed state
  postComment = (e) => {
    e.preventDefault();
    const { id, videos } = this.props;
    const body = { name: this.state.name, comment: this.state.comment };

    return axios
      .post(
        `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key='5fb42916-1146-4e86-8046-9b41e6cb4c0f`,
        body
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { countComments } = this.props;
    return (
      <section className="conversation">
        <form onSubmit={this.postComment} className="conversation__form">
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
                name="commenfield"
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
