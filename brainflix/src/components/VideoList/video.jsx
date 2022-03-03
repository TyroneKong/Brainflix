import "./video.scss";
import { Link } from "react-router-dom";

const Video = ({ title, channel, image, id }) => {
  return (
    <div className="vertical">
      <div>
        <section className="next">
          <div className="next__videos">
            <div className="next__card">
              <Link to={`/video/${id}`}>
                <img className="next__image" src={image} alt="video"></img>
              </Link>
              <ul className="next__video-list">
                <li className="next__title">
                  <p className="next__bold">
                    <span>{title}</span>
                  </p>
                </li>
                <li className="next__channel">{channel}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Video;
