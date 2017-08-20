import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUser } from "../actions/index";

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.addUser({ firstName: this.state.term });
        this.setState({ term: "" });
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" value={this.state.term} onChange={this.onInputChange}
                    placeholder="Insert user name..." />
                <button type="submit">Add</button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserForm);