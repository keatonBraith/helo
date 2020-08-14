import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import routes from "./routes";
import {withRouter} from 'react-router';

class App extends React.Component {
  render() {
    console.log(this.props.location.pathname)
    return (
      <div className="App">
        {this.props.location.pathname === "/" ?
        <div className='auth-container' >
          {routes}
        </div>
        :
        <div>
          <Nav/>
        {routes}
        </div>
      }
      </div>
    );
  }
}

export default withRouter(App);
