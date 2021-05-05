<template>
  <div class="container">
    <div class="add-form">
      <Form @name="addName" @startRandomPick="startRandomPick" />
    </div>
    <div class="items">
      <Items :users="users" />
    </div>
  </div>
</template>

<script>
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
    const addName = (name) => {
      const names = users.value.map((user) => user.name)
      if (names.includes(name)) {
        alert('Name already exists, try another name.')
        return
      }
      addUser({ id: users.value.length, name, isPicked: false })
    }
    return { users, addName, startRandomPick }
  },
}
</script>

<style>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: max(100vh, 500px);
  width: 100%;
}
.add-form {
  height: 10%;
  width: 50%;
  box-shadow: 2px 2px 4px 2px #bdbbbb;
  padding: 1rem;
  margin: 1rem;
}
.items {
  width: 100%;
}
/* wrapper */
</style>