<template>
<div class="black-bg" v-if="isShowModal == true ">
    <div class="white-bg">
        <img :src ="원룸[numItem].image" class = "modal-img">
        <h4>이름 : {{원룸[numItem].title}}</h4>
        <p>상세설명 : {{원룸[numItem].content}}</p>
        <!-- <input @input="month = $event.target.value"> -->
        <input v-model.number="month">
        <!-- <input type="range" v-model="month" min="1" max="12"> -->
        <!-- <select v-model="month">
            <option>213</option>
        </select> -->

        <p>{{month}} 개월 선택함 : 가격 : {{원룸[numItem].price * month}} 원</p>
        <p>허위매물 신고수 : {{신고수[numItem]}} </p>
        <button @click="$emit('close')">닫기</button>
    </div>
</div>

</template>

<script>
export default {
    name: 'Modal',
    data(){
        return{
            month : 1,
        }
    },
    // watch : {
    //     //(a1) a1 변경후 data 
    //     // (a1 , a2) a1 변경후 : a2 변경전 data
    //     month(a){
    //         const checkNum  = /^[0-9]/;
    //         if (!checkNum.test(a) && isNaN(a) == true){
    //             alert('정수만 입력해라');
    //             this.month = 1;
    //         } 
    //     }
    // },
    beforeUpdate() {
        if (this.month == 2){
            alert('2개월 넘 적음');
            this.month = 3;
        }
    },
    props :{
        신고수 : Array,
        원룸 : Object,
        numItem : Number,
        isShowModal : Boolean,
    }
}
</script>

<style>

</style>