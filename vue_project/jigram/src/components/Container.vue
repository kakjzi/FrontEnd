<template>
  <div>
    <Post :postData="postData"/>
    <Post :postData="postData"/>
    <Post :postData="postData"/>
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
    name: "Container",
  components: {
    Post,
  },
  props:{
    postData : Array,
  }
};
</script>

<style>
</style>