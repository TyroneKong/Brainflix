import brainflixLogo from "../assets/Logo/BrainFlix-logo.svg";
import uploadSVG from "../assets/Icons/upload.svg"
import searchIcon from "../assets/Icons/search.svg"


const Header=(props)=>{

    return (
    <header className="header">
        <div className="header__logo">
          <img className="header__logo-image" src={brainflixLogo} alt="brainflix logo"></img>
        </div>
        
        <div className="search">
          <input className="search__input" placeholder= "Search"></input>
          <div className="search__avatar">
          
          </div>
        </div>
     
        <div className="upload">
          <button className="upload__button">UPLOAD</button>
        </div>
        <div className="upload__tablet-avatar">

        </div>
      </header>
    )
}





export default Header