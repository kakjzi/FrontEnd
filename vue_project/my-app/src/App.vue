<!--v-on:click == @click-->
<template>

<!-- modal -->
<!-- <div class="start" :class="{ end : isShowModal }"> -->
<transition name="fade">
  <Modal @close="isShowModal = false" 
  :isShowModal="isShowModal" 
  :numItem="numItem" 
  :원룸= "원룸" 
  :신고수="신고수" />
</transition>


<div class="menu">
  <a v-for="item in menuItem" :key="item">{{item}}</a>
</div>
<Discount v-if="isShowDicount == true" :amount = "amount"/>

<button @click="priceDownSort">가격순정렬(내림차순)</button>
<button @click="priceUpSort">가격순정렬(오름차순)</button>
<button @click="productSort">제품정렬</button>
<button @click="sortBack">되돌리기</button>

<Card @openModal="isShowModal = true; numItem=$event;" @report="신고수[i]++;" v-for="(item,i) in 원룸" :key="i" :isShowModal="isShowModal" :원룸= "원룸[i]" :신고수="신고수[i]"/>
</template>
``
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

      //배열복사 = slice() , map , [...] (spread operater)
      원룸오리지널 : [...data],
      원룸 : data,
      isShowDicount : true,
      isShowModal : false,
      신고수 : [0, 0, 0, 0, 0, 0],
      menuItem : ['Home', 'Shop', 'About'],
      amount : 30,
    }
  },
  methods : {
    //sort -> 원본 변형
    // map, filter -> 원본 보존 
    priceDownSort(){
      this.원룸.sort(function(a,b){
        return a.price - b.price
      });
    },
    priceUpSort(){
      this.원룸.sort(function(a,b){
        return b.price - a.price
      });
    },
    productSort(){
      this.원룸.sort(function(a,b){
        return a.title.localeCompare(b.title)
      });
    },
    sortBack(){
      this.원룸 = [...this.원룸오리지널];
    }
  },
  mounted() {
    // setTimeout(()=>{
    //     this.isShowDicount = false
    // },2000);
  
    const timer = setInterval(()=>{
      if (this.amount == 0){
        clearInterval(timer);
      } else{
        this.amount --;
      }
    }, 1000);
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

/* 퇴장 애니메이션 : ??-leave-from     acitve    to ~~ */
.fade-enter-from{
  transform: translateY(-1000px);
}
.fade-enter-active{
  transition : all 1s;
}
.fade-enter-to{
  transform: translateY(0px);
  }

</style>



