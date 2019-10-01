import {call, put} from 'redux-saga/effects';

import TeamsActions from '../ducks/teams';
import api from '~/services/api';

export function* getTeams(){
    const response = yield call(api.get,'teams');

    yield put(TeamsActions.getTeamsSuccess(response.data));
}
