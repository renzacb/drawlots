<template>
  <div class="item" :style="{ border: user.isPicked ? '3px solid green' : '' }">
    <button class="remove-btn" @click="remove">delete</button>
    <div class="update-field-area">
      <input class="update-field" type="text" v-model="name" @keyup="update" />
    </div>
  </div>
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
.item {
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 300px;
  align-items: center;
  border: 2px dashed #808083;
}
.update-field-area {
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: center;
}
.update-field {
  border: 1px solid #000000;
  padding: 10px;
}
.remove-btn {
  position: absolute;
  margin: 10px 1rem;
  cursor: pointer;
  background: #ca0202;
  border: none;
  color: #ffffff;
  border-radius: 10px;
  align-self: flex-end;
  padding: 5px 1rem;
  font-weight: 900;
}
</style>