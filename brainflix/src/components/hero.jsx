import viewIcon from "../assets/Icons/views.svg"
import likes from "../assets/Icons/likes.svg"






const Hero=(props)=>{
return (
    <>
    <section className="hero">
    <div className="hero__container">
    <video poster={props.current.image}  className="hero__video" width="750" height="500" controls>
        <source src={props.current.video}></source>
    </video>
    </div>
    <div className="hero__title-container">
      <h2 className="hero__title-heading">BMX Rampage: 2021 Highlights</h2>
    </div>
    </section>
    <hr className="divide"></hr>
    <section className="statistics">
    <p className="statistics__paragraph">By Red Crow</p>
    <p className="statistic__date"></p>
    <div className="statistics__icons">
    <img src={viewIcon} className="statistics__views"></img>
    <img src={likes}    className="statistics__likes"></img>
        
    </div>
  
    </section>
    </>
    
)

   
}

export default Hero

