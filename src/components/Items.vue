<template>
  <div v-for="user of users" :key="user.id">
    <Item :user="user" @update="update" @remove="remove" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Item from '../components/Item'
import { watch } from '@vue/runtime-core'
import updateUser from '../composables/updateUser'
import deleteUser from '../composables/deleteUser'
export default {
  props: ['users'],
  components: { Item },
  setup(props) {
    const users = ref([])
    watch(props, () => (users.value = props.users))
    const update = (name) => updateUser(name)
    const remove = (id) => deleteUser(id)
    return { users, update, remove }
  },
}
</script>

<style>
</style>