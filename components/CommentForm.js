export default function CommentForm({ onSubmitComment }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const commentText = event.target.elements.comment.value; 
    onSubmitComment(commentText);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="comment"
        type="text"
        placeholder="Write a comment HERE"
      />
      <button type="submit">Send</button>
    </form>
  );
}
