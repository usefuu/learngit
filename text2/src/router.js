import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import Text from './routes/tabs'
import popover from './routes/Popover'
import Grid1 from './routes/Grid1'
import Layout1 from './routes/Layout'
import BasicExample from './routes/BasicExample'
import AuthExample from './routes/AuthExample'
function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route   path="/tabs"  component={Text} />
        <Route path="/popover"  component={popover} />
        <Route path="/grid1"  component={Grid1} />
        <Route path='/Layout' component={Layout1}/>
        <Route path='/BasicExample' component={BasicExample}/>
        <Route path='/AuthExample' component={AuthExample}/>
        
      </Switch>
    </Router>
  );
}

export default RouterConfig;
