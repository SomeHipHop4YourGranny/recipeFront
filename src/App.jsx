import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import Pages from './pages';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={['/', '/recipe']} component={Pages.Main} />
        <Route
          exact
          path={['/recipe/:id', '/recipe/add', '/recipe/:id/modify']}
          component={Pages.RecipePage}
        />
        <Route
          exact
          path={['/login', '/signin', '/register', '/signup']}
          component={Pages.Auth}
        />
      </Switch>
    </div>
  );
}

export default App;
