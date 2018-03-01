import Vuex from "vuex";
import axios from "axios";

const createStore= () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post){
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost){
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
                state.loadedPosts[postIndex] = editedPost;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get("https://nxt-blog.firebaseio.com/posts.json")
                    .then(res => {
                        const postArray = [];
                        for(const key in res.data){
                            postArray.push({ ...res.data[key], id: key});
                        }
                        vuexContext.commit("setPosts", postArray)
                    })
                    .catch(e => context.error(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts)
            },
            addPost(vuexContext, post){
                const createdPost = {
                    ...post, 
                    updatedDate : new Date()
                }
                return axios.post("https://nxt-blog.firebaseio.com/posts.json", createdPost)
                .then(result => {
                    vuexContext.commit("addPost", {...createdPost, id: result.data.name})
                    console.log(result)
                })
                .catch(err => console.log(err))
        
            },
            editPost(vuexContext, editedPost){
                const updatedPost = {
                    ...editedPost,
                    updatedDate: new Date()
                }
                return axios.put("https://nxt-blog.firebaseio.com/posts/" + editedPost.id + ".json", editedPost)
                .then(res => {
                    vuexContext.commit("editPost", editedPost)
                    console.log(res)
                })
                .catch(e => console.log(e))
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