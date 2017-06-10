const UserRoles = {
  ADMIN_ROLE: "admin",
  GROUP_LEADER_ROLE: "groupLeader"
}

const MenuItems = {
      anonymous: [ { to: "/trainings", text: "Probe"}],
      leader: [ { to: "/myGroup", text: "Moja grupa"}],
      admin: [
                { to: "/users", text: "Rukovodioci"},
                { to: "/groups", text: "Grupe"}
              ],
}

export { UserRoles, MenuItems }
