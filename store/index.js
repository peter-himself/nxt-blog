import Vuex from "vuex";

const createStore= () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise( (resolve, reject) => {
                    setTimeout(() => {
                      vuexContext.commit("setPosts", [
                          {
                            id : "1",
                            thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNkuYnGR1Iez9fU4pcX3kt7gqDBJpjjZlz5FQVcBC3uOKOuDh",
                            title : "My first Post",
                            previewText : "This is my first Post in the list",
                          },
                          {
                            id : "2",
                            thumbnail : "https://nerdist.com/wp-content/uploads/2015/08/Hackers-Blu-ray-081815.jpg",
                            title : "Just another cool Post",
                            previewText : "Yet another super cool news entry",
                          }
                        ])
                        resolve();
                    }, 1500)
                  })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore;