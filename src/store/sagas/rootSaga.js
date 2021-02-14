// vendor modules
import { fork, all } from 'redux-saga/effects';

// import data from './data';

const sagas = [
  // data,
];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
