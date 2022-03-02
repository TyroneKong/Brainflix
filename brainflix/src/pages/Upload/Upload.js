import Header from "../../components/Header/header";
import thumbnailImage from "../../assets/Images//Upload-video-preview.jpg";
import React from "react";

import "./Upload.scss";
class Upload extends React.Component {
  render() {
    return (
      <div className="upload">
        <div className="upload__header">
          <Header />
        </div>

        <hr className="divider"></hr>
        <div className="upload__heading-container">
          <h1 className="upload__heading">Upload Video</h1>
        </div>
        <div className="upload__container">
          <div className="upload__thumbnail">
            <h2 className="upload__thumbnail-heading">VIDEO THUMBNAIL</h2>
            <img
              className="upload__thumbnail-image"
              src={thumbnailImage}
              alt="bicycle handlebars"
            ></img>
          </div>
          <form className="upload__form">
            <div className="upload__input-container">
              <label className="upload__input-label">
                TITLE YOUR VIDEO
                <input
                  className="upload__input"
                  placeholder="Add a title to your video"
                ></input>
              </label>
            </div>

            <div className="upload__textarea-container">
              <label className="upload__textarea-label">
                ADD A VIDEO DESCRIPTION
                <textarea
                  className="upload__textarea"
                  placeholder="Add a description to your video"
                ></textarea>
              </label>
            </div>
          </form>
        </div>

        <div className="upload__buttons">
          <button>PUBLISH</button>
          <button className="upload__button-cancel">CANCEL</button>
        </div>
      </div>
    );
  }
}

export default Upload;
