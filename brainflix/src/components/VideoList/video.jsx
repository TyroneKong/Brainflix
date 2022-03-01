import "./video.scss";

const Video = ({ func, title, channel, image, id }) => {
  return (
    <div className="vertical">
      <div>
        <section className="next">
          <div
            className="next__videos"
            onClick={(event) => {
              func(id);
            }}
          >
            <div className="next__card">
              <img className="next__image" src={image} alt="video"></img>
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
