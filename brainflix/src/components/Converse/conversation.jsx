import commentIcon from "../../assets/Icons/add_comment.svg";
import "./conversation.scss";
import React from "react";
import axios from "axios";

class Conversation extends React.Component {
  // make a post request with the new changed state, temporary reload to test post

  handleSubmit = (e) => {
    e.preventDefault();
    const commentInput = e.target.commentfield.value;
    const { id, videos } = this.props;

    axios
      .post(`http://localhost:8180/videos/${id}/comments`, {
        comment: commentInput,
      })
      .then((response) => {
        console.log(response);
        videos(id);
      });
    document.getElementById("commentForm").reset();
  };

  render() {
    const { countComments } = this.props;
    return (
      <section className="conversation">
        <form
          id="commentForm"
          onSubmit={this.handleSubmit}
          className="conversation__form"
        >
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
