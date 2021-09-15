<!--v-on:click == @click-->
<template>

<!-- modal -->
<div class="black-bg" v-if="isShowModal == true ">
  <div class="white-bg">
    <img :src ="원룸[numItem].image" class = "modal-img">
    <h4>이름 : {{원룸[numItem].title}}</h4>
    <p>가격 : {{원룸[numItem].price}} 원</p>
    <p>상세설명 : {{원룸[numItem].content}}</p>
      <Discount/>
    <button @click="isShowModal = false">닫기</button>
  </div>
</div>

<Discount/>

<div class="menu">
  <a v-for="item in menuItem" :key="item">{{item}}</a>
</div>

<div v-for="(a,i) in 원룸" :key="i">
  <img :src="a.image" class="room-img">
  <h4 @click="isShowModal = true; numItem = i">{{a.title}}</h4>
  <p>{{a.price}} 원</p>
</div>
</template>

<script>
import data from './post';
import Discount from './Discount.vue';

export default {
  name: 'App',
  data(){
    return {
      numItem : 0 , 
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
    Discount
    // === > Discount : 위에서 작명한 변수명   
    //이렇게 작성해도 ㄱㅊ  앞뒤로 같으면 하나로 축약가능
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
.modal-img{
  width: 100%;
  height: 50%;
}
.discount{
    background-color: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
</style>



