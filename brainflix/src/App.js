import "./App.scss";
import videosArray from "./Data/videos.json";
import videoDetails from "./Data/video-details.json" 
import brainflixLogo from "./assets/Logo/BrainFlix-logo.svg";
import uploadSVG from "./assets/Icons/upload.svg"
import './assets/Font/AvenirNextLTPro-Bold.otf'


const videoArray = videosArray.map(video => video)
console.log(videoArray)

const videoDetailsArray = videoDetails.map(video => video)
console.log(videoDetailsArray[0].video)



function App(props) {
  return (
    <div className="App">
    <div className="wrapper">

    
      <header className="header">
        <div className="header__logo">
          <img className="header__logo-image" src={brainflixLogo} alt="brainflix logo"></img>
        </div>
        
        <div className="search">
          <input className="search__input" placeholder="Search"></input>
          <div className="search__avatar">
          
          </div>
        </div>
     
        <div className="upload">
          <button className="upload__button">UPLOAD</button>
        </div>
        <div className="upload__tablet-avatar">

        </div>
      </header>
      <section className="video">
        <div className="video__container">
        <video className="video" src={videoDetailsArray[0].name} width="750" height="500" controls>
     </video>
        </div>
        <div className="video__title-container">
          <h2 className="video__title-heading">BMX Rampage: 2021 Highlights</h2>
        </div>
      </section>
      <hr className="divide"></hr>
      <section className="statistics">
        <p className="statistics__paragraph">By Red Crow</p>
      </section>
      <hr className ="divide"/>
      <article className="about">
        <div className="about__paragraph-container">
          <p className="about__paragraph">
            On a gusty day in Southern Utah, a group of 25 daring mountain
            bikers blew the doors off what is possible on two wheels, unleashing
            some of the biggest moments the sport has ever seen. While mother
            nature only allowed for one full run before the conditions made it
            impossible to ride, that was all that was needed for event veteran
            Kyle Strait, who won the event for the second time -- eight years
            after his first Red Cow Rampage title
          </p>
        </div>
      </article>
      <section className="conversation">
      

        <form name="form" className="conversation__form">
          <div className="comment__section">

            <div className="conversation__comment-container">
             
              <div className="comment__avatar">
                
              </div>

              <div className="conversation__avatar"></div>
              <div className="conversation__label-comment">
                <label for="comment" className="conversation__label-heading">JOIN THE CONVERSATION</label>
              </div>
              <div className="comment__textarea">
              <textarea
              id="comment"
                className="text"
                name="text"
                placeholder="Add a new comment"
                required
              ></textarea>
              </div>
              
            </div>
`
            <div className="conversation__btn">
              <button className="comment__btn">COMMENT</button>
            </div>`
          
          </div>
          <hr className="divide" />
        </form>

     
      </section>

      <section className="comment">
        <div className="comment-container">
          <ul className="comment__list"></ul>
        </div>
      </section>
          <hr className="divide"/>
      <div className="newComment"></div>
      <section className="next">
      <div className="next__videos">
        <h3 className="next__videos-heading">NEXT VIDEOS</h3>
      </div>
      </section>



    </div>
    </div>
  );
}

export default App;
