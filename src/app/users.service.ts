export class UserService {
  activeUsers = ['David', 'Binh'];
  inactiveUsers = ['ddnn2026', 'ruyu-mina']

  setToActive(c: number) {
    this.activeUsers.push(this.inactiveUsers[c])
    this.inactiveUsers.splice(c, 1)
  }

  setToInactive(c: number) {
    this.inactiveUsers.push(this.activeUsers[c])
    this.activeUsers.splice(c, 1)
  }

}
