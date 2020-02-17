import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Auth, Header } from '../../components';

import './auth.scss';

function AuthContainer() {
  return (
    <div className="authWrapper">
      <Header />
      <Switch>
        <Route exact path={['/login', '/signin']} component={Auth.Login} />
        <Route
          exact
          path={['/register', '/signup']}
          component={Auth.Register}
        />
      </Switch>
    </div>
  );
}

export default AuthContainer;
