<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="🔍" @input="search($event.target.value)" />
  <div class="post-header" v-for="item in follower" :key="item">
    <div class="profile" :style="{backgroundImage : `url(${item.image})`}"></div>
    <span class="profile-name">{{item.name}}</span>
  </div>
</div>
</template>

<script>
import { onMounted, ref, toRefs } from 'vue';
import axios from 'axios';
import {useStore} from 'vuex';

export default {
    name: 'mypage',
    props :{
        one : Number,
    },
    //composition API
    //ref(data)로 데이터 생성
    setup(props){
        let follower = ref([]); // 나머지 자료형 
        //let follower = reactive({name: 'kim'}); // array, object 자료형
        let followerOriginal = ref([]);

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
            follower.value = a.data;
            followerOriginal.value = [...a.data];
            })
        })
        function search(userWords){
            let newFollower = followerOriginal.value.filter((a)=>{
                return a.name.toLowerCase().indexOf(userWords.toLowerCase()) != -1
            });
            follower.value = [...newFollower]
        }
        // props 전부 사용
        //Destructuring 문법 참고.
        let { one } = toRefs(props);
        console.log(one.value)

        // watch(감시대상, ()=>{실행 코드 })
        // computed(()=>{return 연산결과})
        // 
        let store = useStore();
        console.log(store.state.name);
        
       
        return {follower, search}
    },
}
</script>

<style>  

</style>