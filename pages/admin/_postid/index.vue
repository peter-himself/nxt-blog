<template>
    <div class="admin-post-page">
        <section class="upate-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";
export default {
    layout: "admin",
    components: {
        AdminPostForm,
    },
  asyncData(context) {
      return axios.get("https://nxt-blog.firebaseio.com/posts/" + context.params.postid + ".json")
      .then(res => {
          return {
            loadedPost: {...res.data, id: context.params.postid}
          }
      })
      .catch(e => context.error(e))
  }, 
  methods: {
      onSubmitted(editedPost) {
        console.log(editedPost)
        this.$store.dispatch("editPost", editedPost)
        .then(() => {
            this.$router.push("/admin");
        })
        //   axios.put("https://nxt-blog.firebaseio.com/posts/" + this.$route.params.postid + ".json", editedPost)
        //     .then(res => console.log(res))
        //     .catch(e => console.log(e))
      }
  }
}
</script>
<style scoped>
    .update-form {
    width: 90%;
    margin: 20px auto;
    }
    @media (min-width: 768px) {
    .update-form {
        width: 500px;
    }
    }
</style>
