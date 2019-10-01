import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import MembersAction from '~/store/ducks/members';


import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';
import { MembersList } from './styles';

class Members extends Component{
    static propTypes = {
        closeMembersModal: PropTypes.func.isRequired,
        getMembersRequest: PropTypes.func.isRequired,
    }

    componentDidMount(){
        const { getMembersRequest } = this.props;

        getMembersRequest();
    }

    render(){
        const { closeMembersModal, members } = this.props;
        return (
            <Modal size="big">
            <h1>Novo Membro</h1>
    
            <form>
                <MembersList>
                    { members.data.map(member => (
                        <li key={member.id}>
                            <strong>{member.user.name}</strong>
                        </li>
                    )) }
                </MembersList>
                <Button onClick={closeMembersModal} filled={false} color="gray">
                    Cancelar
                </Button>
            </form>
            </Modal>
        );
    }
}

Members.propTypes = {
    closeMembersModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  members: state.members
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MembersAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Members);
