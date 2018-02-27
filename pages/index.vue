<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
    
  </div>
</template>
<script>
import PostList from "@/components/Posts/PostList"

export default {
  components: {
    PostList
  }, 
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // }, 
  asyncData(context, callback) {
    console.log("asyncData executed")
     setTimeout(() => {
      callback(null, {
        loadedPosts : [
          {
            id : "1",
            thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNkuYnGR1Iez9fU4pcX3kt7gqDBJpjjZlz5FQVcBC3uOKOuDh",
            title : "My first Post",
            previewText : "This is my first Post in the list",
          },
          {
            id : "2",
            thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNkuYnGR1Iez9fU4pcX3kt7gqDBJpjjZlz5FQVcBC3uOKOuDh",
            title : "Just another cool Post",
            previewText : "Yet another super cool news entry",
          }
        ]
      })
    }, 1500)
  },
  created() {
   

  }
}
</script>

<style scoped>
  .intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}



</style>
