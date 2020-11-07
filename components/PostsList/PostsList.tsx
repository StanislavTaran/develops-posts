import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components';
import { SinglePost } from '../../types/postsTypes';
import * as postsActions from '../../redux/posts/postsActions'

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
  justify-content: space-around;
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
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(postsActions.fetchPostsSuccess(posts))
  },[])
  return (
    <StyledList>
      {posts.map((post: SinglePost) => (
        <StyledListItem key={post.id}>
          <h3>{post.title}</h3>
          <StyledImage src='/nature.jpg' />
          <p>{post.body}</p>

        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default PostsList;
