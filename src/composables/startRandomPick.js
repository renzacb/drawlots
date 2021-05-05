import getUsers from './getUsers'
import unsetIsPicked from './unsetIsPicked'
const { users } = getUsers()
const startRandomPick = async () => {
  if (users.value.length < 2) {
    alert('Please add names more than 1.')
    return
  }
  unsetIsPicked()
  const randomIndex = Math.floor(Math.random() * users.value.length)
  const randomPick = users.value[randomIndex]
  await new Promise((resolve) => setTimeout(resolve, 2000))
  users.value = users.value.map((user) => ({
    ...user,
    isPicked: user.id === randomPick.id,
  }))
}
export default startRandomPick
