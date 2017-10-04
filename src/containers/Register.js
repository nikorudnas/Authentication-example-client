// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import './css/Register.scss';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

const Register_Btn_Style = {
    borderRadius: '5px'
};

const Register_Btn_Label_Style = {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#cccccc',
    textShadow: '1px 1px grey'
};

const Error_Style = {
    color: 'red',
    fontSize: 14
};

class Register extends Component {
    componentDidMount() {
        this.props.indetifyUser(localStorage.getItem('token')).then((success) => {
            if (success) {
                this.props.history.push('/');
            }
        });
        document.body.style.background = "#808080";
        document.body.style.background = "-webkit-linear-gradient(to left, #3fada8, #808080)";
        document.body.style.background = "linear-gradient(to left, #3fada8, #808080)";
    }

    handleRegister = (e) => {
        e.preventDefault();
        let password = this.refs.password.getValue();
        let password2 = this.refs.password2.getValue();
        if (password === password2 && password.length > 5) {
            let creds = {
                'username': this.refs.username.getValue(),
                'email': this.refs.email.getValue(),
                'password': password
            };
            this.props.registerUser(creds).then((success) => {
                if (success) {
                    // Useless cuz componentDidUpdate?
                    this.props.history.push('/');
                }
            });
        } else {
            this.props.registerError({ 'message': 'Passwords does not match or is too short.' })
        }
    }

    render() {
        const Spinner = this.props.auth.isFetching
            ? <CircularProgress size={60} thickness={7} />
            : null;
        return (
            <div className="wrapperDiv">
                <div className="PageContainer">
                    <div className="Register-Container">
                        <form className="Register-Form" onSubmit={this.handleRegister}>
                            <TextField
                                floatingLabelText="Select Username"
                                ref="username" />
                            <TextField
                                floatingLabelText="Email"
                                type="email"
                                ref="email" />
                            <TextField
                                floatingLabelText="Password"
                                type="password"
                                ref="password" />
                            <TextField
                                floatingLabelText="Repeat Password"
                                type="password"
                                ref="password2" />
                            <br />
                            <RaisedButton
                                style={{ marginTop: '20px' }}
                                buttonStyle={Register_Btn_Style}
                                labelStyle={Register_Btn_Label_Style}
                                label="Register"
                                disabled={this.props.auth.isFetching}
                                type="submit" />
                            <br />
                            <br /> {Spinner}
                            <br />
                            <span style={Error_Style}>{this.props.auth.message}</span>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => (bindActionCreators(authActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Register);