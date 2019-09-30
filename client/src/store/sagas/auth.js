import {call, put} from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import {push} from 'connected-react-router';

import AuthTypes from '../ducks/auth';
import api from '~/services/api';

export function* signIn({ email, password }){
    try {
        const response = yield call(api.post,'sessions', {email, password} );
        localStorage.setItem('@Mana:token', response.data.token);

        yield put(AuthTypes.signInSuccess(response.data.token))
        yield push(put('/'));
    } catch (error) {
        console.log(error);
        yield put(toastrActions.add({
            type: 'error',
            title: 'Falha no Login',
            message: 'Verifique as credenciais de acesso'
        }))
    }
}
