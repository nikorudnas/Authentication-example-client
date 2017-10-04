// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import './css/Identify.scss';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

const Identify_Btn_Style = {
    borderRadius: '5px'
};

const Identify_Btn_Label_Style = {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#cccccc',
    textShadow: '1px 1px grey'
};

const Error_Style = {
    color: 'red',
    fontSize: 14
};

class Identify extends Component {
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
        let creds = {
            'username': this.refs.username.getValue()
        };
        this.props.resetPW(creds).then((success) => {
            if (success) {
                // Useless cuz componentDidUpdate?
                //alert('Request success!');
            }
        });
    }

    render() {
        const Spinner = this.props.auth.isFetching
            ? <CircularProgress size={60} thickness={7} />
            : null;
        return (
            <div className="wrapperDiv">
                <div className="PageContainer">
                    <div className="Identify-Container">
                        <form className="Identify-Form" onSubmit={this.handleResetPW}>
                            <TextField
                                floatingLabelText="Username or Email"
                                ref="username" />
                            <br />
                            <RaisedButton
                                style={{ marginTop: '20px' }}
                                buttonStyle={Identify_Btn_Style}
                                labelStyle={Identify_Btn_Label_Style}
                                label="Reset password"
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

export default connect(mapStateToProps, mapDispatchToProps)(Identify);