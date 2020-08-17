import React, { Component } from "react";
import Axios from "axios";

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

  componentDidMount(){
      Axios.get('/api/post/:id')
      .then(res => {
          this.setState({
              title: res.data.title,
              img: res.data.img,
              content: res.data.content,
              author: res.data.username,
              authorPicture: res.data.profilePic
          })
          console.log(res.data)
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="post" >
        <div>
            content
        </div>
      </div>
    );
  }
}

export default Posts;
