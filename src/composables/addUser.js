import getUsers from './getUsers'
const { users } = getUsers()
const addUser = (name) => {
  users.value.push(name)
}
export default addUser
