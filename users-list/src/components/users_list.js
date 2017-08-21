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
                <User key={index} id={index} {...user} />
            );
        });


        return (
            <ul className="list-group m-2">
                {usersList}
            </ul>
        );
    };
}
function mapStateToProps(state) {
    return { users: state.usersState };
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);