import {createStore} from 'vuex'
import axios from 'axios'
import Data from "./components/data.js"

const store = createStore({
    state(){
        return {
            name : 'kim',
            age : 20,
            like : 0,
            isheart : false,
            more : {},
            postData : Data,
            morePostNum : 0,
        }
    },
    // commit 으로 호출     ->  vuex mutations 한번에 쓰려면 vue 파일 methods 안에 ...mapMutations(['함수명'])
    mutations : {  // state 수정
        setMore(state, data){
            state.more = data
            state.postData.push(data);
            state.morePostNum ++;
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
            }).catch((err)=>{
                console.log(err);
                context.state.morePostNum = 0 ;
                alert("다시하면 될듯?")
            })
        }
    }
})

export default store;