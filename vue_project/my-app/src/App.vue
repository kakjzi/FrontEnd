<template>  
<div>
  <h4>xx 원룸</h4>
  <p>{{ price1 }} 만원</p>
</div>
<div>
  <h4>xx 원룸</h4>
  <p>{{ price2 }} 만원</p>
</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      price1 : 80,
      price2 : 70,
    }
  },
  components: {
  }
}

</script>
<style>
</style>



