export default function Comments({ comments }) { 
  return (
    <div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment.text} <br />
            <small>{new Date(comment.date).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
