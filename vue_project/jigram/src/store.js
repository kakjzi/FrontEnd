import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
    state(){
        return {
            name : 'kim',
            age : 20,
            like : 0,
            isheart : false,
            more : {},
        }
    },
    // commit 으로 호출     ->  vuex mutations 한번에 쓰려면 vue 파일 methods 안에 ...mapMutations(['함수명'])
    mutations : {  // state 수정
        setMore(state, data){
            state.more = data
        },
        changeName(state){
            state.name = "박"
        },
        addCount(state,data){
            state.age += data
        },
        clickPost(state){
            if(state.isheart) {
                state.like--;
                state.isheart = false;
            }
            else{
                state.like++;
                state.isheart = true  ;
            }
        },
    },

    // dispatch 로 호출
    actions :{ //ajax  하는 곳 또는 오래 걸리는 작업들.
        //context = $store 느낌..
        getdata(context){
            axios.get("https://kakjzi.github.io/more0.json")
            .then((a)=>{
                context.commit('setMore', a.data);
            })
        }

    }
})

export default store;