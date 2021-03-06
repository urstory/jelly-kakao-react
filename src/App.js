import React, {Component} from 'react';
import './App.css';
import Header from "./header/Header";
import Friends from "./friends/Friends";
import Chats from "./chats/Chats";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login/Login";


class App extends Component {
  render() {
    return (

      <div className="wrapper">
        <Router>
          <Header/>
          <Route path="/" exact component={Login} />
          <Route path="/friends/" component={Friends} />
          <Route path="/chats/" component={Chats} />
        </Router>
      </div>
    );
  }
}

export default App;
