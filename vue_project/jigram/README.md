## 인스타그램 대충 따라해보기  <br>

style 적용  :style = { color : "Red" }
---
* 클라이언트에서 서버 요청방식
  - get post

	> get - 서버에서 데이터가져올 때 
	post - 서버에 데이터 줄 때

브라우저 새로고침이 필연적이기 때문에 몰래(?) 요청하는 방식 => ajax  !!!!

* ajax 요청 방식
  -  axios 라이브러리 , fetch 함수 


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
|this|this 재정의|this의 의미가 외부의 의미랑 같아짐| 

---
* 이미지 업로드 한 것을 html에 보여주기
	- FileReader, URL.createObjectURL()

> FileReader :  파일을 글자로 변환해줌 <br>
URL.createObjectURL() :  이미지의 가상URL 생성
가상 URL -> blob : http://~~~ 형태




