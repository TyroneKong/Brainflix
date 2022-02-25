const Comments = ({ name, date, comment }) => {
  return (
    <section className="comment">
      <div className="comment-container">
       
        <div className="comment__avatar">
          
        </div>

        <ul className="comment__item">
          <li className="comment__name">
            <p><span>{name}</span></p>
            <p className="comment__date">{date}</p>
          </li>
          <li className="conversation__comment">
            {comment}
          </li>
        </ul>
        <hr className="divider"></hr>
      </div>
      <div></div>
    </section>
  );
};

export default Comments;
