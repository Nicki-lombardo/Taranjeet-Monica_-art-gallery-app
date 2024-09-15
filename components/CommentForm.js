import styled from 'styled-components';
import { useState } from 'react';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function CommentForm({ onSubmitComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmitComment(comment);
      setComment(''); 
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        type="text" 
        placeholder="Leave a comment" 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
      />
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
}
