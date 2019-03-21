import {
    FETCH_GITHUB_USER,
    FETCH_GITHUB_USER_SUCCESS,
    FETCH_GITHUB_USER_FAIL
} from '../actions/actionTypes';

//Saga effects
import { put, takeLatest } from 'redux-saga/effects';

const fetchGihubUser = function* getWeatherFromApi(userName) {
    const json = yield fetch(`https://api.github.com/users/${userName}/repos`)
        .then(response => response.json(), );    
    return json;
};

// Weather
const fetchGithub = function* fetchGithub(value) {
    try {
        const receivedData = yield fetchGihubUser(value.userName);
        yield put({ type: FETCH_GITHUB_USER_SUCCESS, receivedData: receivedData });
    } catch (error) {
        yield put({ type: FETCH_GITHUB_USER_FAIL, error });
    }
};

export const watchFetchGithub = function* watchFetchGithub() {
    yield takeLatest(FETCH_GITHUB_USER, fetchGithub);
};