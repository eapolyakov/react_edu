import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import Settings from "./components/Settings";

const Message = () => {
  return (<h1>Сообщения</h1>)
}

const Menu = () => {
  return <div className="nav flex-column nav-pills" aria-orientation="vertical">
    <NavLink className="nav-link" to="/profile">Профиль</NavLink>
    <NavLink className="nav-link" to="/message">Сообщения</NavLink>
    <NavLink className="nav-link" to="/settings">Настройки</NavLink>
    <NavLink className="nav-link" to="/friends">Мои друзья</NavLink>
  </div>
}

function App(props) {
  return (<div className="container-fluid">
    <BrowserRouter>
      <div className="row">
        <div className="col-sm-3">
          <Menu/>
        </div>
        <div className="col-sm-p">
          <Route path="/profile" render={() => <Profile function={props.functions.getUser}/>}/>
          <Route path="/message" component={Message}/>
          <Route path="/settings" render={() => <Settings function={props.functions.getUser}/>}/>
          <Route path="/friends" render={() => <Friends function={props.functions.getUsers}/>}/>
        </div>
      </div>
    </BrowserRouter>
  </div>);
}

export default App;
