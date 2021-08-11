const loginForm = document.getElementById("login-form");

//const loginInput = document.querySelector("#login-form input");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

//  check userName Valid ex1
/*  html  input tag가 div 에 담겨있을 때 

loginButton.onclick = (event) => {
    const userName = loginInput.value;
    if (userName === ""){
        alert("Please write your name!");
    }else if (userName.length > 15){
        alert("Your name is too long.");
    }
} 
*/

//  check userName Valid ex2
// input tag 가 form 에 담겨있을 때 클릭이벤트 필요 없음.
//html 기능을 최대한 사용할것. 
// <button>Log In</button>      ->>  <input type="submit" value="Log In" />




// 문제는 Web Page 새로고침되는 현상
