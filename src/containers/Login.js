// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import './css/Login.scss';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

const Login_Btn_Style = {
    borderRadius: '5px'
};

const Login_Btn_Label_Style = {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#cccccc',
    textShadow: '1px 1px grey'
};

const Error_Style = {
    color: 'red',
    fontSize: 14
};

class Login extends Component {
    componentDidMount() {
        this.props.indetifyUser(localStorage.getItem('token')).then((success) => {
            if (success) {
                this.props.history.push('/');
            }
        });
        document.body.style.background = "#243B55";
        document.body.style.background = "-webkit-linear-gradient(to left, #243B55, #141E30)";
        document.body.style.background = "linear-gradient(to left, #243B55, #141E30)";
    }

    handleLogin = (e) => {
        e.preventDefault();
        let creds = {
            'username': this.refs.username.getValue(),
            'password': this.refs.password.getValue()
        };
        this.props.loginUser(creds).then((success) => {
            if (success) {
                this.props.history.push('/');
            }
        });;
    }

    render() {
        const Spinner = this.props.auth.isFetching
            ? <CircularProgress size={60} thickness={7} />
            : null;
        return (
            <div className="wrapperDiv">
                <div className="PageContainer">
                    <div className="Login-Container">
                        <form className="Login-Form" onSubmit={this.handleLogin}>
                            <TextField
                                floatingLabelText="Username or Email"
                                ref="username" />
                            <br />
                            <TextField
                                floatingLabelText="Password"
                                type="password"
                                ref="password" />
                            <br />
                            <RaisedButton
                                style={{ marginTop: '20px' }}
                                buttonStyle={Login_Btn_Style}
                                labelStyle={Login_Btn_Label_Style}
                                label="Login"
                                disabled={this.props.auth.isFetching}
                                type="submit" />
                            <br />
                            <br />
                            <br />
                            <a href="/register">Create profile</a>
                            <br />
                            <br />
                            <a href="/login/identify">Forgot password?</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);