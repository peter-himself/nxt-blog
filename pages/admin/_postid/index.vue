<template>
    <div class="admin-post-page">
        <section class="upate-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>
<script>

import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
    layout: "admin",
  components: {
      AdminPostForm,
  },
  data() {
      return {
          loadedPost: {
              author : "Arthur Dent",
              title: "Some ranting and raving",
              content: "Why is my house not there anymore?",
              thumbnailLink : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNkuYnGR1Iez9fU4pcX3kt7gqDBJpjjZlz5FQVcBC3uOKOuDh"
          }
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
