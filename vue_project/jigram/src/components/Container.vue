<template>
  <div v-for="(item, i) in postData" :key="i">
    <Post v-if="step == 0" :postData="postData" :count="i" />
  </div>
  <!-- 필터선택페이지 -->
  <div v-if="step == 1">
    <div
      class="upload-image"
      :style="{ backgroundImage: `url(${upload_URL})`}"
    ></div>
    <div class="filters">
      <FilterBox v-for="(item,i) in Filters" :key="i" :upload_URL="upload_URL" :Filter="Filters[i]"
      @selectImg="$emit('selectImg', $event.target.value)"/>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div
      class="upload-image"
      :style="{ backgroundImage: `url(${upload_URL})` }"
    ></div>
    <div class="write">
      <textarea class="write-box" @input="$emit('write', $event.target.value)">write!</textarea>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import Filters from "../jigramFilter";

export default {
  name: "Container",
  data (){
    return {
      Filters : Filters,
    }
  },
  components: {
    Post,
    FilterBox,
  },
  props: {
    step: Number,
    postData: Array,
    upload_URL: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>