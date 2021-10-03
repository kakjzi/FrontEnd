<template>
  <div :class="`${Filter} filter-item`" :style ="{ backgroundImage : `url(${upload_URL})`}" @click="fire">
    <!--props 대신  slot 사용 더 직관적-->
    <!--내용물 (데이터 바인딩)에 사용.-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props :{
    upload_URL : String,
    Filter : String,
  },
  methods: {
    fire(){
      // 보통 vueX 씀 
      // 보내줄 때 this.emitter.emit(변수이름, data)
      // 받을 땐  mounted() 안에 this.emitter.on 사용  (js 이벤트 처럼 )
      this.emitter.emit('click',this.Filter)
    },
  },
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