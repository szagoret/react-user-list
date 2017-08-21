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
            <li className="list-group-item list-group-item-action">
                <span>
                    {this.props.firstName}  {this.props.lastName}
                    <p className="font-italic mb-1">
                        {this.props.email}
                    </p>
                </span>
                <div className="ml-auto">
                    <button className="btn btn-sm btn-danger" onClick={this.onButtonClick}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                </div>
            </li>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(User);