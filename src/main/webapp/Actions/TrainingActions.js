import AppState from '../State/AppState';
import TrainingState from '../State/TrainingState';
import ApiActions from './ApiActions';
import AppActions from './AppActions';
import { UIModes } from '../Constants/AppConstants'
import Cloner from '../Utils/Cloner'

const ctrlUrl = 'api/training';

const UserActions = {
  getAll: () => {
    let sClbck = (payload) => {
      TrainingState.data = payload;
    }

    ApiActions.get(ctrlUrl, AppActions.getSC(sClbck));
  },

  toggleStatus: (item) => {
    let sClbck = (payload) => {
      item.isCanceled = !item.isCanceled;
    }

    ApiActions.put(ctrlUrl + '/' + item.id + '/toggleStatus', {}, AppActions.getSC(sClbck));
  }
}

export default UserActions;
