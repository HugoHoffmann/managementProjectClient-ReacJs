import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
    getTeamsRequest: null,
    getTeamsSuccess: ['data'],
});


export const TeamsTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
    data: [],

});

export const getSuccess = (state, {data}) => {
    return state.merge({ data })
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_TEAMS_SUCCESS]: getSuccess,
});