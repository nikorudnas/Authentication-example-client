// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import logo from '../assets/medias/logo.svg';
import './css/Main.scss';
import NavBar from '../components/NavBar';
import RaisedButton from 'material-ui/RaisedButton';

class Main extends Component {
  componentDidMount() {
    // If a token is cached login as that user, else redirect to login page
    this.props.indetifyUser(localStorage.getItem('token')).then((success) => {
      if (!success) {
        this.props.history.push('/login');
      }
    });

    document.body.style.background = "#E2E2E2";
    document.body.style.background = "-webkit-linear-gradient(to left, #E2E2E2, #C9D6FF)";
    document.body.style.background = "linear-gradient(to left, #E2E2E2, #C9D6FF)";
  }

  ChangeLang = () => {
    alert("Hello");
  }

  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <div className="Main">
          <div className="Main-header">
            <img src={logo} className="Main-logo" alt="logo" />
            <h2>
              {"Welcome"}
            </h2>
          </div>
          <p className="Main-intro">
            {"Introduction text goes here"}
          </p>
          <RaisedButton label={"Click me"} primary={true} onTouchTap={() => this.ChangeLang()} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => (bindActionCreators(authActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Main);
