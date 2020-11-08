import styled from 'styled-components';
import { SingleComment } from '../../types/postsTypes';

const StyledCommentsList = styled.ul`
  margin: 0 0 0 20px;
  padding: 0;
  list-style: square;
`;

const StyledComment = styled.li`
  margin: 0 0 0 20px;
  padding: 0;
`;

const StyledCommentBody = styled.p`
  color: ${({ theme }) => theme.textColors.secondary};
`;

interface CommentsBlockProps {
  comments: SingleComment[];
}

const CommentsBlock = ({ comments }: CommentsBlockProps) => {
  const isComments = comments.length;

  return (
    <>
      {<h4>{isComments ? 'Comments :' : 'This post have no comments yet.'}</h4>}
      <StyledCommentsList>
        {comments.map(com => (
          <StyledComment>
            <StyledCommentBody>{com.body}</StyledCommentBody>
          </StyledComment>
        ))}
      </StyledCommentsList>
    </>
  );
};

export default CommentsBlock;
