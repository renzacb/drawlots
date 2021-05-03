<template>
  <Form @name="addName" @startRandomPick="startRandomPick" />
  <Items :users="users" ref="itemsRef" />
</template>

<script>
import { ref } from '@vue/reactivity'
import Form from '../components/Form'
import Items from '../components/Items'
import addUser from '../composables/addUser'
import getUsers from '../composables/getUsers'
export default {
  name: 'Home',
  components: { Form, Items },
  setup() {
    const { users } = getUsers()
    const itemsRef = ref(null)
    const addName = (name) =>
      addUser({ id: users.value.length, name, isPicked: false })
    const startRandomPick = () => {
      const usersLength = users.value.length
      const randomIndex = Math.floor(Math.random() * usersLength)
      const randomPick = users.value[randomIndex]
      console.log(randomPick)
      users.value = users.value.map((user) => ({
        ...user,
        isPicked: user.id === randomPick.id,
      }))
    }
    return { users, addName, startRandomPick, itemsRef }
  },
}
</script>
