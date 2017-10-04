// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import './css/Logout.scss';

class Logout extends Component {

    componentDidMount() {
        if (localStorage.getItem('token')) {
            /* After 1.5s redirect back to root path */
            this.props.logoutUser();
            const timer = setInterval(() => {
                this.props.history.push('/login');
                clearTimeout(timer);
            }, 2500);
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div className="Logout">
                <label>You are now being logged out...</label>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => (bindActionCreators(authActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
