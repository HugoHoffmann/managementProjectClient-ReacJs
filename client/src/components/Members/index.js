import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import api from '~/services/api';

import MembersAction from '~/store/ducks/members';


import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';
import { MembersList } from './styles';

class Members extends Component{
    static propTypes = {
        closeMembersModal: PropTypes.func.isRequired,
        getMembersRequest: PropTypes.func.isRequired,
    }

    state = {
        roles: '',
    }

    async componentDidMount(){
        const { getMembersRequest } = this.props;

        getMembersRequest();

        const response = await api.get('roles');

        this.setState({ roles: response.data });
    }

    handleRolesChange = (id, roles) => {
        const { updateMemberRequest } = this.props;

        updateMemberRequest(id, roles);
    }

    render(){
        const { roles } = this.state;
        const { closeMembersModal, members } = this.props;
        return (
            <Modal size="big">
            <h1>Novo Membro</h1>
    
            <form>
                <MembersList>
                    { members.data.map(member => (
                        <li key={member.id}>
                            <strong>{member.user.name}</strong>
                            <Select 
                                isMulti
                                options={roles}
                                value={member.roles}
                                getOptionLabel={role => role.name}    
                                getOptionValue={role => role.id}    
                                onChange={value => this.handleRolesChange(member.id, value) }
                            />  
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
