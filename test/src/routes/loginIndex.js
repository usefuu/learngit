import React from 'react';
import { Tabs } from 'antd';
import './loginIndex.css'
import WrappedNormalLoginForm from './login'
import WrappedNormalLoginForm2 from './login2.js'
import Ad from './ad'
const TabPane = Tabs.TabPane;

function callback() {
  
}
class login extends React.Component{

    render(){
        return( 
            <div className='l'>
            <div className='lo'>
                <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="日志系统" key="1"><WrappedNormalLoginForm /></TabPane>
                <TabPane tab="云平台" key="2" ><WrappedNormalLoginForm2 /></TabPane>
                </Tabs>
                <Ad/>
                </div>
                </div>
             )
    }
}
export default login;