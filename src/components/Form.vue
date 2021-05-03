<template>
  <form @submit.prevent="submitUser">
    <!-- ref here is for getting the element's dom properties -->
    <input type="text" ref="nameField" v-model="name" />
    <button>Add Name</button>
  </form>
  <button @click="startRandomPick">Start Random Pick</button>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  emits: ['name', 'startRandomPick'],
  // setup funtcon fires before mounted and created lifecycle hooks
  setup(props, { emit }) {
    const name = ref('')
    const nameField = ref(null)
    const submitUser = () => {
      emit('name', name.value)
      name.value = ''
    }
    const startRandomPick = () => emit('startRandomPick')
    return { name, submitUser, nameField, startRandomPick }
    /**
    -> ADD ANIMATIONS, GOOD UI STYLING
    FORM 
      - add label, name to CARDS GRID LIST
      - edit or delete a name on the list
      - set waiting time (in seconds)
      - add photo?
    CARDS GRID LIST
      - display card on form add
    RANDOM
      - set waiting time and random picker animation
      - set modal with winner/chosen name
    SAVING
      - pay me first!
      - random name
     */
  },
}
</script>

<style>
</style>