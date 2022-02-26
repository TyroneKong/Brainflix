import Comments from "./comments";
import { v4 as uuidv4 } from "uuid";
const CommentList = (props) => {
  return props.commentArray.map((comment) => {
    return (
      <Comments
        key={uuidv4()}
        name={comment.Name}
        date={comment.Date}
        comment={comment.Comment}
      />
    );
  });
};

export default CommentList;
