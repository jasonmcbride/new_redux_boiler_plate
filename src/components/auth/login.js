import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { loginUser } from '../../actions';

const form = reduxForm({
    form: 'login'
});

class Login extends Component {
    handleFormSubmit(formProps) {
        this.props.loginUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return ( <
                div >
                <
                span > < strong > Error! < /strong> {this.props.errorMessage} <
                /div>
            );
        }
    }
}