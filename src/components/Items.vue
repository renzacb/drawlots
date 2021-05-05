<template>
  <div class="grid">
    <div class="item-wrapper" v-for="user of users" :key="user.id">
      <Item :user="user" @update="update" @remove="remove" />
    </div>
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
.item-wrapper {
  display: flex;
  justify-content: flex-start;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: auto 1rem;
  padding: 1rem;
}
</style>