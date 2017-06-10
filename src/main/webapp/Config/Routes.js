import React from "react";
import { Redirect, IndexRoute, Router, Route, browserHistory } from 'react-router';
import AppContainer from "../Components/AppContainer";
import LoginPage from "../Components/LoginPage";
import TrainingsPage from "../Components/TrainingsPage";
import MyGroupPage from "../Components/MyGroupPage";
import ProfilePage from "../Components/ProfilePage";
import UsersPage from "../Components/UsersPage";
import UserActions from "./../Actions/UserActions";

const getLoggedUser = function() {
  if(localStorage.jwt) {
    UserActions.getLogged();
  }
};

const Routes = React.createClass({
 render: function() {
   return (
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} onEnter={getLoggedUser}>
        <IndexRoute component={TrainingsPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/myGroup" component={MyGroupPage} onEnter={getLoggedUser}/>
        <Route path="/profile" component={ProfilePage} onEnter={getLoggedUser}/>
        <Route path="/users" component={UsersPage} onEnter={getLoggedUser}/>
        <Redirect from="*" to="/"/>
      </Route>
    </Router>
  );
 }
});

export default Routes;
