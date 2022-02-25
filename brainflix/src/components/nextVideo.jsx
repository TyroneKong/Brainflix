const Video = ({func, title, channel, image, id}) => {
  return (
    <section className="next">
      <div
        className="next__videos"
        onClick={(event) => {
          func(id);
        }}
      >
        <ul>
          <li className="next__title"><span>{title}</span></li>
          <li className="next__channel">{channel}</li>
          <li>
            <img className="next__image" src={image}></img>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Video;
