import viewIcon from "../assets/Icons/views.svg";
import likes from "../assets/Icons/likes.svg";

const Hero = ({ current }) => {
  const timestamp = current.timestamp;
  const date = new Date(timestamp);

  const formattedDate =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <video
            poster={current.image}
            className="hero__video"
            width="750"
            height="500"
            controls
          >
            <source src={current.video}></source>
          </video>
        </div>
        <div className="hero__title-container">
          <h2 className="hero__title-heading">{current.title}</h2>
        </div>
      </section>
      <hr className="divide"></hr>
      <section className="statistics">
        <div className="statistics__info">
          <p className="statistics__paragraph">By Red Crow</p>
          <p className="statistics__date">{formattedDate}</p>
        </div>

        <div className="statistics__icons">
          <div className="statistics__views-info">
            <img src={viewIcon} className="statistics__views"></img>
            <p className="statistics__viewsNumber">{current.views}</p>
          </div>
          <div className="statistics__likes-info">
            <img src={likes} className="statistics__likes"></img>
            <p className="statistics__likesNumber">{current.likes}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
