import { HashRouter as Router, Route, Link ,Redirect} from "react-router-dom";
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
          <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/Layout/layout-1">nav 1</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/Layout/layout-2">nav 2</Link></Menu.Item>
        <Menu.Item key="3"> <Link to="/Layout/layout-3">nav 3</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Route path='/Layout/layout-1' component={LayoutOne}/>
        <Redirect from="/Layout" to="/Layout/layout-1" />
        <Route  path='/Layout/layout-2' component={LayoutTwo}/>
        <Route  path='/Layout/layout-3' component={LayoutThree}/>
        </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
    
  </Router>
       
            

 


      )
  }
      
}

export default Layout1;