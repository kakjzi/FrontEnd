// v-on:click == @click
<template>

<div class="black-bg" v-if="isShowModal == true ">
  <div class="white-bg">
    <h4>상세페이지임</h4>
    <p>상세페이지내용임</p>
    <button @click="isShowModal = false">닫기</button>
  </div>
</div>

<div class="menu">
  <a v-for="item in menuItem" :key="item">{{item}}</a>
</div>

<div v-for="(item,i) in 원룸" :key="i">
  <img :src="원룸[i].image" class="room-img">
  <h4>{{원룸[i].title}}</h4>
  <p>{{원룸[i].price}} 원</p>
</div>
</template>

<script>
import data from './post';

export default {
  name: 'App',
  data(){
    return {
      원룸 : data,
      isShowModal : false,
      신고수 : [0, 0, 0],
      price : ['70', '100', '20'],
      menuItem : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '송내동원룸']
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style>
#app{
  text-align: center;
}
body{
  margin: 0;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img{
  width: 100%;
  margin-top: 40px;
}

.menu{
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a{
  color: white;
  padding: 10px;
}

</style>



