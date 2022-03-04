import thumbnailImage from "../../assets/Images//Upload-video-preview.jpg";
import React from "react";

import "./Upload.scss";
class Upload extends React.Component {
  render() {
    return (
      <div>
        <div className="upload__header"></div>
        <hr className="divider"></hr>

        <div className="uploader">
          <div className="uploader__heading-container">
            <h1 className="uploader__heading">Upload Video</h1>
          </div>
          <div className="uploader__container">
            <h2 className="uploader__thumbnail-heading">VIDEO THUMBNAIL</h2>
            <div className="uploader__thumbnail">
              <img
                className="uploader__thumbnail-image"
                src={thumbnailImage}
                alt="bicycle handlebars"
              ></img>
            </div>
            <form className="uploader__form">
              <div className="uploader__input-container">
                <label className="uploader__input-label">
                  TITLE YOUR VIDEO
                  <input
                    className="uploader__input"
                    placeholder="Add a title to your video"
                  ></input>
                </label>
              </div>

              <div className="uploader__textarea-container">
                <label className="uploader__textarea-label">
                  ADD A VIDEO DESCRIPTION
                  <textarea
                    className="uploader__textarea"
                    placeholder="Add a description to your video"
                  ></textarea>
                </label>
              </div>
            </form>
          </div>

          <div className="uploader__buttons">
            <button className="uploader__button-publish">PUBLISH</button>
            <button className="uploader__button-cancel">CANCEL</button>
            <button className="uploader__button-publishDesktop">PUBLISH</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
