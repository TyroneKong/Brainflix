const Video = (props) => {
  return (
    <section className="next">
      <div
        className="next__videos"
        onClick={(event) => {
          props.func(props.id);
        }}
      >
        <ul>
          <li>{props.title}</li>
          <li>{props.channel}</li>
          <li>
            <img src={props.image}></img>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Video;
