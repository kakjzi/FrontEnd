

## Jigram ๐<br>

#### style ์ ์ฉ  :style = { BackgroundImage : url( ) }
---
### ์๋ฒ ์์ฒญ๋ฐฉ์
* get - ์๋ฒ์์ ๋ฐ์ดํฐ๊ฐ์ ธ์ฌ ๋
* post - ์๋ฒ์ ๋ฐ์ดํฐ ์ค ๋

<hr>
๋ธ๋ผ์ฐ์  ์๋ก๊ณ ์นจ์ด ํ์ฐ์ ์ด๊ธฐ ๋๋ฌธ์ ๋ชฐ๋(?) ์์ฒญํ๋ ๋ฐฉ์ => <strong> ajax 

### ajax ์์ฒญ ๋ฐฉ์
  -  axios ๋ผ์ด๋ธ๋ฌ๋ฆฌ 
  -  fetch ํจ์ 


axios  ์ฌ์ฉ๋ฒ์ ์๋์ ๊ฐ๋ค.
1. axios ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ค์น
```
npm install axios 
```
2. ajax๋ฅผ ์ฐ๊ณ ์ถ์ ํด๋น ํ์ผ
```
import axios from 'axios'

ajax.get().then(์ฑ๊ณต~).catch(์คํจ~)

ํ์ธ
axios.get('URL').then(function(result){
        //success
        console.log(result.data);
      })
```
๋ถ๊ฐ ์ค๋ช.

||Function ๋ด๋ถ|Arrow Fn| 
|:---:|:---:|:---:| 
|this|this๋ฅผ ์ฌ์ ์|this์ ์๋ฏธ๊ฐ ์ธ๋ถ this์ ๊ฐ์์ง| 

---
### ์ด๋ฏธ์ง ์๋ก๋ ํ ๊ฒ์ html์ ๋ณด์ฌ์ฃผ๊ธฐ
* FileReader
	- ํ์ผ์ ๊ธ์๋ก ๋ณํํด์ค
*  URL.createObjectURL()
	- ์ด๋ฏธ์ง์ ๊ฐ์URL ์์ฑ
	- ๊ฐ์ URL -> blob : http:/~~~ ํํ
<hr>

### slot ๋ฌธ๋ฒ
์์์ด ๋ถ๋ชจ ๋ฐ์ดํฐ ์ฌ์ฉ
``` swift
<slot></slot> 
```
์์ ์ปดํฌ๋ํธ์ ๋ค์ด๊ฐ ํ์ ์ปดํฌ๋ํธ๋ฅผ < Header /> ๋ก ์ฐ๋ ๊ฒ์ด ์๋๋ผ ์ด๊ณ  ๋ซ๋(`<Header> </Header> `) ๊ตฌ์กฐ๋ก ์์ฑํด์ฃผ๊ณ , ๊ทธ ์ฌ์ด ๋ถ๋ถ์ template ํ๊ทธ๋ฅผ ์ถ๊ฐํ๋ค.

๊ฐ template ํ๊ทธ์  **v-slot: ๋๋ # ๊ธฐํธ**๋ฅผ ๋ฌ์์ฃผ์ด, ํ์ ์ปดํฌ๋ํธ์์ ์ง์ ํ   **slot ์์์ ์ด๋ฆ์ ์ง์ ํด์ค๋ค.**  <br> ์ด๋ฆ์ด ์๋ template๋ ํ์ ์ปดํฌ๋ํธ์์  **default slot ๊ฐ์ผ๋ก ์ฒ๋ฆฌ**๋๋ค.
``` swift
<!-- ์์ ์ปดํฌ๋ํธ -->

<MyTag>
	<!-- <template v-slot:a><span>๋ฐ์ดํฐ</span></template> -->
	<!-- <template #a><span>๋ฐ์ดํฐ</span></template> -->
	<span>๋ฐ์ดํฐ</span>
</MyTag>

<!-- ํ์ ์ปดํฌ๋ํธ -->

<!-- <slot name="a"></slot> -->
	 <slot></slot>
```

**์ ์์ **
props๋ src, style ์์ฑ์์๋ ์ฌ์ฉ๊ฐ๋ฅ ํ์ง๋ง<br>
slot์ HTML ํ๊ทธ์ด๊ธฐ ๋๋ฌธ์ HTML ํ๊ทธ์ฒ๋ผ๋ง ์ฌ์ฉ๊ฐ๋ฅ.
<hr>

### mitt
> ์ปดํฌ๋ํธ๊ฐ ๋ฐ์ดํฐ ์ ์กํ  ๋ ์ฌ์ฉ.
> 
๋ผ์ด๋ธ๋ฌ๋ฆฌ์ด๋ฏ๋ก ์ค์นํด์ผํจ
์ค์น๋ฒ
```
npm install mitt
	   or
yarn add mitt
```

#### mitt ์ํ
```
import { createApp } from  'vue' 
import App from  './App.vue'  
import mitt from  'mitt'  

let emitter = mitt(); 
let app = createApp(App); 

app.config.globalProperties.emitter = emitter; 
app.mount('#app')
```

#### mitt ์ฌ์ฉ๋ฒ
๋ฐ์ดํฐ ๋ฐ์ 
```
this.emitter.emit('์ด๋ฒคํธ๋ช์๋ช', '๋ฐ์ดํฐ')
```

๋ฐ์ดํฐ ์์  ( mounted( ) ์์ ์ ๋ ๊ฒ์ด ๊ด๋ก)
```
this.emitter.on('์ด๋ฒคํธ๋ช์๋ช', (a)=>{ 
	๋ฐ์ดํฐ ์์ ์ ์คํํ  ์ฝ๋ 
	a๋ ์ถ๋ ฅํด๋ณด๋ฉด ๋ฐ์ดํฐ๋์ด 
})
```
<hr>

### Vuex 
> ์ํ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ

#### vuex ์ํ (์์)
```
import { createStore } from  'vuex'  

const store = createStore({
   state(){ 
	 return {
		 ๋ฐ์ดํฐ ์ ์ฅ
	 }}, 
	 
	// state ์ํ ์์ 
	mutations :  {  
		myfunction(state,data){
			state.๋ฐ์ดํฐ =data
			}
	},   // $store.commit('ํจ์์ด๋ฆ') ํธ์ถ
		 
	
         //ajax ํ๋ ๊ณณ ๋๋ ์ค๋ ๊ฑธ๋ฆฌ๋ ์์๋ค.
	actions :{ 
		func(context){
			//context = $store ๋๋..
		}
	} // $store.dispatch ๋ก ํธ์ถ
}) 

export  default store

-------------์๋๋ main.js----------------
import store from  '์์ ํ์ผ ๊ฒฝ๋ก'
app.use(store).mount('#app')
```

#### vuex state ํ
>computed ์ด๋ methods ์์ ...mapState, ...mapActions ๋ฑ ํ์ฉ
> <p>this.$store.commit ,  this.$store.dispatch ์๋ต ๊ฐ๋ฅ~

### ๊ธฐํ
|                |methods |computed |
|----------------|-------------------------------|-----------------------------|
|ํจ์ ์คํ|ํธ์ถ ๋ง๋ค ์์ ์ฝ๋ ์คํ           | ์ต์ด 1ํ๋ง (ํธ์ถ๋ง๋ค ์คํ x)             |
|return |            |์์ผ๋ฉด ์๋จ          |
|ํธ์ถ ||ํจ์๋ช๋ง ์์ฑ|
<hr>

### PWA
> ์น์ฌ์ดํธ๋ฅผ ์ฑ ์ฒ๋ผ ์ฌ์ฉํ ์์๊ฒ ํจ

#### ์ค์น

```
vue add pwa
npm run build 
```
####  PWA ๊ตฌ์ฑ์์ (๋น๋ํ๋ฉด ์๋์ผ๋ก ์์ฑ)
* service-worker.js
	> ์ด๋ค html css js ํ์ผ๋ค์ ์บ์ฑํด๋์๊ฑด์ง๋ฅผ ๋ช์ํ๋ ํ์ผ
	
* manifest.json
	> ์ฑ์ ์ด๋ฆ, ์์ด์ฝ, ํ๋ง์์ ๋ฑ ์ค์ ํ  ์ ์๋ ํ์ผ

### PWA ์ค์ 
์ธ๋ถ์ค์ ์ ์์ ํ ๋๋ **vue.config.js** ํ์ผ์ ์์ ํ๋ค.
๊ทธ ์ด์ ๋ ๋น๋๋ง๋ค manifest.json ์ด ๋ณ๊ฒฝ๋๊ธฐ ๋๋ฌธ

์์ (vue.config.js)
```
module.exports = {
 pwa: { 
 name: '์ฑ์ด๋ฆ', 
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
> computed, methods ๋ฑ ํ์ผ์ ์ชผ๊ฐค ํ์์์ด ๊ด๋ จ ๊ธฐ๋ฅ์ ํ ๊ณณ์ ์์ฑ.

**setup( )** ์ด๋ผ๋ hook๊ฐ์ ๊ฑฐ ๋ง๋ค๊ณ  ์ฝ๋ ์์ฑ
(created ๊ณผ ์ ์ฌ)
```
let ๋ฐ์ดํฐ์ด๋ฆ = ref(๋ฐ์ดํฐ)
return { ๋ฐ์ดํฐ์ด๋ฆ }
```
ref ๊ฐ ๋ฐ์ดํฐ๋ฅผ **object ์๋ฃํ**์ผ๋ก ์ธ๋งค๊ธฐ ๋๋ฌธ์ **๋ฐ์ดํฐ์ด๋ฆ.value**๋ก ์ ๊ทผํ์ฌ ๋ฐ์ดํฐ ์์ 

* reactive
	>object, array ๊ฐ์ ์๋ฃํ  
* ref
	> ์์, ๋ฌธ์ ๊ฐ์ ์๋ฃํ

์ฌ์ค์ ๋๋ค ๋๊ฐ์.
<hr>

#### composition API - props
setup(props, context) ํ์

toRefs
> ref๋ฅผ ์ฌ๋ฌ๋ฒ ํด์ฃผ๋ ํจ์
