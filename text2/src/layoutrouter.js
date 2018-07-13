import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LayoutOne from './routes/layout-1'
import LayoutTwo from './routes/layout-2'
import LayoutThree from './routes/layout-3'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/layout-1' component={LayoutOne}/>
        <Route path='/layout-2' component={LayoutTwo}/>
        <Route path='/layout-3' component={LayoutThree}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
