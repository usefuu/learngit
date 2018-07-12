import React from 'react';
import { Popover, Button } from 'antd';
import tabs from './tabs'
const content = (
  <div>
   <tabs/>124
  </div>
);

class popover extends React.Component
{
     render(){
        return( 
            <div>
                 <Popover content={content} title="Title">
                    <Button type="primary">Hover me</Button>
                </Popover>
                </div>
             )
    }
}
export default popover;
