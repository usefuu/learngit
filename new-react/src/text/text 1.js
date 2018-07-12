import React, { Component } from 'react';
class Test1 extends Component{
    render () {
        return (
          <div>
            <LikeButton likedText='已赞' unlikedText='赞' />
          </div>
        )
      }
}
class LikeButton extends Component {
    constructor () {
      super()
      this.state = { isLiked: false }
    }
  
    handleClickOnLikeButton () {
      this.setState({
        isLiked: !this.state.isLiked
      })
    }
  
    render () {
      const likedText =  '取消'
      console.log(likedText)
      const unlikedText = '点赞'
      console.log(unlikedText)
      return (
        <button onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.isLiked ? likedText : unlikedText} 👍
        </button>
      )
    }
  }
  export default Test1;