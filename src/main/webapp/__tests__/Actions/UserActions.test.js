import actions from '../../Actions/UserActions';
import AppActions from '../../Actions/AppActions';
import ApiActions from '../../Actions/ApiActions';
import LoginState from '../../State/LoginState';

const mockedCallback = () => {};
jest.mock('../../Actions/AppActions', () => ({
  getSC: jest.fn(() => { return mockedCallback; })
}))

jest.mock('../../Actions/ApiActions', () => ({
  get: jest.fn(),
  post: jest.fn()
}))

describe('UserActions', () => {

  test('getLogged should call get method from ApiActions with \'api/user/getLoggedUser\' as first and returned method from AppActions.getSc method as second argument', () => {
    actions.getLogged();
    expect(ApiActions.get).toBeCalledWith('api/user/getLoggedUser', mockedCallback);
  })

  test('login should call post method from ApiActions with \'api/user/login\' as first, LoginState data as second and returned method from AppActions.getSc method as second argument', () => {
    let loginData = { email: 'exapmple@gmail.com', password: 'examplePassword' };
    LoginState.data = loginData;
    actions.login();
    expect(ApiActions.post).toBeCalledWith('api/user/login', loginData, mockedCallback);
  })
})
