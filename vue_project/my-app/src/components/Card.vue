<template>
<div>
    <img :src="원룸.image" class="room-img">
    <h4 @click="$emit('openModal',원룸.id)">{{원룸.title}}</h4>
    <p>{{원룸.price}} 원</p>
    <p>허위매물 신고수 : <button @click="$emit('report')">{{신고수}}</button></p>
</div>
</template>

<script>
export default {
    name: "Card",
    props : {
        원룸 : Object,
        신고수: Array,
        isShowModal : Boolean
    }
}
</script>

<style>

</style>