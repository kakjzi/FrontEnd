// event.target 이벤트 발생 지점 
// event.currentTarget 이벤트가 걸려있는 요소

// 이벤트 버블링과 이벤트 캡쳐
// const divs = document.querySelectorAll('div');
// //버블링
// divs.forEach(function(div) {
//     div.onclick = (event) => {
//         console.log(event.currentTarget.className);
//     }
// });

//캡쳐
const divs = document.querySelector('body');
const div = document.querySelector('div.two');
divs.addEventListener('click', e => {
		//이벤트 전파 막기
		e.stopPropagation();
		if (e.target === div){alert('ddd?')}
		alert('clicked');
	}, true);
	 // default 값은 false입니다.



	 //위임
var itemList = document.querySelector('.itemList');
itemList.addEventListener('click', function(event) {
	event.stopPropagation();
	const targetParent = itemList.querySelector('li#item1');
	targetParent.id === event.target.parentNode.id ? console.log("성공") : console.log("실패");
});


var li = document.createElement('li');
var input = document.createElement('input');
var label = document.createElement('label');
var labelText = document.createTextNode('이벤트 위임 학습');

input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'item3');
label.setAttribute('for', 'item3');
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);