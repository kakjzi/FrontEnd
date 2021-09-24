# jigram

인스타그램 대충 따라해보기
---
style 적용  :style = { color : "Red" }

클라이언트에서 서버 요청방식
get post

get - 서버에서 데이터가져올 때 
post - 서버에 데이터 줄 때

이 방식에서 브라우저 새로고침이 필연적

몰래(?) 요청하는 방식 => ajax 

ajax 요청 방식
axios 라이브러리 , fetch 함수 

fetch는 꽤 최근 브라우저에서만지원..

나는 axios를 연습해봤다.


우선 axios 라이브러리를 설치한다.

npm install axios 

ajax를 쓰고싶은 파일에 
import axios from 'axios'

ajax.get().then(성공~).catch(실패~)

확인
axios.get('URL').then(function(result){
        //success
        console.log(result.data);
      })


==========
부가 설명.

this 사용시 
function은 this를 재정의해줌.
arrow function은 this의 의미가 함수 밖의 의미랑 같아짐

==========


이미지 업로드 한것을 html 에 보여주려면
FileReader, URL.createObjectURL()

FileReader은 파일을 글자로 변환해줌

URL.createObjectURL()은 이미지의 가상URL을 생성해줌
blob : http://~~~ 형태


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
