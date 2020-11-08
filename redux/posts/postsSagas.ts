import { call, put, takeEvery } from 'redux-saga/effects';
import * as postsActions from './postsActions';
import * as postsAPI from '../../api/postsApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { SinglePostWithoutId } from '../../types/postsTypes';

export function* fetchPosts() {
  try {
    const res = yield call(postsAPI.fetchAllPosts);
    yield put(postsActions.fetchPostsSuccess(res.data));
  } catch (e) {
    yield put(postsActions.fetchPostsError('Error - fetchPosts'));
  }
}

export function* createPost({ payload }: PayloadAction<SinglePostWithoutId>) {
  try {
    const res = yield call(postsAPI.createPost, payload);
    yield put(postsActions.createPostSuccess(res.data));
  } catch (e) {
    yield put(postsActions.createPostError('Error - createPost'));
  }
}

export function* postsSagaWatcher() {
  yield takeEvery(postsActions.fetchPostsRequest, fetchPosts);
  yield takeEvery(postsActions.createPostRequest, createPost);
}
