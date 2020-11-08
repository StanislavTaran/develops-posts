import { all } from 'redux-saga/effects';
import { postsSagaWatcher } from './posts/postsSagas';

export default function* rootSaga() {
  yield all([postsSagaWatcher()]);
}
