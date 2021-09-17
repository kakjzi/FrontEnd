<template>
<div class="black-bg" v-if="isShowModal == true ">
    <div class="white-bg">
        <img :src ="원룸[numItem].image" class = "modal-img">
        <h4>이름 : {{원룸[numItem].title}}</h4>
        <p>가격 : {{원룸[numItem].price}} 원</p>
        <p>상세설명 : {{원룸[numItem].content}}</p>
        <p>허위매물 신고수 : {{신고수[numItem]}} </p>
        <button @click="$emit('close')">닫기</button>
    </div>
</div>

</template>

<script>
export default {
    name: 'Modal',
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