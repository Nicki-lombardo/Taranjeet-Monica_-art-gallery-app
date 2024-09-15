import { useState } from 'react';
import CommentForm from './CommentForm';
import styled from 'styled-components';

const CommentsContainer = styled.div`
  margin-top: 2rem;
`;

const CommentItem = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1rem;
`;

const CommentText = styled.p`
  margin: 0;
`;

const CommentDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default function Comments() {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (commentText) => {
    const newComment = {
      text: commentText,
      date: new Date().toLocaleString(), 
    };
    setComments([newComment, ...comments]); 
  };

  return (
    <>
      <CommentForm onSubmitComment={handleCommentSubmit} />
      <CommentsContainer>
        {comments.map((comment, index) => (
          <CommentItem key={index}>
            <CommentText>{comment.text}</CommentText>
            <CommentDate>{comment.date}</CommentDate>
          </CommentItem>
        ))}
      </CommentsContainer>
    </>
  );
}
