import React, { Component } from 'react';
class Test3 extends Component{
    
    render () {
        return (
          <div>
            <Computer/>
          </div>
        )
      }
}
class Computer extends Component {
    constructor(){
        super()
        this.state={status:"off"}
    }
    change(){
        
        const newstatus=this.state.status==="off"?"on":"off"
      
        this.setState({status:newstatus})

    }
    render () {
      return (
        <div>
          <button onClick={this.change.bind(this)}>开关</button>
          
          <Screen showContent={this.state.status === 'off' ? '显示器关了' : '显示器亮了'} />
        </div>
      )
    }
  }

//   function show(props){
//     if(!props.showContent){return <div className='screen'>无内容</div>}
//     else{return <div className='screen'>{props.showContent}</div>}
//   }
  class Screen extends Component {
    static defaultProps = {
        showContent: '无内容'
      }
    render () {
      
      return (      
        <div className='screen'>{this.props.showContent}</div>
      )
    }
  }
export default Test3;