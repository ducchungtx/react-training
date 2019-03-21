//Saga effects
import { all, fork } from 'redux-saga/effects';
import { watchFetchGithub } from './gitHubSaga';

const rootSaga = function* rootSaga() {
    yield all([
        fork(watchFetchGithub)
    ]);
};

export default rootSaga;