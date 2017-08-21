import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from "react-redux";
import { addUser } from "../actions/index";

class UserForm extends Component {
    constructor(props) {
        super(props);

        // this.state = { term: "" };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(values) {
        // event.preventDefault();

        this.props.addUser({ ...values });
        // this.setState({ term: "" });
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <Field
                    label="First name"
                    name="firstName"
                    component={this.renderField}
                    type="text"
                />
                <Field
                    label="Last name"
                    name="lastName"
                    component={this.renderField}
                    type="text"
                />
                <Field
                    label="Email"
                    name="email"
                    component={this.renderField}
                    type="email"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

const onSubmitSuccess = (result, dispatch) =>
    dispatch(reset('AddUserForm'));

export default reduxForm({
    form: "AddUserForm",
    onSubmitSuccess: onSubmitSuccess
})(connect(null, { addUser })(UserForm));
