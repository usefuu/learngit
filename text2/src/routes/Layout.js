import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import LayoutOne from './layout-1.js'
import LayoutTwo from './layout-2.js'
import LayoutThree from './layout-3.js'

const { Header, Content, Footer } = Layout;

class Layout1 extends React.Component{
  render() {
      return (
        
        
    
     
   
        <Router>
    <div>
      <ul>
        <li>
          <Link to="/layout-1">nav 1</Link>
        </li>
        <li>
          <Link to="/layout-2">nav 2</Link>
        </li>
        <li>
         <Link to="/#/Layout/layout-3">nav 3</Link>
        </li>
        
      </ul>

      <hr />

     <Route exact path='/layout-1' component={LayoutOne}/>
        <Route  path='/layout-2' component={LayoutTwo}/>
        <Route  path='/layout-3' component={LayoutThree}/>
        1321
    </div>
  </Router>
       
            

 


      )
  }
      
}

export default Layout1;