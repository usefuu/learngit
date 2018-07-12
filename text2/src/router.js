import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Text from './routes/tabs'
import popover from './routes/Popover'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/tabs" exact component={Text} />
        <Route path="/popover" exact component={popover} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
