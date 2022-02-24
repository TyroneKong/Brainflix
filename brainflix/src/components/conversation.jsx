
const Conversation=()=>{
    return (

<section className="conversation">
<form name="form" className="conversation__form">
  <div className="comment__section">
    <div className="conversation__comment-container">
      <div className="comment__avatar"></div>

      <div className="conversation__avatar"></div>
      <div className="conversation__label-comment">
        <label for="comment" className="conversation__label-heading">
          JOIN THE CONVERSATION
        </label>
      </div>
      <div className="comment__textarea">
        <textarea
          id="comment"
          className="text"
          name="text"
          placeholder="Add a new comment"
          required
        ></textarea>
      </div>
    </div>
    `
    <div className="conversation__btn">
      <button className="comment__btn">COMMENT</button>
    </div>
    `
  </div>
  <hr className="divide" />
</form>
</section>
    )
}

export default Conversation
