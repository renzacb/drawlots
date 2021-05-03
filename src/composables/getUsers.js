const { ref } = require('@vue/reactivity')
const users = ref([])
const getUsers = () => ({ users })
export default getUsers
