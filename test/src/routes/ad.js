import React from 'react';
import {Button,Icon} from 'antd';
class Ad extends React.Component{
    clickButton(){
        console.log(1);
        
    }
    render(){
        return( 
            <div className="">
            <div>
                    <Button ghost onClick={this.clickButton}><Icon type="close" /></Button>
                    <a href="http://www.baidu.com">
                    <img src="http://192.168.2.135:8091/bar3d-image.png" alt="广告"/>
                    </a>
            </div>
            </div>

            )
    }
}
export default Ad;