<!--v-on:click == @click-->
<template>

<!-- modal -->
<Modal @close="isShowModal = false"  :isShowModal="isShowModal" :numItem="numItem" :원룸= "원룸" :신고수="신고수" />
<Discount/>

<div class="menu">
  <a v-for="item in menuItem" :key="item">{{item}}</a>
</div>

<Card @openModal="isShowModal = true; numItem=$event;" @report="신고수[i]++;" v-for="(item,i) in 원룸" :key="i" :isShowModal="isShowModal" :원룸= "원룸[i]" :신고수="신고수[i]"/>
</template>

<script>
import data from './post';
import discount from './components/Discount.vue';
import modal from './components/Modal.vue';
import card from './components/Card.vue';

export default {
  name: 'App',
  data(){
    return {
      numItem : 0 , 
      원룸 : data,
      isShowModal : false,
      신고수 : [0, 0, 0, 0, 0, 0],
      menuItem : ['Home', 'Shop', 'About'],
    }
  },
  methods: {

  },
  components: {
    Discount : discount,
    Modal : modal,
    Card : card,
    // === > discount : 위에서 작명한 변수명   
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



