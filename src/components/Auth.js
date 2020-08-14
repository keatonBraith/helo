import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      profilePic: "",
      newUser: false,
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  login = () => {
    const { username, password } = this.state;
    Axios.post("/auth/login", { username, password })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Incorrect Login Information");
      });
  };

  register = () => {
    const { username, password, profilePic } = this.state;
    Axios.post("/auth/register", { username, password, profilePic })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Already a User");
      });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggle = () => {
    this.setState({ newUser: !this.state.newUser });
  };

  render() {
    const { username, password, profilePic } = this.state;
    return (
      <div>
        <div className="auth-main">
          <img
            src="../helo.png"
            alt="img"
          />
          <h1>Helo</h1>
          {!this.state.newUser ? (
            <div className="login-inputs">
              <input
                name="username"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => this.changeHandler(e)}
              ></input>
              <input
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => this.changeHandler(e)}
              ></input>
              <div>
                <button onClick={this.login}>Login</button>
                <button onClick={this.toggle}>Register</button>
              </div>
            </div>
          ) : (
            <div>
              <input
                name="username"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => this.changeHandler(e)}
              ></input>
              <input
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => this.changeHandler(e)}
              ></input>
              <input
                name="profilePic"
                type="text"
                value={profilePic}
                placeholder="Profile Pic URL"
                onChange={(e) => this.changeHandler(e)}
              ></input>
              <div>
                <button onClick={this.register}>Register</button>
                <button onClick={this.toggle}>Already A User</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Auth);
