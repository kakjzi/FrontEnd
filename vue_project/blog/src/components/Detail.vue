<template>

    <div>
        <h4>상세페이지</h4>
        <h5>{{Blog[$route.params.id].title}}</h5>
        <p>{{Blog[$route.params.id].content}}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Detail",
    props : {
        Blog : Array,
    }
}

</script>

<style>

</style>