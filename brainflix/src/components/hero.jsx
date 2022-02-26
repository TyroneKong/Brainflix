import viewIcon from "../assets/Icons/views.svg";
import likes from "../assets/Icons/likes.svg";
import "./hero.scss"


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
          <h1 className="hero__title-heading">{current.title}</h1>
        </div>
      
      <hr className="hero__divide"></hr>
    
        <div className="hero__statistics">


        <div className="hero__statistics-paragraph">
          <p >By Red Crow</p>
         
        </div>

        <div className="hero__statistics-date">
        <p >{formattedDate}</p>

        </div>
        </div>


        <div className="hero__statistics-icons">
          <div className="hero__statistics-views-info">
            <img src={viewIcon} className="hero__statistics-views"></img>
            <p className="hero__statistics-viewsNumber">{current.views}</p>
          </div>
          <div className="hero__statistics-likes-info">
            <img src={likes} className="hero__statistics-likes"></img>
            <p className="hero__statistics-likesNumber">{current.likes}</p>
          </div>
        </div> 
       
       </section>
      
    </>
  );
};

export default Hero;
