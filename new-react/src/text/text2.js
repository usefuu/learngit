import React, { Component } from 'react';
class Test2 extends Component{
    onclick1(){
        console.log('sdaf')
    }
    render () {
        return (
          <div>
            <button onClick={this.onclick1} >123</button>
          </div>
        )
      }
}
export default Test2;