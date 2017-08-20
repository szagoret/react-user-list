import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchUsers } from '../actions';

import User from './user';

class UsersList extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {

        const usersList = this.props.users.map((user, index) => {
            return (
                <User key={index} firstName={user.firstName} />
            );
        });


        return (
            <ul>
                {usersList}
            </ul>
        );
    };
}
function mapStateToProps(state) {
    return { users: state.usersState };
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);