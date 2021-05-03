import getUsers from './getUsers'
const { users } = getUsers()
const updateUser = (user) => {
  users.value = users.value.map((_user) =>
    _user.id === user.id ? user : _user
  )
}
export default updateUser
