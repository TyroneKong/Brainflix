import thumbnailImage from "../../assets/Images//Upload-video-preview.jpg";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Upload.scss";
import publishIcon from "../../assets/Icons/publish.svg";
import axios from "axios";
import Header from "../../components/Header/header";

class Upload extends React.Component {
  state = {
    redirect: false,
  };

  upload = () => {};

  handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    axios
      .post(`http://localhost:8180/videos`, {
        title: title,
        description: description,
      })
      .then((response) => {
        console.log(response);
      });
    alert("Thank you for your submission");
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/"></Redirect>;
    }

    return (
      <div>
        <hr className="upload__divider"></hr>
        <div className="uploader__titles">
          <h1 className="uploader__heading">Upload Video</h1>
          <hr className="uploader__divider-tablet"></hr>
          <h2 className="uploader__thumbnail-heading">VIDEO THUMBNAIL</h2>
        </div>
        <div className="uploader">
          <div className="uploader__heading-container"></div>
          <div className="uploader__container">
            <div className="uploader__thumbnail">
              <img
                className="uploader__thumbnail-image"
                src="http://localhost:8180/images/fashion.jpg"
                alt="fashion picture"
              ></img>
            </div>

            <form onSubmit={this.handleSubmit} className="uploader__form">
              <div className="uploader__input-container">
                <label className="uploader__input-label">
                  TITLE YOUR VIDEO
                  <input
                    className="uploader__input"
                    placeholder="Add a title to your video"
                    name="title"
                  ></input>
                </label>
              </div>

              <div className="uploader__textarea-container">
                <label className="uploader__textarea-label">
                  ADD A VIDEO DESCRIPTION
                  <textarea
                    className="uploader__textarea"
                    placeholder="Add a description to your video"
                    name="description"
                  ></textarea>
                </label>
              </div>

              <div className="uploader__buttons">
                <button type="submit" className="uploader__button--publish">
                  <img
                    className="uploader__button--publishMobileImage"
                    src={publishIcon}
                    alt="publish icon"
                  ></img>
                  PUBLISH
                </button>
                <Link to="/">
                  <button type="button" className="uploader__button--cancel">
                    CANCEL
                  </button>
                </Link>

                <button
                  type="submit"
                  className="uploader__button--publishDesktop"
                >
                  <img
                    className="uploader__button--publishDesktopImage"
                    src={publishIcon}
                    alt="publish icon"
                  ></img>
                  PUBLISH
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
