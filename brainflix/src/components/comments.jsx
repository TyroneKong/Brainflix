const Comments = (props) => {
  return (
    <section className="comment">
        
      <div className="comment-container">
      <div className="comment__avatar"></div>

        <ul className="comment__item">
        
          <li className="comment__date">{props.date}</li>
          <li className="comment__name">
            <span>{props.name}</span>
          </li>
          <li className="conversation__comment">
            <span></span>
            {props.comment}
          </li>
        </ul>
        <hr></hr>
      </div>
      <div ></div>
    </section>
  );
};

export default Comments;
