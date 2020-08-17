import React, { Component } from "react";
import Posts from './Posts';
import axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      search: '',
      userposts: true
    }
  }

  componentDidMount(){
    axios.get('/api/posts')
    .then(res => {
      this.setState({ posts: res.data })
    })
    .catch(err => console.log(err));
  };

  handleChange(filter){
    this.setState({ posts: filter })
  };

  render() {
    return (
      <div className="dashboard">
        <div className="search-bar" >
          <input className="search" ></input>
          <div>
            <button>Search</button>
            <button>Reset</button>
            <sub>My Posts</sub>
            <input type="checkbox"></input>
          </div>
        </div>
        <div className='posts' >
        {this.state.posts.map((elem) => {
          return (
            <Posts
            info={elem}
            key={elem.id}
            />
          )
        })}
        </div>
      </div>
    );
  }
}

export default Dashboard;
