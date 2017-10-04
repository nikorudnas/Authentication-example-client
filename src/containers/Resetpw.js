// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import './css/Resetpw.scss';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

const Resetpw_Btn_Style = {
    borderRadius: '5px'
};

const Resetpw_Btn_Label_Style = {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#cccccc',
    textShadow: '1px 1px grey'
};

const Error_Style = {
    color: 'red',
    fontSize: 14
};

class Resetpw extends Component {
    componentDidMount() {
        this.props.indetifyUser(localStorage.getItem('token')).then((success) => {
            if (success) {
                this.props.history.push('/');
            }
        });
        document.body.style.background = "#F3904F";
        document.body.style.background = "-webkit-linear-gradient(to left, #3B4371, #F3904F)";
        document.body.style.background = "linear-gradient(to left, #3B4371, #F3904F)";
    }

    handleResetPW = (e) => {
        e.preventDefault();
        let password = this.refs.password.getValue();
        let password2 = this.refs.password2.getValue();
        if (password === password2 && password.length > 5) {
            let creds = {
                'password': this.refs.password.getValue(),
                'token': this.props.location.search.split('=')[1]
            };
            this.props.applyNewPW(creds).then((success) => {
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
                    <div className="Resetpw-Container">
                        <form className="Resetpw-Form" onSubmit={this.handleResetPW}>
                            <TextField
                                floatingLabelText="New password"
                                ref="password" />
                            <br />
                            <TextField
                                floatingLabelText="Password again"
                                ref="password2" />
                            <br />
                            <RaisedButton
                                style={{ marginTop: '20px' }}
                                buttonStyle={Resetpw_Btn_Style}
                                labelStyle={Resetpw_Btn_Label_Style}
                                label="Accept"
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

export default connect(mapStateToProps, mapDispatchToProps)(Resetpw);