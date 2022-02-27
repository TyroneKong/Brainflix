import Comments from "./comments";
import { v4 as uuidv4 } from "uuid";
const CommentList = ({ commentArray }) => {
  return commentArray.map((comment) => {
    const date = new Date(comment.timestamp).toLocaleDateString();
    return (
      <Comments
        key={uuidv4()}
        name={comment.name}
        date={date}
        comment={comment.comment}
      />
    );
  });
};

export default CommentList;
