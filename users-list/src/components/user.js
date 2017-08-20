import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeUser } from "../actions/index";

class User extends Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.props.removeUser(this.props.id);
    }

    render() {
        return (
            <li>
                {this.props.firstName}
                <button onClick={this.onButtonClick}>Remove</button>
            </li>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(User);