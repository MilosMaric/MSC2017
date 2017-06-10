import actions from '../../Actions/UserActions';
import AppActions from '../../Actions/AppActions';
import ApiActions from '../../Actions/ApiActions';
import LoginState from '../../State/LoginState';
import UserState from '../../State/UserState';
import AppState from '../../State/AppState';

const mockedCallback = () => {};
jest.mock('../../Actions/AppActions', () => ({
  getSC: jest.fn(() => { return mockedCallback; })
}))

jest.mock('../../Actions/ApiActions', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn()
}))

describe('UserActions', () => {

  test('getLogged should call get method from ApiActions with \'api/user/getLoggedUser\' as first and returned method from AppActions.getSc method as second argument', () => {
    actions.getLogged();
    expect(ApiActions.get).toBeCalledWith('api/user/getLoggedUser', mockedCallback);
  })

  test('login should call post method from ApiActions with \'api/user/login\' as first, LoginState data as second and returned method from AppActions.getSc method as third argument', () => {
    let loginData = { email: 'exapmple@gmail.com', password: 'examplePassword' };
    LoginState.data = loginData;
    actions.login();
    expect(ApiActions.post).toBeCalledWith('api/user/login', loginData, mockedCallback);
  })

  test('update should call put method from ApiActions with \'api/user\' as first, AppState editUser as second and returned method from AppActions.getSc method as third argument', () => {
    let editData = { firstname: 'fname', email: 'name123@yahoo.com', lastname: 'lname'};
    AppState.editUser = editData;
    actions.update();
    expect(ApiActions.put).toBeCalledWith('api/user', editData, mockedCallback);
  })

  test('getLeaders should call get method from ApiActions with \'api/user/leaders\' as first and returned method from AppActions.getSc method as second argument', () => {
    actions.getLeaders();
    expect(ApiActions.get).toBeCalledWith('api/user/leaders', mockedCallback);
  })

  test('add should call post method from ApiActions with \'api/user\' as first, UserState newUser as second and returned method from AppActions.getSc method as third argument', () => {
    let userData = { firstname: 'fname', email: 'name123@yahoo.com', lastname: 'lname'};
    UserState.newUser = userData;
    actions.add();
    expect(ApiActions.post).toBeCalledWith('api/user', userData, mockedCallback);
  })
})
