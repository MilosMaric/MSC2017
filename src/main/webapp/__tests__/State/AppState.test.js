import state from '../../State/AppState';
import { UserRoles, MenuItems } from '../../Constants/AppConstants';

describe('AppState', () => {

  describe('anyLogged should be', () => {
    test('false if loggedUser is null', () => {
      state.loggedUser = null;
      expect(state.anyLogged).toBe(false);
    })

    test('false if loggedUser is undefined', () => {
      state.loggedUser = undefined;
      expect(state.anyLogged).toBe(false);
    })

    test('true if loggedUser is a non empty object', () => {
      state.loggedUser = { type: UserRoles.ADMIN_ROLE };
      expect(state.anyLogged).toBe(true);
    })
  });

  describe('isAdmin should be', () => {
    test('false if loggedUser is undefined', () => {
      state.loggedUser = undefined;
      expect(state.isAdmin).toBe(false);
    })

    test('false if loggedUser is null', () => {
      state.loggedUser = null;
      expect(state.isAdmin).toBe(false);
    })

    test('false if loggedUser is an empty object', () => {
      state.loggedUser = {};
      expect(state.isAdmin).toBe(false);
    })

    test('false if loggedUsers type property is the GROUP_LEADER_ROLE constant', () => {
      state.loggedUser = { type: UserRoles.GROUP_LEADER_ROLE };
      expect(state.isAdmin).toBe(false);
    })

    test('true if loggedUsers type property is the ADMIN_ROLE constant', () => {
      state.loggedUser = { type: UserRoles.ADMIN_ROLE };
      expect(state.isAdmin).toBe(true);
    })
  });

  describe('isLeader should be', () => {
      test('false if loggedUser is undefined', () => {
        state.loggedUser = undefined;
        expect(state.isLeader).toBe(false);
      })

      test('false if loggedUser is null', () => {
        state.loggedUser = null;
        expect(state.isLeader).toBe(false);
      })

      test('false if loggedUser is an empty object', () => {
        state.loggedUser = {};
        expect(state.isLeader).toBe(false);
      })

      test('false if loggedUsers type property is the ADMIN_ROLE constant', () => {
        state.loggedUser = { type: UserRoles.ADMIN_ROLE };
        expect(state.isLeader).toBe(false);
      })

      test('true if loggedUsers type property is the ADMIN_ROLE constant', () => {
        state.loggedUser = { type: UserRoles.GROUP_LEADER_ROLE };
        expect(state.isLeader).toBe(true);
      })
  });

  describe('fullName should return', () => {
    test('empty string if loggedUser is undefined', () => {
      state.loggedUser = undefined;
      expect(state.fullName).toBe('');
    })

    test('empty string if loggedUser is null', () => {
      state.loggedUser = null;
      expect(state.fullName).toBe('');
    })

    test('concatenation of loggedUsers firstname, space and lastname field values', () => {
      state.loggedUser = { type: UserRoles.ADMIN_ROLE, firstname: 'Imenko', lastname: 'Prezimić' };
      expect(state.fullName).toBe('Imenko Prezimić');
    })
  });

  describe('menuItems should return', () => {
    test('only anonymous user menu items if loggedUser is undefined', () => {
      state.loggedUser = undefined;
      expect(state.menuItems).toEqual(MenuItems.anonymous);
    })

    test('only anonymous user menu items if loggedUser is null', () => {
      state.loggedUser = null;
      expect(state.menuItems).toEqual(MenuItems.anonymous);
    })

    test('only anonymous user menu items if loggedUser is an empty object', () => {
      state.loggedUser = {};
      expect(state.menuItems).toEqual(MenuItems.anonymous);
    })

    test('concatenated group leader and anonymous user menu items if loggedUser is a group leader', () => {
      state.loggedUser = { type: UserRoles.GROUP_LEADER_ROLE };
      let expected = MenuItems.anonymous.concat(MenuItems.leader);
      expect(state.menuItems).toEqual(expected);
    })

    test('concatenated admin, group leader and anonymous user menu items if loggedUser is an admin', () => {
      state.loggedUser = { type: UserRoles.ADMIN_ROLE };
      let expected = MenuItems.anonymous.concat(MenuItems.admin);
      expect(state.menuItems).toEqual(expected);
    })
  });
});
