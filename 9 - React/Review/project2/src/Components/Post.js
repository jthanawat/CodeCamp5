import React from 'react';
import './Post.css'

// const Post = (props) => {
//   return (
//     // use props to customize each id
//     <div>
//       <h4> Post ID: {props.id} </h4>
//       <p> {props.message} </p>
//     </div>
//   )
// }

class Post extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className = "Post">
        <h4>Post ID: {this.props.div} </h4>
        <p> {this.props.message} </p>
      </div>
    )
  }
}

export default Post;