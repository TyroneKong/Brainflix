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
          <li>{title}</li>
          <li>{channel}</li>
          <li>
            <img className="next__image" src={image}></img>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Video;
