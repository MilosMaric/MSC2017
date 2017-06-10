import { browserHistory } from 'react-router'
import AppState from '../State/AppState';
import LoginState from '../State/LoginState';
import ApiActions from './ApiActions';
import AppActions from './AppActions';
import { UIModes } from '../Constants/AppConstants'
import Cloner from '../Utils/Cloner'

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

  update: () => {
    let sClbck = (payload) => {
      AppState.mode = UIModes.VIEW;
      AppState.loggedUser = Cloner.clone(AppState.editUser);
    }

    ApiActions.put(ctrlUrl, AppState.editUser, AppActions.getSC(sClbck));
  },

  logout: () => {
    localStorage.removeItem("jwt");
    AppState.loggedUser = undefined;
  }
}

export default UserActions;
