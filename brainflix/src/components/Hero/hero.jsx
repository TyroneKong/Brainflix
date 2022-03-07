import viewIcon from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";
import "./hero.scss";
// import play from "../../assets/Icons/play.svg";
// import pause from "../../assets/Icons/pause.svg";
// import volumeOff from "../../assets/Icons/volume_off.svg";
// import volumeUp from "../../assets/Icons/volume_up.svg";
// import fullscreen from "../../assets/Icons/fullscreen.svg";
// import closeFullscreen from "../../assets/Icons/close_fullscreen.svg";

const Hero = ({ current }) => {

  const timestamp = current.timestamp;
  const date = new Date(timestamp);

  const formattedDate =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <video poster={current.image} className="hero__video" controls>
            <source src={current.video}></source>
          </video>
        </div>
        <div className="hero__title-container">
          <h1 className="hero__title-heading">{current.title}</h1>
        </div>

        <hr className="hero__divide"></hr>

        <div className="hero__statistics">
          <div className="hero__statistics-paragraph">
            <p>By Red Crow</p>
          </div>

          <div className="hero__statistics-date">
            <p>{formattedDate}</p>
          </div>
        </div>

        <div className="hero__statistics-icons">
          <div className="hero__statistics-views-info">
            <img
              src={viewIcon}
              className="hero__statistics-views"
              alt="view icon"
            ></img>
            <p className="hero__statistics-viewsNumber">{current.views}</p>
          </div>
          <div className="hero__statistics-likes-info">
            <img
              src={likes}
              className="hero__statistics-likes"
              alt="likes icon"
            ></img>
            <p className="hero__statistics-likesNumber">{current.likes}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
