const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";

loginForm.onsubmit =(event)=>{
    //새로고침막는 함수
    event.preventDefault(); 
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    //greeting.innerText="Hello " + username;
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
    localStorage.setItem('username', 'tom')
   
    localStorage.removeItem('username');
    
}