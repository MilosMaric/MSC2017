import { browserHistory } from 'react-router'
import AppState from '../State/AppState';
import LoginState from '../State/LoginState';
import ApiActions from './ApiActions';
import AppActions from './AppActions';
import { UIModes } from '../Constants/AppConstants'
import Cloner from '../Utils/Cloner'

const ctrlUrl = 'api/group';

const UserActions = {
  update: () => {
    let sClbck = (payload) => {
      AppState.mode = UIModes.VIEW;
      AppState.loggedUser.group = Cloner.clone(AppState.editGroup);
    }

    ApiActions.put(ctrlUrl, AppState.editGroup, AppActions.getSC(sClbck));
  },
}

export default UserActions;
