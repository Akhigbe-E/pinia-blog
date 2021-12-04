<template>
  <div>
    <p>Number of Posts: {{allPostNo}}</p>
    <div v-if="posts.length">
      <div style="margin-bottom: 5px" v-for="({title, description, content, category}, index) in posts" :key="index">
        <p>{{ title }}</p>
        <p>{{ description }}</p>
        <p>{{ content }}</p>
        <p>{{ category }}</p>
      </div>
    </div>
    <input type="text" v-model="newPost.title" />
    <input type="text" v-model="newPost.description" />
    <input type="text" v-model="newPost.content" />
    <input type="text" v-model="newPost.category" />
    <button @click="handleNewPost(newPost)">Double it</button>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { reactive } from "vue-demi";
  import { useBlogStore } from "./store/useBlogStore";
  import { useCounterStore } from "./store/useCounterStore";

  type PostCategory = "Technology" | "Architecture"

  type Post = {
    id: string,
    title: string,
    description: string,
    content: string,
    category: PostCategory
}

  const blogStore = useBlogStore();
  const {posts, allPostsLength} = storeToRefs(blogStore);
  const {addPost} = blogStore;

  const counterStore = useCounterStore();
  const {allPostNo, techPostNo, acrchitecturePostNo} = storeToRefs(counterStore);

  const newPost: Post = reactive({
    id: '',
    title: '',
    description: '',
    content: '',
    category: 'Technology'
  });
  const handleNewPost = (newPost: Post) => {
    addPost(newPost)
  }

  console.log(posts)

</script>

<style scoped>

</style>