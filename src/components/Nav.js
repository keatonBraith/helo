import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser, logoutUser} from '../ducks/reducer';
import axios from 'axios';

class Nav extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount(){
    this.props.getUser();
  }

  logout = () => {
    axios.delete('/auth/logout').then(res => {
      this.props.logoutUser();
      this.props.history.push('/');
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <nav className="navbar" >
          <div className='pic-container' >
          <img alt="profile-pic" className="profile-pic" src={this.props.user.profilePic} />
          </div>
          <ul className='nav-buttons' >
            <li><Link to='/dashboard'>Home</Link></li>
            <li className="new-post" ><Link to='/new' >New Post</Link></li>
            <li onClick={this.logout} ><Link to='/' >Logout</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser, getUser})(Nav);
