const Comments = (props) => {
  return (
    <section className="comment">
         <div className="conversation__avatar"></div>
      <div className="comment-container">
     
        <ul className="comment__list">
        
          <li>{props.date}</li>
          <li>
            <span>{props.name}</span>
          </li>
          <li>
            <span></span>
            {props.comment}
          </li>
        </ul>
        <hr></hr>
      </div>
      <div className="newComment"></div>
    </section>
  );
};

export default Comments;
