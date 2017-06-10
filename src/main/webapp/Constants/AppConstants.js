const UserRoles = {
  ADMIN_ROLE: "admin",
  GROUP_LEADER_ROLE: "groupLeader"
}

const GroupTypes = {
  DANCING: "dancing",
  ORCHESTRA: "orchestra"
}

const MenuItems = {
      anonymous: [ { to: "/trainings", text: "Probe"}],
      leader: [ { to: "/myGroup", text: "Moja grupa"}],
      admin: [
                { to: "/users", text: "Rukovodioci"},
                // { to: "/groups", text: "Grupe"}
              ],
}

const UIModes = {
  VIEW: 'view_ui_mode',
  EDIT: 'edit_ui_mode',
  ADD: 'add_ui_mode'
}

export { UserRoles, MenuItems, UIModes, GroupTypes }
