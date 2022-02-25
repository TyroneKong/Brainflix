const Comments = ({ name, date, comment }) => {
  return (
    <section className="comment">
      <div className="comment-container">
        <p className="comment__date">{date}</p>
        <div className="comment__avatar"></div>

        <ul className="comment__item">
          <li className="comment__name">
            <span>{name}</span>
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
