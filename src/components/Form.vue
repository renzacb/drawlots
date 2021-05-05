<template>
  <form @submit.prevent="submitUser">
    <!-- ref here is for getting the element's dom properties -->
    <div class="input-area">
      <input
        class="name-field"
        name="name"
        type="text"
        v-model="name"
        placeholder="Name"
        required
      />
      <button class="add-btn">Add</button>
      <button
        class="random-pick-btn"
        type="button"
        @click="startRandomPick"
        :disabled="startRandomPickDisabled"
      >
        Start Random Pick
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
export default {
  emits: ['name', 'startRandomPick'],
  // setup function fires before mounted and created lifecycle hooks
  setup(props, { emit }) {
    const name = ref('')
    const startRandomPickDisabled = ref(false)
    const submitUser = () => {
      emit('name', name.value)
      name.value = ''
    }
    const startRandomPick = async () => {
      startRandomPickDisabled.value = true
      emit('startRandomPick')
      await new Promise((resolve) => setTimeout(resolve, 3000))
      startRandomPickDisabled.value = false
    }
    return {
      name,
      submitUser,
      startRandomPick,
      startRandomPickDisabled,
    }
  },
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
  height: 100%;
  margin: auto;
}
.input-area {
  display: flex;
  gap: 1rem;
}
input[type='text'] {
  width: 50%;
  background-color: #fffdfd;
  color: #000000;
}
.name-field,
.add-btn,
.random-pick-btn {
  padding: 8px;
  font-size: 12px;
  border-width: 1px;
  border-style: solid;
  background: transparent;
  font-weight: 900;
  border-radius: 3px;
}
.add-btn,
.random-pick-btn {
  cursor: pointer;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
}
.add-btn {
  width: 20%;
  background-color: #28da04;
}
.random-pick-btn {
  width: 30%;
  background-color: #052de0;
}
@media (max-width: 425px) {
  .input-area {
    display: flex;
    flex-direction: column;
  }
}
</style>