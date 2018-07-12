import React, { Component } from 'react';
import './App.css';
import CommentApp from './CommentApp/CommentApp'
import Test1 from'./text/text 1.js'
import Test2 from './text/text2.js'
import Test3 from './text/text3';
import Test4 from './text/text4';
import Test5 from './text/test5';
class App extends Component {
 
  render() {
   
    return (
      <div><Test1/>123
      <div><Test2/></div>
      <div><Test3/></div>
      {/* <Test4/> */}
      <Test5/>
      <CommentApp />
      </div>
      
    );
  }
}