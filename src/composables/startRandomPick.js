import getUsers from '../composables/getUsers'
const { users } = getUsers()
const startRandomPick = async () => {
  users.value = users.value.map((user) => ({ ...user, isPicked: false }))
  const randomIndex = Math.floor(Math.random() * users.value.length)
  const randomPick = users.value[randomIndex]
  await new Promise((resolve) => setTimeout(resolve, 2000))
  users.value = users.value.map((user) => ({
    ...user,
    isPicked: user.id === randomPick.id,
  }))
}
export default startRandomPick
