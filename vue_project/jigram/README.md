

## Jigram 😊<br>

#### style 적용  :style = { BackgroundImage : url( ) }
---
### 서버 요청방식
* get - 서버에서 데이터가져올 때
* post - 서버에 데이터 줄 때

<hr>
브라우저 새로고침이 필연적이기 때문에 몰래(?) 요청하는 방식 => <strong> ajax 

### ajax 요청 방식
  -  axios 라이브러리 
  -  fetch 함수 


axios  사용법은 아래와 같다.
1. axios 라이브러리를 설치
```
npm install axios 
```
2. ajax를 쓰고싶은 해당 파일
```
import axios from 'axios'

ajax.get().then(성공~).catch(실패~)

확인
axios.get('URL').then(function(result){
        //success
        console.log(result.data);
      })
```
부가 설명.

||Function 내부|Arrow Fn| 
|:---:|:---:|:---:| 
|this|this를 재정의|this의 의미가 외부 this와 같아짐| 

---
### 이미지 업로드 한 것을 html에 보여주기
* FileReader
	- 파일을 글자로 변환해줌
*  URL.createObjectURL()
	- 이미지의 가상URL 생성
	- 가상 URL -> blob : http:/~~~ 형태
<hr>

### slot 문법
자식이 부모 데이터 사용
``` swift
<slot></slot> 
```
상위 컴포넌트에 들어간 하위 컴포넌트를 < Header /> 로 쓰는 것이 아니라 열고 닫는(`<Header> </Header> `) 구조로 작성해주고, 그 사이 부분에 template 태그를 추가한다.

각 template 태그에  **v-slot: 또는 # 기호**를 달아주어, 하위 컴포넌트에서 지정할  **slot 요소의 이름을 지정해준다.**  <br> 이름이 없는 template는 하위 컴포넌트에서  **default slot 값으로 처리**된다.
``` swift
<!-- 상위 컴포넌트 -->

<MyTag>
	<!-- <template v-slot:a><span>데이터</span></template> -->
	<!-- <template #a><span>데이터</span></template> -->
	<span>데이터</span>
</MyTag>

<!-- 하위 컴포넌트 -->

<!-- <slot name="a"></slot> -->
	 <slot></slot>
```

**유의점**
props는 src, style 속성에서도 사용가능 했지만<br>
slot은 HTML 태그이기 때문에 HTML 태그처럼만 사용가능.
<hr>

### mitt
> 컴포넌트간 데이터 전송할 때 사용.
> 
라이브러리이므로 설치해야함
설치법
```
npm install mitt
	   or
yarn add mitt
```

#### mitt 셋팅
```
import { createApp } from  'vue' 
import App from  './App.vue'  
import mitt from  'mitt'  

let emitter = mitt(); 
let app = createApp(App); 

app.config.globalProperties.emitter = emitter; 
app.mount('#app')
```

#### mitt 사용법
데이터 발신
```
this.emitter.emit('이벤트명작명', '데이터')
```

데이터 수신 ( mounted( ) 안에 적는 것이 관례)
```
this.emitter.on('이벤트명작명', (a)=>{ 
	데이터 수신시 실행할 코드 
	a는 출력해보면 데이터나옴 
})
```
<hr>

### Vuex 
> 상태관리 라이브러리

#### vuex 셋팅 (예시)
```
import { createStore } from  'vuex'  

const store = createStore({
   state(){ 
	 return {
		 데이터 저장
	 }}, 
	 
	// state 상태 수정
	mutations :  {  
		myfunction(state,data){
			state.데이터 =data
			}
	},   // $store.commit('함수이름') 호출
		 
	
         //ajax 하는 곳 또는 오래 걸리는 작업들.
	actions :{ 
		func(context){
			//context = $store 느낌..
		}
	} // $store.dispatch 로 호출
}) 

export  default store

-------------아래는 main.js----------------
import store from  '위의 파일 경로'
app.use(store).mount('#app')
```

#### vuex state 팁
>computed 이나 methods 에서 ...mapState, ...mapActions 등 활용
> <p>this.$store.commit ,  this.$store.dispatch 생략 가능~

### 기타
|                |methods |computed |
|----------------|-------------------------------|-----------------------------|
|함수 실행|호출 마다 안의 코드 실행           | 최초 1회만 (호출마다 실행 x)             |
|return |            |없으면 안됨          |
|호출 ||함수명만 작성|
<hr>

### PWA
> 웹사이트를 앱 처럼 사용할수있게 함

#### 설치

```
vue add pwa
npm run build 
```
####  PWA 구성요소 (빌드하면 자동으로 생성)
* service-worker.js
	> 어떤 html css js 파일들을 캐싱해놓을건지를 명시하는 파일
	
* manifest.json
	> 앱의 이름, 아이콘, 테마색상 등 설정할 수 있는 파일

### PWA 설정
세부설정을 수정할때는 **vue.config.js** 파일을 수정한다.
그 이유는 빌드마다 manifest.json 이 변경되기 때문

예시 (vue.config.js)
```
module.exports = {
 pwa: { 
 name: '앱이름', 
 themeColor: '#~~',
  msTileColor: '#~~~', 
  workboxOptions: { 
	  exclude: [/\.map$/, /manifest\.json$/, 'index.html'] 
	   }
	} 
}
```
<hr>

### Composition API
> computed, methods 등 파일을 쪼갤 필요없이 관련 기능을 한 곳에 작성.

**setup( )** 이라는 hook같은 거 만들고 코드 작성
(created 과 유사)
```
let 데이터이름 = ref(데이터)
return { 데이터이름 }
```
ref 가 데이터를 **object 자료형**으로 싸매기 때문에 **데이터이름.value**로 접근하여 데이터 수정

* reactive
	>object, array 같은 자료형  
* ref
	> 순자, 문자 같은 자료형

사실상 둘다 똑같음.
<hr>

#### composition API - props
setup(props, context) 형식

toRefs
> ref를 여러번 해주는 함수
