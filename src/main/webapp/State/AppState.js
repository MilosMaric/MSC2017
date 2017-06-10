import { observable, computed } from 'mobx';
import { UserRoles, MenuItems } from '../Constants/AppConstants'

let state = observable({
  loggedUser: undefined,
  get anyLogged() { return this.loggedUser ? true : false; },
  get isAdmin() { return this.anyLogged && this.loggedUser.type === UserRoles.ADMIN_ROLE; },
  get isLeader() { return this.anyLogged && this.loggedUser.type === UserRoles.GROUP_LEADER_ROLE; },
  get fullName() { return this.anyLogged ? this.loggedUser.firstname + ' ' + this.loggedUser.lastname : ''; },
  get menuItems() {
    let menuItems = MenuItems.anonymous;
    if(this.isLeader) {
      menuItems = menuItems.concat(MenuItems.leader);
    } else if(this.isAdmin) {
      menuItems = menuItems.concat(MenuItems.admin);
    }
    return menuItems;
  },
  error: {}
});

window.state = state;
export default state;
