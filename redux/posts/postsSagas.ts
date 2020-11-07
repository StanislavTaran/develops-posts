import { call, put, takeEvery } from 'redux-saga/effects';
import * as postsActions from './postsActions';
import * as postsAPI from '../../api/postsApi'

export function* fetchPosts() {
  yield put(postsActions.fetchPostsRequest());
  try {
   const res = yield call(postsAPI.fetchAllPosts)
    yield put(postsActions.fetchPostsSuccess(res.data))
  } catch (e) {
    yield put(postsActions.fetchPostsError('Error - fetchPosts'));
  }
}


export function* postsSagaWatcher (){
  yield takeEvery(postsActions.fetchPostsRequest, fetchPosts)
}