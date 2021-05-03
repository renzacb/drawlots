<template>
  <input
    type="text"
    v-model="name"
    @keyup="update"
    :style="{ border: user.isPicked ? '3px solid green' : '' }"
  />
  <button @click="remove">Remove</button>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
export default {
  props: ['user'],
  emits: ['update', 'remove'],
  setup(props, { emit }) {
    const user = ref(props.user)
    const name = ref(props.user.name)
    watch(props, () => (user.value = props.user))
    const update = () => emit('update', { id: user.id, name: name.value })
    const remove = () => emit('remove', user.id)
    return { name, update, remove, user }
  },
}
</script>

<style>
</style>