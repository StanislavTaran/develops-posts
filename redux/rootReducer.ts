import { combineReducers } from 'redux';
import postsReducer from './posts/postsReducers';
import { SinglePost } from '../types/postsTypes';

export interface State {
  posts: SinglePost[];
}

export default combineReducers({ posts: postsReducer });
