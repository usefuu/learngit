import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Text from './routes/tabs'
import popover from './routes/Popover'
import Grid1 from './routes/Grid1'
import Layout1 from './routes/Layout'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/tabs" exact component={Text} />
        <Route path="/popover" exact component={popover} />
        <Route path="/grid1" exact component={Grid1} />
        <Route path='/Layout' component={Layout1}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
