import {call, put} from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';

import MembersActions from '../ducks/members';
import api from '~/services/api';

export function* getMembers(){
    const response = yield call(api.get,'members');

    yield put(MembersActions.getMembersSuccess(response.data));
}

// export function* createProject({ title }){
//     try {
//         const response = yield call(api.post, 'projects', {title});

//         yield put(ProjectsActions.createProjectSuccess(response.data));
//         yield put(ProjectsActions.closeProjectModal());
//     } catch (error) {
//         yield put(toastrActions.add({
//             type: 'error',
//             title: 'Erro na operação',
//             message: 'contate o suporte'
//         }) )
//     }

// }
