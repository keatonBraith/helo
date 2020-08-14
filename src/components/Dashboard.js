import React, { Component } from "react";
import Post from './Post';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      search: '',
      userposts: true
    }
  }
  render() {
    return (
      <div className="dashboard">
        <div className="search-bar" >
          <input></input>
          <div>
            <button>Search</button>
            <button>Reset</button>
          </div>
        </div>
        {this.state.posts.map((elem) => {
          return (
            <Post
            info={elem}
            key={elem.id}
            />
          )
        })}
      </div>
    );
  }
}

export default Dashboard;
