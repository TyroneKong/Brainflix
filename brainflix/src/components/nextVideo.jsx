import "./nextVideo.scss"


const Video = ({func, title, channel, image, id}) => {
  return (
    <section className="next">
      
      <div
        className="next__videos"
        onClick={(event) => {
          func(id);
        }}
      >

        
        <div className="next__card">
        <img className="next__image" src={image}></img>
        <ul>
        
          <li className="next__title"><span>{title}</span></li>
          <li className="next__channel">{channel}</li>
          
        </ul>
        </div>
      
      </div>
    </section>
  );
};

export default Video;
