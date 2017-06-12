import actions from '../../Actions/TrainingActions';
import AppActions from '../../Actions/AppActions';
import ApiActions from '../../Actions/ApiActions';
import AppState from '../../State/AppState';

const mockedCallback = () => {};
jest.mock('../../Actions/AppActions', () => ({
  getSC: jest.fn(() => { return mockedCallback; })
}))

jest.mock('../../Actions/ApiActions', () => ({
  put: jest.fn(),
  get: jest.fn()
}))

describe('TrainingActions', () => {

  test('getAll should call get method from ApiActions with \'api/training\' as first and returned method from AppActions.getSc method as second argument', () => {
    actions.getAll();
    expect(ApiActions.get).toBeCalledWith('api/training', mockedCallback);
  })

  test('toggleStatus should call put method from ApiActions with \'api/training/trId/toggleStatus\' as first, empty object as second and returned method from AppActions.getSc method as third argument', () => {
    actions.toggleStatus({ id: 2 });
    expect(ApiActions.put).toBeCalledWith('api/training/2/toggleStatus', {}, mockedCallback);
  })
})
