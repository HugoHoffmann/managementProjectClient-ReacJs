import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
    openMembersModal: null,
    closeMembersModal: null,
});


export const MembersTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
    data: [],
    membersModalOpen: false,
});

export const openModal = state => state.merge({ membersModalOpen: true });
export const closeModal = state => state.merge({ membersModalOpen: false });

export const createSuccess = (state, { project }) => {
    return state.merge({ data: [...state.data, project] });
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CLOSE_MEMBERS_MODAL]: closeModal,
    [Types.OPEN_MEMBERS_MODAL]: openModal,
});