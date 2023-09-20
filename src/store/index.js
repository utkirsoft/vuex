
import { createStore } from 'vuex'
import post from '@/store/modules/post'
import user from '@/store/modules/user'
// Create a new store instance.
const store = createStore({
  modules: {
    post,
    user
  }
})
export default store
