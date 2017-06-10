import { browserHistory } from 'react-router'
import AppState from '../State/AppState';
import LoginState from '../State/LoginState';
import ApiActions from './ApiActions';
import AppActions from './AppActions';

const ctrlUrl = 'api/user';

const UserActions = {
  getLogged: () => {
    let sClbck = (payload) => {
      AppState.loggedUser = payload;
    }
    ApiActions.get(ctrlUrl + "/getLoggedUser", AppActions.getSC(sClbck));
  },

  login: () => {
    let sClbck = (payload) => {
      localStorage.jwt = payload;
      browserHistory.push("/profile");
    }
    ApiActions.post(ctrlUrl + "/login", LoginState.data, AppActions.getSC(sClbck));
  },

  logout: () => {
    localStorage.removeItem("jwt");
    AppState.loggedUser = undefined;
  }
}

export default UserActions;
