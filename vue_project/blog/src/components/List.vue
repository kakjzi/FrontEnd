<template>
    <!-- $route -> 현재경로  ex) $route.params.id -->
    <!-- $router ->  페이지 이동관련 기능 ex) $router.push  -->

    <div v-for="item in Blog" :key="item">
        <h5 @click="$router.push(`/detail/${item.number}`)">{{item.title}}</h5>
        <p>{{item.date}} </p>
    </div>

</template>

<script>
    export default {
        name : ' List' ,
        props : {
            Blog : Array,
        }
    }

</script>

<style>

</style>