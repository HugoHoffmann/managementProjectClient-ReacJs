import {call, put} from 'redux-saga/effects';

import ProjectsActions from '../ducks/projects';
import api from '~/services/api';

export function* getProjects(){
    const response = yield call(api.get,'projects');

    yield put(ProjectsActions.getProjectsSuccess(response.data));
}

// export function* createTeam({ name }){
//     try {
//         const response = yield call(api.post, 'teams', {name});

//         yield put(TeamsActions.createTeamSuccess(response.data));
//         yield put(TeamsActions.closeTeamModal());
//     } catch (error) {
//         yield put(toastrActions.add({
//             type: 'error',
//             title: 'Erro na operação',
//             message: 'contate o suporte'
//         }) )
//     }

// }
