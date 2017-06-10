import actions from '../../Actions/GroupActions';
import AppActions from '../../Actions/AppActions';
import ApiActions from '../../Actions/ApiActions';
import AppState from '../../State/AppState';

const mockedCallback = () => {};
jest.mock('../../Actions/AppActions', () => ({
  getSC: jest.fn(() => { return mockedCallback; })
}))

jest.mock('../../Actions/ApiActions', () => ({
  put: jest.fn()
}))

describe('UserActions', () => {

  test('update should call put method from ApiActions with \'api/group\' as first, AppState editGroup as second and returned method from AppActions.getSc method as third argument', () => {
    let editData = { description: 'description', name: 'name' };
    AppState.editGroup = editData;
    actions.update();
    expect(ApiActions.put).toBeCalledWith('api/group', editData, mockedCallback);
  })
})
