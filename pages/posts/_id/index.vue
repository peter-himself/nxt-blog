<template>
  <div class="single-post-page">
      <section class="post">
          <h1>{{loadedPost.title}}</h1>
          <div class="post-details">
              <div>Last updated on {{loadedPost.updatedDate}}</div>
              <div>Written by {{loadedPost.author}}</div>
          </div>
          <p>{{ loadedPost.content }}</p>
      </section>
      <section class="post-feedback">
          <p>Let me know what you think, by sending me a mail to <a href="mailto:feedback@my-awesome-blog.com">feedback@my-awesome-blog.com</a> </p>
      </section>
  </div>
</template>
<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id : "1",
          author: "Artur Dent",
          updatedDate: new Date(),
          content: "This is actually just some dummy text",
          thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNkuYnGR1Iez9fU4pcX3kt7gqDBJpjjZlz5FQVcBC3uOKOuDh",
          title : "My first Post (ID: " + context.route.params.id + ")",
          previewText : "This is my first Post in the list",
        }
      });
    }, 1000);
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
