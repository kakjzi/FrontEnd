const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("#login-form input");
const link = document.querySelector("a");

loginForm.onsubmit =(event)=>{
    //새로고침막는 함수
    event.preventDefault(); 
    console.log(loginInput.value);
}

link.onclick = (event)=>{
    event.preventDefault();  //##################  () user action 
    console.dir(event)
   
}