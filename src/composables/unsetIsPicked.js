import getUsers from './getUsers'
const { users } = getUsers()
const unsetIsPicked = () =>
  (users.value = users.value.map((user) => ({ ...user, isPicked: false })))
export default unsetIsPicked
