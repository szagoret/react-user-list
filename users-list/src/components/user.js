import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeUser } from "../actions/index";

class User extends Component {
    constructor(props) {
        super(props);
        this.removeUser = this.removeUser.bind(this);
    }

    render() {
        return (
            <li>
                {this.props.firstName}
                <button onClick={this.props.removeUser(this.props)}>Remove</button>
            </li>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(User);