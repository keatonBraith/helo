import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: "",
      content: "",
      author: "",
      authorPicture: "",
    };
  }
  render() {
    return (
      <div className="post-body">
        <div className="title"><Link to='/post/:postid'>{this.props.info.title}</Link></div>
        <div className="post-by">by {this.props.info.username}</div>
        <div className='profile-pic-container' >
        <img
          className="profile-pic-post"
          src={this.props.info.profile_pic}
          alt="img"
        />
        </div>
      </div>
    );
  }
}

export default Posts;
