<template>
  <div class="container">
    <Form @name="addName" @startRandomPick="startRandomPick" />
    <Items :users="users" ref="itemsRef" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Form from '../components/Form'
import Items from '../components/Items'
import addUser from '../composables/addUser'
import getUsers from '../composables/getUsers'
import startRandomPick from '../composables/startRandomPick'
export default {
  name: 'Home',
  components: { Form, Items },
  setup() {
    const { users } = getUsers()
    const itemsRef = ref(null)
    const addName = (name) =>
      addUser({ id: users.value.length, name, isPicked: false })
    return { users, addName, startRandomPick, itemsRef }
  },
}
</script>

<style>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: max(60vh, 500px);
  width: 100%;
}
</style>