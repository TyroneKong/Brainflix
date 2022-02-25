import commentIcon from "../assets/Icons/add_comment.svg"



const Conversation=({countComments})=>{
    return (

<section className="conversation">
<form name="form" className="conversation__form">
  <div className="comment__section">
    <div className="conversation__comment-container">
    
      <div className="conversation__avatar"></div>
      <p className="conversation__commentCount">{countComments} Comments</p>
      <div className="conversation__label-comment">
         
        <label htmlFor="comment" className="conversation__label-heading">
          JOIN THE CONVERSATION
        </label>
      </div>
      
        <textarea
          id="comment"
          className="conversation__text"
          name="text"
          placeholder="Add a new comment"
          required
        ></textarea>
      
    </div>
    `
    <div className="conversation__btn">
        <img className="comment__icon" src={commentIcon}></img>
      <button className="comment__btn">COMMENT</button>
    </div>
    `
  </div>

</form>
<hr className="divide" />
</section>
    )
}

export default Conversation
