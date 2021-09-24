<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${postData[count].userImage})`}"></div>
      <span class="profile-name">{{postData[count].name}}</span>
    </div>
    <div class="post-body" :style="{ backgroundImage : `url(${postData[count].postImage})`}"></div>
    <div class="post-content">
      <p @click="heartCount++">💚 {{heartCount}}</p>
      <p><strong>{{postData[count].name}}</strong> {{postData[count].content}}</p>
      <p class="date">{{postData[count].date}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name : "Post",
    data(){
      return {
        heartCount : 0,
      }
    },
    props :{
        postData : Array,
        count : Number,
    }
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>