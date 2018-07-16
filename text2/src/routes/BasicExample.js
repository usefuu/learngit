
import React from "react";
import { HashRouter as Router, Route, Link,IndexRoute } from "react-router-dom";
import { HashRouter } from 'react-router-dom'
class BasicExample extends React.Component{
  
componentWillMount(){


  console.log(this.props.match.url);
//   this.props.match.url='#'+this.props.match.url
// }
}

  render(){
    const {match} = this.props;
    return(
           <Router>
    <div>
      <ul>
        <li>
          <Link to={`/BasicExample`}>Home</Link>
        </li>
        <li>
          <Link to={`/BasicExample/about`}>About</Link>
        </li>
        <li>
          <Link to={`/BasicExample/topics`}>Topics</Link>
        </li>
      </ul>

      <hr />
     
      <Route exact path={`/BasicExample`} component={Home} />
      {/* <IndexRoute component={Home}/> */}
      <Route path={`/BasicExample/about`} component={About} />
      <Route path={`/BasicExample/topics`} component={Topics} />
     
    </div>
  </Router>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;