<template>
  <div :class="`${Filter} filter-item`" :style ="{ backgroundImage : `url(${upload_URL})`}"
    @click="console.log()"></div>
</template>

<script>
export default {
  name: "FilterBox",
  props :{
    upload_URL : String,
    Filter : String,
  }
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  background-size: cover;
  background-position: center;
}
</style>