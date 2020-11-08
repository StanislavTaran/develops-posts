import { useEffect } from 'react';
import Link from 'next/link';
import MyLink from '../shared/MyLink';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SinglePost } from '../../types/postsTypes';
import routes from '../../constants/pageRoutes';
import * as postsActions from '../../redux/posts/postsActions';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
const StyledListItem = styled.li`
  margin: 5px 8px;
  padding: 6px;
  width: 300px;
  background-color: #fff;
  box-shadow: 10px 10px 5px -6px rgba(153, 150, 153, 1);
  display: flex;
  flex-flow: column;
  justify-content: start;
`;
const StyledTitle = styled.h3`
  color: #000;
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.textColors.secondary};
`;

const StyledImage = styled.img`
  display: block;
  object-fit: cover;
  max-width: 100%;
`;

type PostListPropsType = {
  posts: SinglePost[];
};

const PostsList = ({ posts }: PostListPropsType) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsActions.fetchPostsSuccess(posts));
  }, []);
  return (
    <StyledList>
      {posts.map((post: SinglePost) => (
        <Link href={routes.POSTS.createPostPath(post.id)} key={post.id}>
          <MyLink>
            <StyledListItem>
              <StyledTitle>{post.title}</StyledTitle>
              <StyledImage src="/nature.jpg" />
              <StyledParagraph>{post.body}</StyledParagraph>
            </StyledListItem>
          </MyLink>
        </Link>
      ))}
    </StyledList>
  );
};

export default PostsList;
