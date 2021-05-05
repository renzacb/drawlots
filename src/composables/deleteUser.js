import getUsers from './getUsers'
import unsetIsPicked from './unsetIsPicked'
const { users } = getUsers()
const deleteUser = (id) => {
  unsetIsPicked()
  users.value.splice(id, 1)
}
export default deleteUser
