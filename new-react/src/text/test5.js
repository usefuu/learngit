import React, { Component } from 'react';
const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]
class Test5 extends Component {
    render() {
        return ( 
            <div> <Lesson/></div>

        )
    }
}
class Lesson extends Component {
    /* TODO */
    render () {
        return (
          <div>
            {lessons.map((lessons, i) => <LessonsList key={i} index={i} lesson={lessons} />)}
          </div>
        )
      }
  }
  
  class LessonsList extends Component {
    /* TODO */
   
    render(){
        const {lesson} = this.props
        console.log(lesson)
        return(
            <div onClick={()=>{console.log(`${this.props.index} - ${lesson.title}`)}}>
            <h1>{lesson.title}</h1>
            <p>{lesson.description}</p>
            </div>
        )
    }
  }
export default Test5;