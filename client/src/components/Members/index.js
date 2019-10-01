import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import MembersAction from '~/store/ducks/members';


import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';
import { MembersList } from './styles';

const Members = ({ closeMembersModal}) => (
    <Modal size="big">
        <h1>Novo Membro</h1>

        <form>
            <MembersList>
                <li>
                    <strong>Teste</strong>
                </li>
            </MembersList>
            <Button onClick={closeMembersModal} filled={false} color="gray">
                Cancelar
            </Button>
        </form>
    </Modal>
)

Members.propTypes = {
    closeMembersModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(MembersAction, dispatch);

export default connect(null, mapDispatchToProps)(Members);
