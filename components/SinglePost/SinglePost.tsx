import styled from 'styled-components';
import { SinglePostWithComments } from '../../types/postsTypes';

const StyledTitle = styled.h2`
  font-size: 22px;
  text-align: center;
`;

const StyledImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  object-fit: cover;
`;

interface SinglePostProps {
  post: SinglePostWithComments;
}

const SinglePost = ({ post }: SinglePostProps) => {
  return (
    <article>
      <StyledTitle>{post.title}</StyledTitle>
      <StyledImage src="/nature.jpg" />
      <p>{post.body}</p>
    </article>
  );
};

export default SinglePost;
