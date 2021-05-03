import getUsers from './getUsers'
const { users } = getUsers()
const deleteUser = (id) => users.value.splice(id, 1)
export default deleteUser
