// @flow
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './containers/Main';
import Login from './containers/Login';
import Register from './containers/Register';
import Identify from './containers/Identify';
import Resetpw from './containers/Resetpw';
import Logout from './containers/Logout';
import PageNotFound from './containers/PageNotFound';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route path='/login/identify' component={Identify} />
                <Route path='/login/resetpw/:token' component={Resetpw} />
                <Route exact path='/logout' component={Logout} />
                <Route path='*' component={PageNotFound} />
            </Switch>
        );
    }
}

export default Routes;
