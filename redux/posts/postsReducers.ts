import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import * as postsActions from './postsActions';
import { SinglePost } from '../../types/postsTypes';

const posts = createReducer([], {
  [postsActions.fetchPostsSuccess.type]: (state, action: PayloadAction<SinglePost[]>) => action.payload,
  [postsActions.createPostSuccess.type]: (state, action: PayloadAction<SinglePost>) => [...state, action.payload],
});

export default posts;
