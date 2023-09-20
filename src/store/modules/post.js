export default {
  state: {
    posts: []
  },
  mutations: {

    // in mutation always first parameter is state
    // second param this is a data we want to give to function
    updatePosts(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    // in actions always first param is a context(ctx)
    async fetchPosts(ctx, ) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=3"
      )
      const posts = await res.json()
      ctx.commit('updatePosts', posts)
      // we retrive posts from backend
    //  mutation changed state

    }
  },
  getters: {
    allPosts(state) {
      return state.posts
    }
  }
}
